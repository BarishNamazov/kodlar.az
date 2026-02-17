---
title: "TCP-də Tıxac Nəzarəti: Qısa və Praktik Giriş"
author: eldar-hasanov
description: "Tıxac Nəzarəti Nədir və TCP bunu necə edir?"
date: 2026-02-10
categories: [Şəbəkə]
---

## Giriş

Hər dəfə bir veb-səhifə açanda, video yayımlayanda və ya fayl endirəndə,
kompüteriniz paketləri ortaq qlobal şəbəkəyə göndərməyə başlayır. Eyni anda
milyonlarla başqa cihaz da tam olaraq bunu edir. Buna baxmayaraq, bir çox
səviyyədə ucuz, kütləvi istehsal olunan avadanlıqlardan ibarət olan İnternet
sabit qalır və istifadəçilərinə xidmət etməyə davam edir. Təsəvvür etdiyiniz
kimi, bu, heç də sehr deyil, router-ların dolub-daşmasının dolub-daşmasının və
şəbəkənin yüklənib iflic olmasının qarşısını alan düşünülmüş və ağıllı
mexanizmlərin nəticəsidir.

1980-ci illərin sonlarında İnternetin bəzi hissələrində bu gün “congestion
collapse” adlandırılan vəziyyət yaşanmışdı. Şəbəkələr yenidən göndərilən
paketlərlə o qədər yüklənmişdi ki, faydalı ötürmə sürəti mövcud tutumun çox
kiçik bir hissəsinə düşmüşdü. Xətlər dolu idi, amma demək olar ki, heç bir real
məlumat qarşı tərəfə çatmırdı. Bu böhranın həlli TCP-nin ən vacib
xüsusiyyətlərindən birinə çevrildi: tıxac nəzarəti (congestion control). Bu gün
hər bir TCP bağlantısı (istər kiçik bir API sorğusu, istərsə də çox-giqabaytlıq
fayl yükləməsi) məlumatı hansı sürətlə göndərməli olduğunu müəyyən etmək üçün bu
alqoritmlərə güvənir.

Hazırda Imperial College-də şəbəkə sistemləri üzrə tezis üzərində işləyərkən,
son iki il ərzində bu mövzunu yaxından öyrənmişəm. Bu bloq yazısı isə mövzu ilə
bağlı bəzi bilikləri paylaşmaq və oxucunu bu sahəni daha dərindən araşdırmağa
həvəsləndirmək cəhdimdir.

## Tıxac nəzarəti (Congestion Control) nədir?

**Tıxac nəzarəti (Congestion Control, CC)** şəbəkədə yaranan tıxacların
qarşısını alan, onları aşkar edən və idarə edən mexanizmdir. Bu mexanizmin vacib
olmasının səbəbi odur ki, tıxaclı şəbəkələrdə performans qeyri-sabit və
proqnozlaşdırılması çətin olur, üstəlik məlumat itkisi baş verə bilər. Daha ağır
hallarda isə tıxac hətta şəbəkənin tam çökməsinə səbəb ola bilər.

## CC necə həyata keçirilir?

Aşağıdakı müzakirəni başa düşmək üçün
[TCP protokolunu](https://az.wikipedia.org/wiki/TCP) qısa şəkildə anlamaq
vacibdir. Əsasən, TCP etibarlı və bağlantıya əsaslanan nəqliyyat səviyyəli
protokoldur. Burada “etibarlı” anlayışı çox önəmlidir: TCP məlumatı paketlərə
bölür, paketlərin təyinat nöqtəsinə çatmasını və düzgün ardıcıllıqla qəbul
olunmasını təmin edir. UDP kimi alternativlərdən fərqli olaraq, TCP paketlərin
etibarlı çatdırılması və düzgün sıralanması üçün mexanizmlər təqdim edir. Bu
proses “ACK” adlanan təsdiq mesajları vasitəsilə həyata keçirilir. Qəbul edən
tərəf müəyyən bir paketi aldığını bildirmək üçün göndərənə ACK göndərir.
Göndərən bütün ACK-ləri aldıqdan sonra həmin “pəncərə” daxilindəki bütün
məlumatın çatdırıldığını hesab edə bilər. Burada “pəncərə” anlayışı vacibdir:
göndərən tərəf göndərmə pəncərəsini təyin edir və bu, eyni anda (hamısı ACK
olunana qədər) nə qədər məlumatın göndəriləcəyini müəyyənləşdirir. Pəncərənin
ölçüsünə təsir edən başqa faktorlar da var, məsələn, göndərənin imkanları və
flow control mexanizmləri. Amma CC bu ölçünü müəyyən edən əsas komponentlərdən
biridir. Xüsusilə, congestion window (cong_wnd) anlayışı var ki, bu da şəbəkənin
eyni anda daşıya biləcəyi maksimum məlumat həcmini müəyyən edir.

## Şəbəkənin tıxaclı olduğunu necə anlayırıq?

Tıxacı idarə etmək üçün əvvəlcə onu aşkar etməyi bacarmalıyıq. Tıxacın əsas
əlamətlərindən biri paket itkisidir. Paketlərin itirildiyini, müəyyən bir paket
üçün ACK almadıqda başa düşə bilərik (ya paket, ya da ACK özü itmiş ola bilər),
bəzən bu hal bir neçə dəfə təkrarlana bilər. TCP bağlantısı həmçinin timeout
verə bilər, yəni bütün paketlərin çatdırıldığını təsdiqləmək üçün həddən artıq
uzun gözləmiş oluruq — bu da əslində itki deməkdir.

Amma paketlər tam itməzdən əvvəl də erkən tıxac siqnallarını müşahidə etmək
mümkündür. Bunun üçün Round Trip Time (RTT), yəni gediş-gəliş vaxtının artmasına
baxırıq — başqa sözlə, çatdırılma gecikməsi böyüyür. Avtomobillərlə dolu bir
yolda olduğu kimi, tıxaclı linklərdən keçmək də daha çox vaxt aparır.

## CC-yə əsas yanaşmalar

TCP tıxac nəzarəti üçün müxtəlif alqoritmik yanaşmalar mövcuddur. Onların əsas
fərqi tıxac siqnalını necə aşkar etmələri və göndərmə sürətini necə
tənzimləmələridir.

### İtkiyə əsaslanan CC

İtkiyə əsaslanan CC ən fundamental və adətən ən geniş yayılmış yanaşmadır. Əsas
ideya paket itkisini aşkar etmək və göndərmə pəncərəsini azaltmaqdır. Bu yanaşma
Reno, NewReno, Tahoe və CUBIC (Linux-da standart) kimi klassik TCP
variantlarında tətbiq olunur.

Adətən itkiyə əsaslanan nəzarət aşağı göndərmə sürəti ilə başlayıb onu additiv
şəkildə artırmaq prinsipinə əsaslanır. Əgər itki aşkar edilərsə (bu, adətən eyni
paket üçün 3 təkrarlanan ACK vasitəsilə başa düşülür) göndərmə sürəti
multiplikativ şəkildə azaldılır. Bu texnika Additive Increase, Multiplicative
Decrease (AIMD) — Additiv Artım, Multiplikativ Azalma adlanır.

Əsas üstünlüyü ondadır ki, bu yanaşma bir çox ənənəvi şəbəkə quruluşlarında
kifayət qədər yaxşı işləyir. Həm də nisbətən sadə implementasiya olunur və
şəbəkə dizaynının əsas prinsiplərinə uyğundur.

Əsas çatışmazlıq isə ondan ibarətdir ki, itki yalnız şəbəkə artıq tıxaclı
vəziyyətə düşəndə baş verir, yəni infrastruktur artıq yüklənmiş olur. Bu
mexanizm işə düşəndə, switch-lərdəki buferlər artıq dolmuş olur və gecikmə bir
müddətdir artmaqda davam edir.

### ECN-ə əsaslanan CC

Bəzi hallarda tıxac haqqında siqnalı mümkün qədər tez almaq faydalı olur. Buna
görə də bəzi infrastruktur mühitlərində şəbəkədaxili (in-network) mexanizmlərə
üstünlük verilir.

Xüsusilə, Explicit Congestion Notification (ECN) şəbəkə üzərində tıxac yaranmağa
yaxınlaşanda marşrutlaşdırıcı və ya switch-lərin paketləri atmaq əvəzinə onları
işarələməsi mexanizmidir. Adətən şəbəkə inzibatçıları bufer doluluğu üçün
müəyyən hədd təyin edirlər (məsələn, 70%). Bu hədd keçildikdə, paketlər ECN ilə
işarələnir. Qəbul edən tərəf bu işarəni gördükdə, bunu göndərənə bildirir və
göndərən də göndərmə pəncərəsini azaldaraq sürətini uyğunlaşdırır.

Əsas üstünlüyü ondan ibarətdir ki, bu yanaşma heç bir məlumat itirilmədən əvvəl
göndərmə sürətini azaltmağa imkan verir və beləliklə tıxacın qarşısını almaq
mümkün olur. Yəni şəbəkə tıxacı məlumat itirmədən siqnal verə bilir.

Bu yanaşmanın əsas problemi isə məşhur end-to-end prinsipi ilə müəyyən dərəcədə
ziddiyyət təşkil etməsidir. Bu prinsipə görə, şəbəkənin özü tərəfindən təmin
olunmayan əlavə funksionallıq tam şəkildə son nöqtələrdə (yəni göndərən və qəbul
edən tərəfdə) həyata keçirilməlidir. Buna görə də, şəbəkə üzərində nəzarət edə
bilmədiyimiz bir çox ssenaridə bu yanaşmanı tətbiq etmək mümkün olmur.

### BBR

Congestion control-a müasir yanaşmalardan biri Google tərəfindən təqdim olunub:
Bottleneck Bandwidth and Round-trip propagation time (BBR). Bu, Google-ın bu gün
də öz infrastrukturunda istifadə etdiyi alqoritmlərdən biridir.

Əsas ideya ondan ibarətdir ki, itkiyə və ya switch bildirişlərinə əsaslanmaq
əvəzinə, şəbəkə haqqında model qurmaq üçün müxtəlif metrikləri davamlı şəkildə
ölçürük. Bu model əsasən iki vacib göstəriciyə əsaslanır:

1. Bottleneck bandwidth — marşrut üzərindəki ən zəif linkin bant genişliyi
2. Minimum RTT — paketin ən kiçik gediş-gəliş vaxtı

Sadə bir bənzətmə ilə desək, sanki məlumat yox, su ötürürük. Birinci metrik
borunun ən dar hissəsinin enini, ikinci metrik isə uzunluğunu göstərir. Təbii
olaraq, biz Bandwidth × RTT sürəti ilə göndərmək istəyərik. Bu, borunun
“həcmi”nə, yəni şəbəkənin eyni anda daşıya biləcəyi maksimum məlumat miqdarına
uyğun gəlir.

Nəticədə, əsas üstünlük ondan ibarətdir ki, yüksək ötürmə sürəti və aşağı
gecikmə əldə olunur, yəni tıxacın özü demək olar ki, ümumiyyətlə yaranmır.
BBR-in başqa bir yaxşı xüsusiyyəti də ədalətli paylaşmadır: əgər eyni linki
bölüşən bir neçə axın varsa və onların hamısı BBR istifadə edirsə, onlar
arasında nisbətən ədalətli paylaşma müşahidə olunur.

Çatışmazlığı isə odur ki, bu yanaşma hələ də geniş yayılma və inkişaf
mərhələsindədir. Həmçinin bəzi digər TCP variantları ilə eyni şəbəkəni
paylaşanda davranış problemləri müşahidə oluna bilir.

## Nəticə

Ümid edirəm bu yazı sizin üçün maraqlı oldu. Bu bloqa congestion control
mövzuları üçün bir növ “menyu” kimi baxa bilərsiniz — qısa icmal verərək mövzunu
daha dərindən araşdırmağa həvəsləndirmək məqsədi daşıyır. Məncə bu, kompüter
sistemlərinin ən maraqlı sahələrindən biridir, çünki real həyatda da oxşar
prinsiplərlə işləyən çoxlu analoqlar görmək mümkündür. Bu mövzu həm də istifadə
ssenarisindən çox asılıdır: ənənəvi şəbəkələr, simsiz mühitlər, AI data
mərkəzləri — hamısının trafik nümunələri fərqlidir və buna uyğun müxtəlif
yanaşmalar tələb olunur.

## Əlavə resurslar

Əgər bu mövzu xoşunuza gəldisə və daha dərindən öyrənmək istəyirsinizsə, aşağıda
yolunuza kömək edəcək bir neçə resurs tapa bilərsiniz:

- [Congestion Control in Computer Networks](https://www.geeksforgeeks.org/computer-networks/congestion-control-in-computer-networks/)
- [UC Berkeley CS 168: Introduction to the Internet](https://sp25.cs168.io/#:~:text=13.-,Transport,-3%3A%20Congestion%20Control)
- [Stanford CS 144: Introduction to Computer Networking](https://cs144.github.io/#:~:text=Why%20Congestion%20Control%3F)
- [TCP Congestion Control](https://datatracker.ietf.org/doc/html/rfc5681)
- [TCP Tahoe and TCP Reno](https://www.geeksforgeeks.org/computer-networks/tcp-tahoe-and-tcp-reno/)
- [BBR: Congestion-Based Congestion Control](https://research.google/pubs/bbr-congestion-based-congestion-control-2/)
- [What is ECN (Explicit Congestion Notification)?](https://www.geeksforgeeks.org/computer-networks/what-is-ecnexplicit-congestion-notification/)
- [Congestion Avoidance and Control](https://ee.lbl.gov/papers/congavoid.pdf)
- [Computer Networking: a Top Down Approach ](https://gaia.cs.umass.edu/kurose_ross/index.php)
- [CUBIC for Fast Long-Distance Networks](https://datatracker.ietf.org/doc/html/rfc8312)
