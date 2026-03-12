---
title: "Kompüter Elmlərini, Əslində, Necə Öyrənməli"
author: abutalib-barish-namazov
description:
  "Təkcə diplom yox, həqiqi bilik əldə etmək istəyən tələbələr üçün bələdçi."
date: 2026-03-12
categories: ["Təhsil"]
resource: true
resource_audiences: ["Universitet Tələbələri"]
---

Başlamazdan əvvəl, bu məqalənin (ona təlim keysi də demək olar) müəllifinin kim
olması və niyə bu yazıda deyilənlərə əhəmiyyət verməli olmağınız haqqında bir
neçə söz deyim. Mənim adım [Abutalıb-Barışdır](https://barish.me/about). Mən
MIT-də Kompüter Elmləri və Mühəndisliyi üzrə təhsil almışam,
[Microsoft](https://www.microsoft.com/) və
[Citadel](https://www.citadel.com/)-də təcrübə keçmişəm, tədqiqatçı mühəndis
kimi işləmişəm və indi [[PhD]] dərəcəmi almaq üçün yenidən MIT-yə qayıtmışam. Bu
müddət ərzində MIT-də ["Proqramlaşdırmaya giriş"](https://py.mit.edu/)-dən
tutmuş ["Proqram təminatı dizaynı"](https://61040-fa23.github.io/)-na qədər bir
neçə fənn üzrə [[müəllim köməkçisi]] olmuşam və dərs demişəm. Eyni zamanda
Azərbaycanda olimpiadaçı məktəblilər üçün
[Qış Kampları](https://tedbilik.github.io/kamp/) hazırlıqları təşkil etmişəm.
Bütün bunlar mənə həyatınızı necə yaşamaq barədə sizə ağıl vermək hüququ
qazandırmır. Lakin bu o deməkdir ki, insanların kompüter elmlərini necə
öyrəndiyini - nəyin işə yaradığını, nəyin yaramadığını və illər sonra
mühəndislərə əziyyət verəcək boşluqların məhz harada yarandığını müşahidə etməyə
ciddi vaxt sərf etmişəm. Başqa sözlə, bu məqalə öz yolumun başlanğıcında olarkən
kiminsə mənə izah etməsini istədiklərimdən ibarətdir. Düşünürəm ki, sizə
əhəmiyyətli ola bilər.

---

## Kimlər üçün yazılıb

Siz hazırda...

Kompüter elmlərini seçməyi düşünən bir yuxarı sinif şagirdi ola bilərsiniz.
Təhsilinizin ortasında olub, özünüzün də tam inanmadığınız bir [[axın]]la
aparıldığınızı hiss edə bilərsiniz. Bu gün işdə yazdığı kodu təhvil vermiş,
lakin maşının, yəni sistemin bütöv qatlarını tam anlamadığını daxilən hiss edən
yeni bir məzun ola bilərsiniz. Və ya rəsmi bir təhsilin ona nələr qazandıra
biləcəyini düşünən, özünü yetişdirmiş bir proqramçı ola bilərsiniz.

Bu yazı sizin hamınız üçündür.

Qısaca və aydın desəm, əsas fikrim budur: kompüter elmləri üzrə təhsil sizin edə
biləcəyiniz ən dəyərli intellektual investisiyalardan biridir, lakin buna necə
yanaşmağınız, demək olar ki, hər şeyi həll edir. Dörd illik təhsilini başa
vurub, əlində diplomdan və imtahanlardan keçmək üçün yaradılmış yaddaş
əzələsindən başqa heç nəyi olmayan insanlar var. Amma unutmayaq ki, heç vaxt
universitetin qapısından belə keçməyib, [[hesablama sistemləri]]nin işləmə
mexanizmini dərindən anlayan insanlar da var. Buradakı fərq nə zəka ilə, nə də
oxuduğunuz təhsil ocağı ilə bağlıdır. Əsas fərq öyrəndiyiniz materialla
qurduğunuz əlaqənin keyfiyyətindədir.

Bir məsələyə lap əvvəldən aydınlıq gətirməliyəm: bəli, [[Süni İntellekt]] və
[[Böyük Dil Modelləri]] mənzərəni dəyişir. Xeyr, bu, kompüter elmləri biliyini
köhnəlmiş etmir. Əksinə, bunun tam tərsi doğrudur. Bu mövzuya irəlidə ətraflı
qayıdacağıq, amma indilik bunu bilmək kifayətdir: alətlərin bəlkə də heç
özünüzün qiymətləndirə bilməyəcəyiniz qədər [[kod generasiya]] etdiyi bir
dövrdə, maşının necə işlədiyini anlamaq heç vaxt indiki qədər vacib olmamışdı.

Bu yazı silsilə məqalələrin ilkidir. Gələcək yazılarda [[təcrübə proqramları]]
və iş yerləri, müsahibələr və karyera qurmaq kimi mövzulara toxunacağıq. Ancaq
təməl möhkəm deyilsə, bunların heç birinin mənası qalmır. Buna görə də, elə
buradan başlayırıq.

> **Haradan başlamaq barədə qısa qeyd.** Əgər kompüter elmləri proqramında
> oxumağı seçməyi düşünən bir yuxarı sinif şagirdisinizsə, yazını əvvəldən
> sonacan oxuyun. Əgər biliklərində boşluqlar hiss edən və artıq işləyən bir
> mühəndissinizsə, birbaşa
> [VI Bölməyə](#universitetdə-yaxşı-oxumadım-bəs-indi-nə-edim) keçə bilərsiniz.
> Əgər bir kompüter elmləri proqramı məzununun nələri bilməli olduğuna dair əsas
> arqumenti oxumaq istəyirsinizsə, bu yazının ürəyi olan
> [IV Bölməyə](#bir-kompüter-elmləri-məzunu-nələri-bilməlidir-bütöv-mənzərə)
> baxa bilərsiniz.

## Universitetdə oxumaq, əslində, nə deməkdir

Kompüter elmləri təhsilində sakit epidemiya hökm sürür. Bu, sadəcə bizim ölkədə
deyil. Tələbələr universitetə orta məktəbin davamı kimi yanaşırlar: mühazirələrə
gedirsən, imtahanları verirsən, diplomunu alırsan. Dörd il keçib gedir. Və
ehtimal edilir ki, ortada öyrənilmiş hər şey var.

Bu, universitetin əsl məqsədini səhv anlamaqdır.

Universitet diplom fabriki deyil. O, intellektual inkişaf üçün sistemli bir
mühitdir və həyatınız boyu əldə edə biləcəyiniz nadir belə mühitlərdən biridir.
[[Tədris proqramı]] sizə ilk işəgötürəninizin istifadə etdiyi texnologiyalar
toplusunu öyrətmək üçün nəzərdə tutulmayıb. O, təməl düşüncə tərzini
formalaşdırmaq üçün dizayn edilib: elə bir düşüncə tərzi ki, arxa planda nələrin
baş verdiyini anladığınız üçün istənilən yeni texnologiyanı cəmi bir həftə
ərzində qavramağınıza imkan verir.

Bunu deməklə kursları və ya fərdi şəkildə öyrənməyi pisləmək istəmirəm. Onlar
fərqli, lakin tamamilə məqbul məqsədlərə xidmət edirlər. Ancaq onların strukturu
da fərqlidir. Kurslar sizi bir neçə ay ərzində işə hazır vəziyyətə gətirməyə
köklənir. Universitet proqramı isə sizə onilliklər boyu xidmət edəcək bir
[[hesablama düşüncə modeli]] formalaşdırmağı hədəfləyir. Bunlar eyni məqsədlər
deyil və onları bir-biri ilə səhv salmaq isə sonda hər ikisindən məyusluqla
ayrılmağınıza səbəb olur.

Universitetə getmək ilə universitetdə oxumaq arasında çox böyük fərq var. Bir
çox tələbə birincini edir, lakin ikincini etdiyinə səhv şəkildə inanır.

### Universitet əslində sizə nələr verir

Sadəcə bir vəsiqədən (diplomdan) əlavə, yaxşı bir universitet təkbaşına əldə
edilməsi həqiqətən də çətin olan bir neçə imkanı sizə qazandırır.

Birincisi, **pedaqoji məqsədlə dizayn edilmiş [[tədris proqramı]]**. Kimlərsə
nəyi birinci öyrətmək, nəyin nəyin üzərində qurulduğu və
[[əməliyyat sistemləri]]nin niyə [[məlumat strukturları]]ndan sonra gəldiyi
barədə dərindən düşünüb. Bu ardıcıllığı təbii bir şey kimi qəbul etmək asandır,
amma onu təkbaşına, sıfırdan qurmaq çox çətindir.

İkincisi, **rəy mexanizmləri**. İmtahanlar, layihələr, [[müəllim köməkçiləri]]
tərəfindən kodların yoxlanılması, müəllimlərin qəbul saatları. _Əgər onlardan
istifadə etsəniz_, bunlar inanılmaz dərəcədə dəyərlidir. Əks halda, onlar sadəcə
olaraq gözə görünməyən - sizinlə imtahan qiymətləriniz arasında duran bürokratik
əngəllərə çevrilir.

Üçüncüsü, **sahə mütəxəssislərinə çıxış**. Sizin professorlarınız, ən yaxşı
halda, onilliklərini öz sahələri barədə düşünməyə həsr etmiş və suallarınıza
birbaşa cavab verəcək insanlardır. Tələbələrin əksəriyyəti bu resursdan çox az
istifadə edir. Qəbul saatlarına həqiqi bir sualla getmək bütün təhsil prosesində
ən çox bəhrəsini görəcəyiniz fəaliyyətlərdən biridir[^Burada "3-cü məsələnin
üzərindən yenidən keçə bilərikmi?" kimi bir sualı nəzərdə tutmuram. Mənim
nəzərdə tutduğum, məsələn, budur: "[[Alqoritm]]i başa düşürəm, amma
'[[acgöz seçim]]' xassəsinin burada niyə keçərli olduğunu anlamıram - isbatın
məntiqini mənə izah edə bilərsinizmi?"].

Dördüncüsü, **öz başınıza heç vaxt seçməyəcəyiniz alt sahələrlə tanışlıq**.
Təkbaşına qalsanız, böyük ehtimalla [[formal dillər]] və ya
[[hesablanma nəzəriyyəsi]]ni öyrənməzdiniz. Lakin bu fənlər, problemlərə yanaşma
tərzinizi elə formalaşdırır ki, bunu yalnız həmin fənləri keçdikdən sonra anlaya
bilərsiniz.

Beşincisi, **yoldaşlar**. Dərs oxuma qrupları, gecə yarılarına qədər davam edən
xəta axtarışları, dadsız qəhvə arxasında dizayn qərarları ilə bağlı mübahisələr.
Öyrənmənin sosial tərəfi fövqəladə dərəcədə güclüdür və təkbaşına öyrənən biri
üçün bunu təkrarlamaq, demək olar ki, mümkünsüzdür.

Və altıncısı, **həyatınızda dərindən öyrənməyin əsas vəzifəniz olduğu bir
dövr**. Bir çox insan üçün bu, həyatlarında əldə edəcəkləri yeganə belə dövrdür.
Məhz bunlara görə universitet təhsilini ciddiyə almağa dəyər.

### Universitetin zəmanət vermədiyi gözləntilər

Universitet sizə nəyisə öyrənəcəyinizə dair zəmanət vermir. Dörd ili yuxulu
halda keçirə, əzbərçilik və strateji köçürmələrlə imtahanlardan keçə və demək
olar ki, heç nə öyrənmədən məzun ola bilərsiniz. Bu daim baş verir və hər iki
halda diplom eyni görünür.

Universitet işə hazır olacağınıza da zəmanət vermir. O, mövcud sənaye trendləri
ilə mükəmməl uyğunlaşan bir tədris proqramına da zəmanət vermir (irəlidə
görəcəyik ki, əslində, bu normaldır). Və diplomun özü yalnız onu sübut edir ki,
siz qəbul olunmusunuz və universitetdən qovulmamısınız. Əslində, nə öyrəndiyiniz
isə sizinlə öz vicdanınız, iradəniz və əzminiz arasında qalan bir məsələdir.

### Diplom tələsi

Bir çox təhsil mədəniyyətlərində - istər Azərbaycanda, istər daha geniş
postsovet məkanında, istərsə də səmimi desək, dünyanın böyük bir hissəsində -
sadəcə diplom almaq üçün çox böyük bir təzyiq var və bu yolda nə öyrəndiyinizə
nisbətən daha az mədəni əhəmiyyət verilir. Köçürmək geniş yayılıb. Anlamaqdan
çox əzbərləmək mükafatlandırılır. Hakim olan mentalitet "təki imtahandan keçim"
düşüncəsidir.

Bu, tələbələrin tənbəl olmasından irəli gəlmir. Bu, təşviq sistemlərinin çox
vaxt bilikdən çox, kağız parçasını mükafatlandırması ilə bağlıdır. Ailəniz,
yoldaşlarınız və əmək bazarınız diploma sadəcə bir finiş xətti kimi yanaşdıqda,
sırf öyrənməyin özünə əhəmiyyət vermək üçün insandan həqiqi bir iradə tələb
olunur.

Bu yazı öyrənməyə dəyər verməyi müdafiə edən bir arqumentdir. Diplom isə sadəcə
formal bir əlavədir. Əgər hədəfinizi yalnız diplom almaq üzrə qursanız, onu
alacaqsınız, lakin sonrakı illərinizi, əslində, elə başlanğıcda öyrənməli
olduğunuz şeylərin yerini doldurmağa çalışaraq keçirə bilərsiniz. Və sonradan bu
boşluqları doldurmaq tələbəlik dövründə, yəni həyatınızın bütün strukturu sırf
öyrənmək üçün qurulduğu vaxtlarda bunu etməkdən daha çətin, daha tənha və daha
bahalı bir prosesdir.

## Universitetlər: Bəzilərini "daha yaxşı" edən nədir? Niyə əsas tədris proqramı hər yerdə, demək olar ki, eynidir?

Gəlin, gərəksiz yerə narahatlıq yaradan bir məsələ haqqında səmimi danışaq.
Hansı universitet daha yaxşı kompüter elmləri proqramına malikdir? Kompüter
elmləri tədris proqramları niyə bu qədər oxşardır?

Kompüter elmlərinin akademik bir sahə kimi üzərində ümumi razılığa gəlinmiş
təməl biliklər bazası var.
[ACM/IEEE tədris proqramı təlimatları](https://www.acm.org/education/curricula-recommendations)
mövcuddur və bütün dünyada əksər proqramlar istər açıq, istərsə də dolayısı
yolla onlara istinad edir. Əsaslar - [[məlumat strukturları]], [[alqoritmlər]],
[[əməliyyat sistemləri]], [[kompüter arxitekturası]], şəbəkələr,
[[məlumat bazaları]], [[hesablama nəzəriyyəsi]],
[[proqram təminatı mühəndisliyi]] - fizika və riyaziyyatın təməlləri qədər
sabitdir. Onlar onilliklərdir ki, çox dəyişməyiblər, çünki buna ehtiyac yoxdur.

Bu, vacib bir mənanı ifadə edir: Bakıdakı hər hansı bir universitetin tələbəsi
ilə MIT tələbəsi təməl səviyyədə tamamilə eyni materialla məşğul olur.
Dərsliklər çox vaxt hərfi mənada eynidir -
[CLRS](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/),
[Tanenbaum](https://www.pearson.com/en-us/subject-catalog/p/modern-operating-systems/P200000003295),
[Sipser](https://math.mit.edu/~sipser/book.html),
[Patterson & Hennessy](https://www.elsevier.com/books/computer-organization-and-design/patterson/978-0-12-820109-1).
Prosenin, [[B-ağacı]]nın və ya [[NP-tamlıq]]ının nə demək olduğu coğrafiyadan
asılı olaraq dəyişmir.

### Qabaqcıl universitetlərin əsl fərqi nədədir

Yalandan bərabərlikçi görünmək istəmirəm. Ortada real fərqlər var və bunun
əksini iddia etmək səhv olardı.

**Dərinlik və ciddiyyət.** Eyni mövzu çox fərqli formallıq və çətinlik
səviyyələrində tədris edilə bilər. Qabaqcıl bir proqramın məsələlər toplusu sizi
daha çox çətinliyə salacaq və sizdən daha yüksək riyazi yetkinlik tələb edəcək.

**Tədqiqat mühiti.** Aktiv tədqiqat laboratoriyalarına yaxınlıq, [[bakalavr]]
səviyyəsində elmi işlərlə məşğul olmaq imkanı, hələ cavabı tapılmamış problemlər
üzərində işləyən professorlar. Bunu kənarda yaratmaq həqiqətən çox çətindir.

**Əhatə dairəsi.** Yüksək motivasiyalı, bir-birini irəli çəkən istedadlı
tələbələrlə əhatə olunmaq. Mühitdəki ciddiyyət səviyyəsi əksər insanların
təsəvvür etdiyindən daha böyük əhəmiyyət daşıyır. Ətrafınızdakı hər kəs maraqlı
problemlər üzərində dayanmadan işləyəndə, sizin də standartlarınız avtomatik
olaraq yüksəlir.

**Seçmə fənlərin müxtəlifliyi.** Böyük bir kafedra kiçik bir kafedranın sadəcə
təklif edə bilməyəcəyi ixtisaslaşmış fənləri - [[paylanmış sistemlər]],
[[kriptoqrafiya]], [[kompilyatorlar]], [[proqramlaşdırma dilləri nəzəriyyəsi]],
[[robototexnika]] kimi fənləri tədris etmək imkanına malikdir.

**Tədrisin keyfiyyəti.** Bu, universitetin tədqiqat nüfuzundan asılı olmadan
dəyişir. Bəzi dünya şöhrətli tədqiqatçılar orta səviyyəli mühazirəçi ola bilər,
bəzi az tanınan professorlar isə qeyri-adi dərəcədə mükəmməl müəllimlərdir.

**Sənaye əlaqələri.** İşə qəbul kanalları, məzun şəbəkələri, şirkətlərlə
tərəfdaşlıqlar. Bir Stanford tələbəsinin üzünə açılan qapılardan keçmək üçün
digərləri daha çox əziyyət çəkməlidir. Bu reallıqdır və xüsusilə də ilk işi
taparkən çox böyük əhəmiyyət kəsb edir.

### Bunların praktik mənası nədir

Əgər o qədər də tanınmayan bir universitetdəsinizsə, təməl biliklər sizin üçün
tamamilə əlçatandır. Aradakı fərq materialın özünün olub-olmamasında deyil;
tədrisin ciddiliyində, dərinliyində, əhatə dairəsində və yaradılan
imkanlardadır.

Buradakı ən vacib dəyişən sizsiniz. Öz üzərində işləyən,
[MIT OpenCourseWare](https://ocw.mit.edu/) kimi resurslardan faydalanan,
dərslikləri dərindən oxuyan və layihələr quran hər hansı bir universitet
tələbəsi, top-10 siyahısındakı bir proqramda vaxtını boş keçirən tələbədən daha
güclü bir anlayışa sahib olacaq. Bu, sadəcə quru motivasiya sözləri deyil - bu,
biliyin necə işlədiyinə dair struktur faktıdır. Material, onu kimin oxuduğuna
əhəmiyyət vermir.

Unutmayaq ki, internet də kompüter elmləri təhsili üçün böyük bir
bərabərləşdirici rolunu oynadı. Qabaqcıl universitetlərin demək olar ki, bütün
əsas kursları onlayn və pulsuz şəkildə əlçatandır. Universitetlər arasındakı
bilik fərqi inanılmaz dərəcədə daralıb. Lakin motivasiya fərqi hələ də qalır.

"Mənim universitetim prestijli deyil" fikrini özünüzə bəhanə etməyin. Və "mənim
universitetim prestijlidir" fikrini isə qarant kimi görməyin.

## Bir kompüter elmləri məzunu nələri bilməlidir: Bütöv mənzərə

Məsələnin ürəyi elə budur. Konkret olaraq, kompüter elmləri təhsili sizə nələr
qazandırmalıdır?

### Bir bənzətmə

Avtomobil mühəndisliyi üzrə ixtisaslaşan maşınqayırma məzunlarını düşünün.
Onlardan avtomobilin necə işlədiyini anlaması (mühərrik termodinamikası, ötürücü
mexanika, materialşünaslıq, maye dinamikası, elektrik sistemləri, təhlükəsizlik
mühəndisliyi və s.) gözlənilir. Onlar bəlkə ilk iş günündə 2024-cü il model
Toyota-nın sürətlər qutusunu sıfırdan söküb-yığa bilməzlər, lakin bunu sürətlə
öyrənmək üçün lazımi düşüncə modelinə sahibdirlər. Onlar bir problemə baxıb
hansı alt sistemin nasaz ola biləcəyini məntiqlə təxmin edə bilərlər.

Bir kompüter elmləri məzunu da kompüter haqqında eyni cür anlayışa sahib
olmalıdır. [[Tranzistor]]lardan və [[məntiq qapıları]]ndan tutmuş arxitektura,
əməliyyat sistemləri, şəbəkələr, [[kompilyator]]lar və tətbiqlərə qədər -
maşının əslində nə etdiyini ən azından kobud şəkildə izləyə bilməlisiniz.
İşəgötürəninizin spesifik [[kod bazası]]nı əzbər bilməyəcəksiniz, lakin orada öz
istiqamətinizi asanlıqla tapa bilməlisiniz. Sistemə baxıb onun davranışını
məntiqi olaraq anlaya bilməlisiniz.

Mühərrikin necə işlədiyini anlamayan bir avtomobil mühəndisi necə böyük bir
riskdirsə, brauzerə bir URL daxil etdiyiniz zaman nə baş verdiyini heç bir
səviyyədə izah edə bilməyən kompüter elmləri məzununun da gələcəkdə ona baha
başa gələcək çox böyük bir boşluğu var.

Həmçinin diqqət yetirin ki, avtomobil mühəndisi təhlükəsizliyi - əzilmə
zonalarını, hava yastıqlarının açılmasını, əyləc nasazlıqlarını yaxşı anlayır.
Kompüter elmlərində də təhlükəsizlik buna bənzəyir: o, prosesin ən sonuna yamaq
kimi bərkidilmiş ayrıca bir sistem deyil, əksinə, hər bir təbəqəyə dərindən
nüfuz etmiş bir məsələdir.

### Bir ssenari: güc düyməsinə basırsınız

Mövzuları mücərrəd şəkildə sadalamaqdansa, gəlin sistemin hər bir qatına toxunan
konkret bir ssenari üzərindən keçək. Hər addımdan sonra, orada iştirak edən
kompüter elmləri biliklərini qeyd edəcəyəm. Bu, təhsilin sizə qazandırmalı
olduğu məhz həmin düşüncə modelidir.

---

> _Noutbukunuzun güc düyməsinə basırsınız._

Elektrik siqnalı işə düşür. Cihazın [[mikroproqram təminatı]] - sizin
[UEFI](https://en.wikipedia.org/wiki/UEFI) və ya köhnə BIOS-unuz - işə düşür,
güc testini həyata keçirir, aparat təminatını siyahıya alır. [[Yükləyici]] işə
düşür ([GRUB](https://www.gnu.org/software/grub/), Windows Boot Manager), diskdə
[[nüvə]]ni tapır və onu yaddaşa yükləyir.

**Nələri bilməlisiniz:** Kompüter arxitekturası. Aparat və [[proqram təminatı]]
interfeysi. Mikroproqram təminatının nə olduğu və niyə mövcud olduğu. Yüklənmə
təhlükəsizliyi -
[Secure Boot](https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/oem-secure-boot)
belə bir sual verir: bu ən imtiyazlı anda işləyən kodun etibarlı olduğunu kim
təsdiqləyir? Təhlükəsizlik elə cihazı yandırdığınız andan başlayır.

---

> _[[Əməliyyat sistemi]]nin giriş ekranı görünür._

Nüvə yaddaşın idarə edilməsini başlatdı, [[virtual yaddaş]]ı qurdu,
[[planlaşdırıcı]]nı işə saldı, [[fayl sistemləri]]ni quraşdırdı,
[init/systemd](https://systemd.io/)-ni başlatdı. Giriş meneceri özü də bir
istifadəçi fəzası prosesidir, sizin kimliyinizi təsdiqləyir.

**Nələri bilməlisiniz:** Əməliyyat sistemləri - proseslərin idarə edilməsi,
yaddaşın idarə edilməsi, fayl sistemləri, planlaşdırma. Təhlükəsizlik: əməliyyat
sistemi şifrənizi necə yoxlayır?
[Keşləmə, duzlama](https://en.wikipedia.org/wiki/Cryptographic_hash_function),
etimadnamələrin saxlanması.

---

> _Şifrənizi yazırsınız. İş masası yüklənir. Tətbiqlər arxa planda işə düşür._

İş masası mühitiniz işə düşür, arxa plan xidmətləri aktivləşir, avtomatik
başlayan tətbiqlər yüklənir. Bunların hər biri əməliyyat sistemi tərəfindən
idarə olunan və özünün ünvan fəzası olan ayrı-ayrı proseslərdir.

**Nələri bilməlisiniz:** Proseslər və axınlar.
[Proseslərarası əlaqə](https://en.wikipedia.org/wiki/Inter-process_communication).
Resursların bölüşdürülməsi, [[paralelizm]], icazələr. Niyə bir istifadəçinin
prosesi digər istifadəçinin yaddaşını oxuya bilmir? Bu heç də təsadüf deyil, bu,
əməliyyat sisteminin təmin etdiyi [[izolyasiya]]dır.

---

> _Brauzerə klikləyirsiniz. O açılır._

Əməliyyat sistemi brauzerin icra edilə bilən faylını yükləyir,
[[dinamik kitabxana]]ları tapır, yaddaş ayırır və icraya başlayır. Brauzer
özlüyündə olduqca mürəkkəb bir sistemdir: render mühərriki, JavaScript
mühərriki, şəbəkə steki,
[sandbox proses arxitekturası](https://chromium.googlesource.com/chromium/src/+/main/docs/design/sandbox.md).

**Nələri bilməlisiniz:** Kompilyatorlar və [[əlaqələndirmə]]: [[mənbə kodu]]
necə bu icra edilə bilən fayla çevrildi? Yaddaşın idarə edilməsi. Tətbiq
arxitekturası. [[sandbox]]: brauzer tabları izolyasiya edir ki, zərərli bir
veb-sayt sizin bank sessiyanızı oxuya bilməsin.

---

> _Ünvan sətrinə `kodlar.az` yazırsınız. Səhifə bir saniyədən az müddətdə
> yüklənir._

Hər biri kompüter elmlərinin fərqli əsaslarına söykənən bir sistemlər kaskadı
işə düşür.

**[[DNS]] həlli.** Brauzer öz keşini, sonra əməliyyat sisteminin keşini
yoxlayır, daha sonra DNS həlledicisinə sorğu göndərir. Bu həlledici kök ad
serverlərindən tutmuş [[TLD]] serverlərinə, oradan da səlahiyyətli ad
serverlərinə qədər gedib çıxa bilər. Geriyə bir IP ünvanı qayıdır. Siz bu
prosesi,
[keşləmə iyerarxiyalarını](https://www.cloudflare.com/learning/dns/what-is-dns/)
və təhlükəsizlik təsirlərini anlamalısınız:
[DNS saxtalaşdırması](https://en.wikipedia.org/wiki/DNS_spoofing) realdır.
[DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions)-in
mövcud olmasının ciddi bir səbəbi var.

**[[TCP]] bağlantısı və [[TLS]] əl sıxışması.** Bir
[TCP bağlantısı](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)
açılır - SYN, SYN-ACK, [[ACK]]. Daha sonra
[TLS əl sıxışması](https://en.wikipedia.org/wiki/Transport_Layer_Security#TLS_handshake)
şifrələməni razılaşdırır: sertifikatlar yoxlanılır, açarlar mübadilə edilir.
Brauzerinizdəki "qıfıl işarəsi" məhz buradandır. Siz bunun əslində nə demək
olduğunu və nə demək olmadığını[^TLS sizin serverlə əlaqənizin şifrələndiyinə və
serverin həmin domen üçün etibarlı sertifikata malik olduğuna zəmanət verir.
Lakin o, serverin etibarlı olduğuna, veb-saytın fırıldaqçı olmadığına və ya
məlumatlarınızın ünvana çatdıqdan sonra təhlükəsiz olacağına zəmanət _vermir_.
Bir fişinq saytı tamamilə etibarlı bir TLS sertifikatına sahib ola bilər.]
bilməlisiniz.

**[[HTTP]] sorğusu və cavabı.** Brauzer HTTP GET sorğusu göndərir. Server bunu
emal edir, bəlkə bir tətbiq serverinə müraciət edir, məlumat bazasını sorğulayır
və bir cavab toplayır. Geri HTML, CSS, JavaScript və şəkillər qayıdır. Siz
[HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)-ni protokol
səviyyəsində - başlıqlar, metodlar, status kodları olaraq anlamalısınız.
[[Server tərəfi]]ndə isə: o, sizin məlumatınızı necə əldə edir?
[SQL sorğuları](https://en.wikipedia.org/wiki/SQL),
[indeksləmə](https://en.wikipedia.org/wiki/Database_index), sorğunun
optimallaşdırılması. Və ən əsası, server daxil edilən bütün məlumatlara
potensial təhlükə kimi yanaşmalıdır -
[SQL inyeksiyası](https://owasp.org/www-community/attacks/SQL_Injection),
[XSS](https://owasp.org/www-community/attacks/xss/),
[CSRF](https://owasp.org/www-community/attacks/csrf), sadəcə, nəzəri problemlər
deyil.

**[[Renderinq]].** Brauzer HTML-i təhlil edərək
[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)-a,
CSS-i isə [[CSSOM]]-a çevirir, onları birləşdirərək [[render ağacı]] yaradır,
düzülüşü hesablayır, pikselləri rəngləyir, layları birləşdirir. JavaScript icra
olunur -
[JIT kompilyasiya edilmiş](https://en.wikipedia.org/wiki/Just-in-time_compilation)
şəkildə - və DOM-u dəyişdirərək yenidən renderləməyə səbəb ola bilər. Təhlil
mərhələsində [[formal qrammatika]]lardan istifadə olunur, yəni o sizin
"yararsız" hesab etdiyiniz hesablama nəzəriyyəsi dərsinizdəki nəzəriyyənin
eynisindən. DOM bir ağacdır. Düzülüş bir alqoritmdir. Bunların hamısı kompüter
elmləridir.

---

> _Səhifə interaktivdir. Bir düyməyə klikləyirsiniz, məlumat görünür, səhifəni
> rəvan şəkildə sürüşdürürsünüz._

Hadisələrin idarə olunması, [[asinxron]] şəbəkə sorğuları, vəziyyətin idarə
olunması, keşləmə, [[tənbəl yüklənmə]]. Bu vaxt ərzində isə əməliyyat sistemi
bütün bunları planlaşdırır: yaddaşı idarə edir, giriş-çıxışı həll edir, onlarla
digər prosesi ayaqda tutur.

Hər bir təbəqə digərindən asılıdır. Yüklənmə prosesi aparat təminatını, proqram
təminatını, əməliyyat sistemini və təhlükəsizliyi əhatə edir. Bir veb-səhifənin
yüklənməsi isə şəbəkələri, məlumat bazalarını, kompilyatorları, məlumat
strukturlarını və təhlükəsizliyi özündə birləşdirir. Təməl səviyyədə "sadəcə,
[[frontend]]" və ya "sadəcə, [[backend]]" deyə bir şey yoxdur. Bunlar maşının
deyil, insanların yaratdığı təşkilati sərhədlərdir.

### Bu ssenari nələri aşkara çıxarır

Üç şey diqqəti cəlb edir.

**Hər şey bir-biri ilə əlaqəlidir.** Güc düyməsi ssenarisi aparat təminatı,
proqram təminatı, əməliyyat sistemləri, kompilyatorlar, şəbəkələr, məlumat
bazaları, təhlükəsizlik və tətbiq arxitekturasından keçir və bütün bunlar sadəcə
bir veb-səhifəni açmaq haqqında qısa bir hekayədir. Kompüter elmləri təhsili
sizi bütün bu zənciri ən azından işlək bir [[abstraksiya]] səviyyəsində
beyninizdə tutmağa hazırlayır.

**Təhlükəsizlik ayrıca bir mövzu deyil.** O hər bir addımda qarşımıza çıxdı:
yüklənmənin yoxlanılması, şifrələrin keşlənməsi, yaddaşın izolyasiyası,
proseslərin qumqabına salınması, DNS bütövlüyü, TLS şifrələməsi, daxil edilən
məlumatların yoxlanılması, girişə nəzarət. "Təhlükəsizliyin" sadəcə ayrıca bir
seçmə fənn olduğunu düşünən kompüter elmləri məzunu ən təməl şeylərdən birini
qaçırıb. Təhlükəsizlik hər bir sistemin ayrılmaz xüsusiyyətidir.

**Düşüncə modeli budur.** Söhbət hər detalı əzbərdən sadalamaqdan getmir, zatən
bunu heç kim edə bilməz, söhbət bu prosesi izləyə bilməkdən, hər addımda
təqribən nələrin baş verdiyini anlamaqdan və bir şey xarab olduqda hansı
təbəqəni araşdırmalı olduğunuzu bilməkdən gedir.

### [[Dunning-Kruger]] xəbərdarlığı

Kompüter elmləri elə bir sahədir ki, burada səthi tanışlıq güclü, lakin tamamilə
saxta bir özgüvən yaradır. Bir şəbəkə dərsi alıb "şəbəkələri bildiyinizi"
düşünürsünüz. Əlli dənə [[LeetCode]] məsələsi həll edib "alqoritmləri
bildiyinizi" düşünürsünüz. Sadə bir [[CRUD]] tətbiqi yığıb "proqram təminatı
mühəndisliyini bildiyinizi" düşünürsünüz.

Yuxarıdakı ssenari bir növ təvazökarlıq məşqidir. Onu vicdanla bir daha nəzərdən
keçirin. Neçə addımı əslində izah edə bilərsiniz? Mən "DNS-i eşitmişəm" deməyi
nəzərdə tutmuram, yəni o həll prosesini, keşləmə təbəqələrini, təhlükəsizlik
məsələlərini və işlər tərs gedəndə nələrin xarab olduğunu dəqiq izah etməyi
deyirəm. "TCP-nin nə olduğunu bilirəm" yox, üçlü əl sıxışmasını,
[[sıxlıq nəzarəti]]ni və bunun tətbiqin davranışı üçün niyə önəmli olduğunu izah
etməyi nəzərdə tuturam.

Dunning-Kruger sindromunun dərmanı spesifiklikdir. Kimsə sizə dəqiq bir sual
verənə qədər, dumanlı bir anlayış insana həqiqi bilik kimi gəlir. Bu, irəlidə
qayıdacağımız bir prinsiplə birbaşa bağlıdır: dəqiq təriflərin əhəmiyyəti.

Bütün bunların məqsədi özünüzü pis hiss etməyiniz deyil. Məqsəd, "anlamaq"
sözünün mənasını yenidən kalibrləməkdir. Xəritə böyükdür. Bu isə həvəsdən düşmək
üçün səbəb deyil, əksinə, çox həyəcanvericidir. Onu kəşf etmək üçün bütöv bir
karyeranız var.

### T-şəkilli gözlənti

Bəs realistik olan nədir? Bunu bir T hərfi kimi düşünün.

**Üfüqi xətt** yuxarıdakı bütün təbəqələri əhatə edən geniş bir anlayışdır.
Burada ustalıq lazım deyil, sadəcə, işlək bir düşüncə modeli lazımdır. Kimsə
"[[keş uyğunluğu]]" və ya "[[kontekst dəyişməsi]]", yaxud da "sertifikatların
bərkidilməsi" deyəndə, onların nədən danışdığını və bunun sistemin harasına aid
olduğunu ən azından kobud şəkildə təsəvvür edə bilməlisiniz.

**Şaquli xətt** isə seçmə fənlər, layihələr və ya şəxsi maraq vasitəsilə inkişaf
etdirilən bir və ya iki sahədə daha dərin bilikdir. Bəlkə də
[[sistem proqramlaşdırması]]na dərindən daxil olmusunuz. Bəlkə də
proqramlaşdırma dillərinə və ya kriptoqrafiyaya vurulmusunuz. O dərinlik həqiqi
ekspertizanın inkişaf etməyə başladığı yerdir.

Heç kim dörd il ərzində bütün bunlarda ustalaşa bilməz. Əsas məqsəd, qalan hər
şeyi sürətlə öyrənə biləcəyiniz qədər güclü bir təməl qurmaqdır.

### Nələr açıq şəkildə gözlənilmir

Gəlin sizi bəzi əbəs narahatlıqlardan xilas edim.

Bir kompüter elmləri məzunundan hər hansı bir spesifik proqramlaşdırma dilində,
[[freymvork]]da və ya alətdə ustalaşması gözlənilmir.

Məzun olduğunuz gün sizdən istehsalat səviyyəsində mühəndislik bacarıqları
gözlənilmir - onlar iş təcrübəsi ilə yaranır.

Sizdən dərin ixtisaslaşma gözlənilmir - magistratura/doktorantura və real
karyera məhz bunun üçündür.

Və sizdən hər şeyi bilməyiniz də gözlənilmir. Bu sahə bir insanın təkbaşına
mənimsəyəcəyindən çox böyükdür. Məqsəd ensiklopediya yox, sağlam bir təməl
qurmaqdır.

## Kompüter elmlərini necə yaxşı öyrənməli

İndi isə keçək məsələnin praktik tərəfinə. Hazırda təhsil alırsınız və ya almağa
hazırlaşırsınız. Bəs bunu layiqincə necə etməli?

### Qızıl qayda: tərifləri bilin

Sizə hər yerdə keçərli olan bir ssenari danışmaq istəyirəm.

Bir tələbə çoxluqlar nəzəriyyəsinə aid bir məsələdə çətinlik çəkir. O, sadə
[[kardinallıq]] suallarını, tutaq ki, "{1, 2, 3} çoxluğunda neçə element var?"
məsələsini həll edə bilir, lakin bir az çətinlərdə ilişib qalır. Ondan
"Kardinallığın dəqiq tərifi nədir?" deyə soruşuram. Cavab verə bilmir. Ağlında
dumanlı bir təsəvvür var: "Yəni, çoxluğun ölçüsü kimi bir şeydir". Lakin bu
formal tərif deyil[^Qeyri-rəsmi dildə, çoxluğun kardinallığı ondakı elementlərin
sayıdır. Daha dəqiq desək, iki çoxluğun kardinallığı yalnız və yalnız onların
arasında [[biyeksiya]] mövcud olduqda eynidir. Bu tərif təbii olaraq sonsuz
çoxluqlara da şamil edilir və məhz bu nöqtədə o, güclü və qeyri-trivial bir
xarakter alır.]. Və bu yoxluq onun məhz niyə ilişib qaldığının əsas səbəbidir.
Çətin məsələlər tərifə əsaslanaraq mühakimə yürütməyi tələb edir, sahib
olmadığınız bir şeyə əsaslanaraq isə mühakimə yürüdə bilməzsiniz.

Bu tendensiya kompüter elmlərinin bütün mövzularında təkrarlanır. Tələbələr
prosedurların nədən ibarət olduğunu anlamadan, onları icra etməyi öyrənirlər.
Onlar kiçik bir [[qraf]] üzərində addımları izləyərək [[Deykstra alqoritmi]]ni
icra edə bilərlər, lakin alqoritmin nəyə zəmanət verdiyini, ilkin şərtlərinin
nələr olduğunu və ya onun niyə işlədiyini izah edə bilməzlər. Onlar [[SQL JOIN]]
yaza bilərlər, ancaq relyasiyalı birləşmənin riyazi olaraq əslində nə demək
olduğunu tərif edə bilməzlər. [[Muteks]]dən istifadə edə bilər, amma
[[yarış vəziyyəti]]nə dəqiq bir tərif verə bilməzlər.

Bunun fəlsəfəsi budur: **əgər hər hansı bir mövzudakı əsas anlayışın dəqiq
tərifini verə bilmirsinizsə, deməli, siz o mövzunu anlamamısınız.** Şablonları
uyğunlaşdıraraq bəsit məsələləri həll edə bilərsiniz, lakin həqiqi məntiqi
mühakimə tələb edən hər hansı bir şeydə uğursuz olacaqsınız.

Bu xırdalıq və ya vasvasılıq deyil. Dəqiq təriflər dəqiq düşüncənin təməlidir.
Bir anlayış beyninizdə dumanlıdırsa, onunla bağlı yürütdüyünüz mühakimələr də
dumanlı olacaq. Və bu "dumanlılıq" işlər tərs gedənə qədər, adətən də ən vacib
məqamda hər şey alt-üst olana kimi işə yarayır.

Özünüzü sınayın: öyrəndiyiniz hər bir əsas anlayışı harasa baxmadan tərif edə
bilərsinizmi? Ümumi sözlərlə deyil, əsl tərifini deyə bilərsinizmi? Riyazi
mənada funksiya nədir? [[Ekvivalentlik münasibəti]] nədir?
[[Kontekstdən asılı olmayan qrammatika]] nədir? [[Kilidlənmə]] nədir? Keş
uyğunluğu nədir? [[Tranzaksiyanın izolyasiya səviyyəsi]] nədir?

**Bu vərdişi necə yaratmalı.** Yeni bir anlayışla qarşılaşdıqda, onun tərifini
yazın: əvvəlcə öz sözlərinizlə, sonra isə formal versiya ilə tutuşdurun.
Fərqləri aradan qaldırın. Hər fənn üçün özünüzün şəxsi lüğətinizi tərtib edin:
təriflər, əsas teoremlər, vacib [[invariant]]lar. Bir məsələdə ilişib qaldıqda,
təriflərə geri dönün. Anlayışı dəqiq dərk etdikdən sonra həllin elə tərifin
özündə gizləndiyini təxmin etdiyinizdən də tez-tez görəcəksiniz.

### Çətin fənlərə ciddi yanaşın

Əməliyyat sistemləri. Kompilyatorlar. Kompüter arxitekturası. Hesablama
nəzəriyyəsi. Bunlar tələbələrin əksər hallarda birtəhər yola verib keçməyə
çalışdıqları fənlərdir. Lakin ən dərin anlayışı formalaşdıranlar da elə
bunlardır.

"Yararsız" və ya "həddindən artıq nəzəri" görünən fənlər adətən ən uzunömürlü
olanlardır. [[React]] dəyişəcək, lakin [[virtual yaddaş]] konsepsiyası
dəyişməyəcək. Hər hansı bir veb freymvorku üç il sonra başqası ilə əvəz
olunacaq, ancaq [[təhlil nəzəriyyəsi]] otuz il sonra belə yenə eyni nəzəriyyə
olaraq qalacaq.

Əgər bir fənn sizə çətin və mənasız gəlirsə, bu çox vaxt bilik sərhədinizin
sonuna çatdığınıza işarədir. Öyrənmə prosesi də məhz elə o sərhəddə baş verir.

### Tapşırıqları özünüz həll edin

Öyrənmək əziyyətdə gizlənir. Həlləri köçürmək və ya onları
[[böyük dil modelləri]]nə yazdırtmaq biliyin beyninizdə formalaşdığı o vacib
mərhələni ötürüb keçməkdir.

Saatlarla bir yerdə ilişib qalmaq və nəhayət həlli tapmaq boşa getmiş vaxt
deyil. Bu, dərin bir anlayışın inşa edildiyi bir prosesdir. O çarəsizlik
anlarında beyninizdə elə neyron bağlantıları yaranır ki, onlar sadəcə hazır
həlli oxuyub başınızı yırğalamaqla heç vaxt yaranmazdı.

Bunun mənası səssizcə əzab çəkmək deyil. Müəllimlərin qəbul saatlarından
istifadə edin. Dərs oxuma qrupları yaradın. Dərsliyi oxuyun. Lakin yekun sintez
sizin öz beyninizdə baş tutmalıdır. Hazır həlli kənara qoyub, məntiqi
ardıcıllığı sıfırdan bərpa etməyi bacarmalısınız.

Süni intellektin generasiya etdiyi ev tapşırıqları ilə bağlı xüsusi bir
xəbərdarlıq: hazır və doğru həlləri oxuyub başınızı yırğaladığınız üçün sizə elə
gəlir ki, öyrənirsiniz. Bu, öyrənmək deyil. Bu, başqasının idman etməsini
izləyib niyə güclənmədiyinizə təəccüblənməyin akademik versiyasıdır.

### Dərsdənkənar nələrsə yaradın

Dərs layihələri məhduddur, onların əhatə dairəsi, tələbləri və addımları
əvvəlcədən müəyyənləşdirilir. Şəxsi layihələr isə sizi öz dizayn qərarlarınızı
verməyə, qeyri-müəyyənliklərlə başa çıxmağa və kurs tapşırıqlarının sizi
diqqətlə qoruduğu problemlərlə üzləşməyə məcbur edir.

Bunun üçün böyük bir startap və ya [[açıq mənbəli]] layihə yaratmağa ehtiyac
yoxdur.
[Sadə bir əmrlər sətri](https://brennan.io/2015/01/16/write-a-shell-in-c/),
kiçik bir kompilyator, sadə bir oyun,
[şəbəkə çat serveri](https://beej.us/guide/bgnet/) və ya
[bəsit bir açar-dəyər deposu](https://github.com/codecrafters-io/build-your-own-x)
və ya sıfırdan başlayıb işlək bir sistemə çevirəcəyiniz hər hansı bir şey ola
bilər. Buradakı məqsəd CV-nizə bir sətir əlavə etmək deyil. Məqsəd real
problemlərlə qarşılaşmaqdır: "Ümumiyyətlə bunun strukturunu necə qurmalıyam?"
"Daxil edilən məlumat yanlış formatda olanda nə baş verməlidir?" "Bu niyə belə
yavaş işləyir?"

### Mühazirə slaydları ilə kifayətlənməyin

Dərsliklərin mövcud olmasının bir səbəbi var. Mühazirə slaydları xülasələrdir -
xülasələrin də xülasəsidir. Mövzunun dərinliyi, incəlikləri, diqqətlə işlənmiş
izahları və həll edilmiş nümunələri isə kitablardadır.

Bir çox tələbə dərslikləri açıb vərəqləmir də. Bu, kulinariya kursuna gedib
yalnız yeməklərin adını oxumağa bənzəyir.

[MIT OCW](https://ocw.mit.edu/), Stanford universitetinin onlayn dərsləri və ya
seçilmiş YouTube kanalları kimi digər resurslarla biliklərinizi zənginləşdirin,
ancaq seçici olun. Keyfiyyət fərqi həddindən artıq böyük ola bilər. Yaxşı
yazılmış bir dərslik fəsli, demək olar ki, hər zaman təsadüfi bir video
izahından daha dəyərlidir.

İmkanınız daxilində ilkin mənbələri oxuyun. Klassik elmi məqalələr adətən
təəccübləndirəcək dərəcədə anlaşıqlı olur və hər hansı bir texnologiyanın sadəcə
nə olduğunu deyil, onun niyə məhz o cür dizayn edildiyini anlamağa kömək edir.
Başlamaq üçün qısa bir mütaliə siyahısı:

- Batler Lampson,
  [_Kompüter sistemlərinin dizaynı üçün ipucular_](https://www.microsoft.com/en-us/research/publication/hints-for-computer-system-design/)
  - onilliklər sonra belə aktuallığını qoruyan, real sistemlərin qurulmasına
    dair müdriklik aşılayan bir məqalə.
- Ken Tompson,
  [_Etibara güvənmək üzərində düşüncələr_](https://www.cs.cmu.edu/~rdriley/487/papers/Thompson_1984_ReflectionsonTrustingTrust.pdf)
  - proqram təminatında etibarın əslində nəyə əsaslandığını göstərən qısa və
    sarsıdıcı bir məqalə.
- Edsqer Deykstra,
  [_Go To ifadəsinin zərərli hesab edilməsi_](https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf)
  - proqramlaşdırma üslubu haqqında minlərlə mübahisəyə səbəb olmuş və
    [[idarəetmə axını]] barədə düşüncələrimiz üçün hələ də aktual olan bir yazı.
- [Orijinal TCP spesifikasiyası (RFC 793)](https://www.rfc-editor.org/rfc/rfc793)
  - hər gün istifadə etdiyiniz bu protokolun arxasındakı dizayn qərarlarına işıq
    tutan və asan oxunan bir sənəd.
- Edqar Kodd,
  [_Böyük paylaşılan məlumat bankları üçün relyasiyalı məlumat modeli_](https://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf)
  - [[relyasiyalı məlumat bazası]]larının əsasını qoyan və texniki yazının
    aydınlıq standartını müəyyən edən bir məqalə.

### Riyaziyyatla məşğul olun

Bir çox kompüter elmləri tələbəsi riyaziyyatdan qaçmağa və ya ona sadəcə
"rəqəmləri düstura qoy, cavabı tap" kimi yanaşmağa çalışır. Bu isə məsələnin əsl
mahiyyətini tamamilə qaçırmaq deməkdir.

[[Diskret riyaziyyat]], [[ehtimal nəzəriyyəsi]] və [[xətti cəbr]] köməkçi
mövzular deyil - onlar kompüter elmləri ideyalarının ifadə olunduğu dildir.
Alqoritmlər riyaziyyatla təhlil edilir. Kriptoqrafiya riyaziyyatın üzərində
qurulur. [[Maşın öyrənməsi]] elə riyaziyyatın özüdür. Məlumat bazaları
nəzəriyyəsi də riyaziyyatdır.

Daha da vacibi, riyazi düşüncə sizə "tərifi ver, tərifi tətbiq et, nəticə çıxar"
vərdişini aşılayır. Güclü kompüter elmləri tələbəsini zəiflərdən fərqləndirən
məhz elə bu vərdişdir. Bu da yuxarıda qeyd etdiyimiz təriflər prinsipi ilə
birbaşa əlaqəlidir.

Sizin riyaziyyatçı olmağınıza ehtiyac yoxdur. Sadəcə riyazi məntiqlə işləməyə
alışmalısınız. Hər hansı bir isbat və ya formal ifadə ilə qarşılaşarkən donub
qalmamaq üçün kifayət qədər, yəni arqumenti izləyib onun məntiqi cəhətdən
ağlabatan olub-olmadığını yoxlaya biləcək qədər öyrəşməlisiniz.

### Çox erkən ixtisaslaşmağa çalışmayın

[[Veb proqramlaşdırma]]ya və ya maşın öyrənməsinə dərindən baş vurmaq
cəlbedicidir, çünki bu sahələr populyardır və insana dərhal praktik fayda
verəcək kimi görünür. Ən azından başlanğıcda bu həvəsin qarşısını alın. Əvvəlcə
geniş tədris proqramını qavrayın. İxtisaslaşma təbii olaraq özü gələcək.

Sizin 19 yaşınızdakı maraqlarınız 25 yaşınızdakı maraqlarınızdan çox fərqli ola
bilər. Geniş bir təməl qapıları həmişə açıq saxlayır. "Mən [[ML]] ilə məşğul
olacağam" deyə əməliyyat sistemlərini qulaqardına vuran bir tələbə, üç il sonra
ML sistemlərinin geniş miqyasda həqiqətən işləməsi üçün
[[yaddaş iyerarxiyası]]nı və paralelizmi anlamağın mütləq olduğunu kəşf edə
bilər.

### Öz əhatənizi tapın, ancaq təkbaşına işləməyi də öyrənin

Dərs oxuma qrupları, kompüter elmləri klubları, hakatonlar, [[açıq mənbə]]li
layihə icmaları öyrənmənin sosial bir proses olduğunu göstərir. Bir fincan qəhvə
arxasında sizə hansısa anlayışı izah edən bir şəxs, bunu bir mühazirənin heç
vaxt edə bilməyəcəyi qədər effektiv şəkildə öyrədə bilər.

Həmçinin, nələrisə başqalarına izah etmək mövcud olan ən güclü öyrənmə
üsullarından biridir. Əgər bir anlayışı aydın şəkildə izah edə bilmirsinizsə,
deməli, onu tam anlamamısınız. Öyrətmək insanı dəqiq olmağa məcbur edir.

Digər tərəfdən isə: saatlarla təkbaşına çətin bir məsələnin üzərində düşünməyi
də öyrənin. İlk başdan kimsədən kömək istəmədən xətaları özünüz tapmağa çalışın.
Başa düşmədiyiniz bir fəsli üç dəfə oxuyun. İstər komanda şəklində, istərsə də
təkbaşına işləmək ən vacib bacarıqlardır və bütöv bir karyeranız boyu sizi irəli
aparacaq şey məhz müstəqil öyrənmə qabiliyyətidir.

## "Universitetdə yaxşı oxumadım. Bəs indi nə edim?"

Əgər bu bölməni içinizdə bir sıxıntı hiss edərək oxuyursunuzsa, dərindən nəfəs
alın. Siz tək deyilsiniz və bu, həqiqətən də düzəldilə biləcək bir vəziyyətdir.

Hal-hazırda işləyən bir çox mühəndisin təməl biliklərində ciddi boşluqlar var.
Bu, inanılmaz dərəcədə yayılmış bir haldır, xüsusilə də təhsil mədəniyyətinin
anlamağı deyil, imtahandan keçməyi mükafatlandırdığı mühitlərdə. Sıradan bir
mühəndislə əla mühəndis arasındakı fərq, çox vaxt sadəcə onların geriyə dönüb bu
boşluqları doldurub-doldurmamalarında gizlənir.

### Boşluqlarınızı dürüstcə təyin edin

Buna qədər qeyd olunan "Güc düyməsinə basırsınız" ssenarisindən diaqnostika
aləti kimi istifadə edin. Hər bir addımı nəzərdən keçirin. Anlayışınız harada
dumanlanır? Hansı məqamlarda mövzunun üstündən səthi keçməyə çalışırsınız?

Boşluqları yoxlamaq üçün daha bir neçə spesifik sual:

- [[Keş cədvəli]]nin necə işlədiyini, toqquşmaların həlli strategiyalarını və bu
  seçimin niyə əhəmiyyətli olduğunu izah edə bilərsinizmi?
- `gcc main.c` yazıb, yaranan icra faylını işə salanadək keçən müddətdə nələrin
  baş verdiyini anlayırsınızmı?
- Yeni başlayan bir proqramçıya [[TCP]] və [[UDP]] arasındakı fərqi, o cümlədən
  hansını nə vaxt və niyə seçəcəyinizi izah edə bilərsinizmi?
- Kontekst dəyişməsinin nə olduğunu və niyə onun resurs tələb edən baha bir
  proses olduğunu bilirsinizmi?
- TLS əl sıxışması zamanı nələrin baş verdiyini izah edə bilərsinizmi?
- Əgər sizdən "kilidlənmə nədir?" deyə soruşsalar, mücərrəd bir cavab yox, məhz
  onun yaranması üçün zəruri olan dörd şərti özündə cəmləşdirən dəqiq tərifini
  verə bilərsinizmi?

Əgər bu suallar sizi narahat edirsə, deməli, başlamaq üçün doğru yer elə
onlardır. Əgər sizdə özgüvən yaradırsa, onları ucadan cavablandırmağa çalışın.
Ola bilsin ki, özgüvəninizin dəqiqliyinizi üstələdiyinin fərqinə varasınız.
Özgüvənlə dəqiqlik arasındakı o boşluq məhz Dunning-Kruger sindromunun yuva
saldığı yerdir.

### Resurslar - konkret olaq

Burada sahələr üzrə konkret tövsiyələr verilmişdir:

- **Sistemlər (haradan başlayacağınızı bilmirsinizsə, buradan başlayın).**
  Bryant və O'Hallaron tərəfindən yazılmış
  [_Kompüter Sistemləri: Proqramçının Baxış Bucağı_](https://csapp.cs.cmu.edu/)
  - qısaca [[CSAPP]] olaraq bilinir. Bu kitab boşluqları doldurmaq üçün mövcud
    olan bəlkə də ən dəyərli kompüter elmləri kitabıdır. CMU-nun
    [15-213 kursu](https://www.cs.cmu.edu/~213/) bu kitabın üzərində qurulub və
    mühazirələr internetdə əlçatandır.
- **Əməliyyat Sistemləri.** Arpaci-Dusseau tərəfindən yazılmış
  [_Əməliyyat Sistemləri: Üç Asan Parça_](https://pages.cs.wisc.edu/~remzi/OSTEP/)
  ([[OSTEP]]) - internetdə pulsuz tapmaq mümkündür və həqiqətən çox yaxşı
  yazılıb. Alternativ olaraq, Tanenbaumun _Modern Əməliyyat Sistemləri_ kitabını
  oxuya bilərsiniz.
- **Şəbəkələr.** Kurose və Ross, _Kompüter Şəbəkələri: Yuxarıdan aşağıya
  yanaşma_. Və ya Tanenbaumun _Kompüter Şəbəkələri_ kitabı.
- **Hesablama nəzəriyyəsi.** Sipser,
  [_Hesablama nəzəriyyəsinə giriş_](https://math.mit.edu/~sipser/book.html).
  Aydın, yaxşı strukturlaşdırılmış və bu qəliz mövzu üçün tapıla biləcək ən
  anlaşıqlı mənbə.
- **Alqoritmlər.** Hərtərəfli istinad üçün
  [CLRS](https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/).
  Daha anlaşıqlı və motivasiyaedici yanaşma üçün isə Kleinberg və Tardos.
- **Məlumat bazaları.** Silberschatz, Korth və Sudarshan tərəfindən yazılmış
  _Məlumat bazası sisteminin konsepsiyaları_.
- **Bütöv mənzərə.** [Nand2Tetris](https://www.nand2tetris.org/) olduqca
  mükəmməl bir öyrənmə təcrübəsidir. Siz məntiq qapılarından başlayaraq öz
  qurduğunuz aparat təminatı üzərində işləyən bir proqrama qədər bütöv bir
  kompüteri sıfırdan yığırsınız. Bu sizi hər hansı bir sahədə ekspert etməyəcək,
  lakin bütöv mənzərəni digər resursların verə bilməyəcəyi bir şəkildə
  anlamağınıza kömək edəcək.
- **Seçilmiş bələdçi.**
  [Özünə Kompüter Elmlərini öyrət](https://teachyourselfcs.com/) - hər mövzu
  üzrə spesifik kitab və kurs tövsiyələri verən, fərdi öyrənmə üçün mükəmməl bir
  yol xəritəsidir.
- **Onlayn kurslar.** [MIT OCW](https://ocw.mit.edu/) resurslarından 6.004
  (hesablama strukturları),
  [6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/)
  (alqoritmlər), [6.824](https://pdos.csail.mit.edu/6.824/) (paylanmış
  sistemlər) kursları. Eyni zamanda Stanford universitetinin də bir çox kompüter
  elmləri kursları onlayn olaraq mövcuddur.

### Yanaşma tərzi

Bütün ali təhsilinizi başdan-ayağa yenidən keçməyə çalışmayın. Ən böyük
boşluqlarınıza və hazırkı işinizə ən çox aidiyyatı olanlara əsaslanaraq
prioritetlərinizi müəyyən edin.

Təriflərdən başlayın - hər mövzuda əvvəlcə əsas anlayışların dəqiq təriflərini
öyrənməyə çalışın. Təməli bunun üzərində qurun.

Davamlılıq intensivliyi üstələyir. Altı ay ərzində hər gün bir saat oxumaq, sizi
həftəsonu qəhrəmancasına saatlarla dərs oxuyub, ardınca üç ay heç nə etməməkdən
daha irəliyə aparacaq.

Öyrəndiklərinizi tətbiq edin. Əməliyyat sistemləri konsepsiyaları haqqında
sadəcə oxumaqla kifayətlənməyin. Sadə bir [[yaddaş bölüşdürücüsü]] yazın.
Şəbəkələr haqqında sadəcə oxumayın. [[Xam soket]]lərdən istifadə edərək kiçik
bir HTTP serveri qurun. Məlumat bazaları barədə sadəcə oxumayın.
[B-ağacı](https://en.wikipedia.org/wiki/B-tree) tətbiq edin. Yaradaraq öyrənmək,
oxuyaraq öyrənməkdən keyfiyyətcə tamamilə fərqlidir.

Öyrəndiklərinizi işinizlə əlaqələndirin. Əgər backend sistemləri üzərində
işləyirsinizsə, bunu məlumat bazalarını və əməliyyat sistemlərini dərindən
öyrənmək üçün bir motivasiya kimi istifadə edin. Əgər frontend tərəfindəsinizsə,
brauzerləri, renderinq ardıcıllığını və şəbəkələri araşdırın. Gündəlik işiniz
sizə həm motivasiya, həm də öyrəndiklərinizi sınaqdan keçirmək üçün bir meydan
verir.

### Universitet dərəcəsi fərdi öyrənməyə qarşı

Diplom sizə bir struktur, etimad, son tarixlər və geridönüşlər verir. Fərdi
şəkildə öyrənmək isə çeviklik və diqqətin cəmlənməsini təmin edir. Əgər artıq bu
sənayedə işləyirsinizsə, yalnız bilik əldə etmək üçün yenidən universitetə
qayıtmağa adətən dəyməz, bunu özünüz də öyrənə bilərsiniz. Lakin xüsusi
vəziyyətlərdə karyera və ya etimad məsələləri üçün buna dəyə bilər: miqrasiya
tələbləri, dərəcəyə görə süzgəcdən keçirən xüsusi işəgötürənlər və ya karyeranı
tədqiqat sahəsinə yönləndirmək.

[[Magistr dərəcəsi]] kompüter elmlərini ciddi şəkildə öyrənmək üçün yaxşı bir
"ikinci şans" ola bilər, xüsusilə də güclü proqramı olan bir universitetdə. Əgər
bakalavr təcrübəniz zəif olubsa və indi belə bir imkanınız varsa, bu barədə
düşünməyə dəyər.

## [[Böyük dil modelləri]] dövründə kompüter elmlərinin əsasları niyə daha az yox, daha çox əhəmiyyət daşıyır

Ortada belə bir fikir dolaşır ki, guya süni intellekt kompüter elmləri üzrə
dərin biliklərin əhəmiyyətini azaldır. İddia olunur ki, sən sadəcə "[[prompt]]"
(düzgün göstəriş) yazmağı öyrən, qalanını maşın özü həll edəcək. Bu tamamilə
yanlış fikirdir və elə bir yanlışdır ki, zaman keçdikcə insanlara daha baha başa
gələcək.

### Alət və anlama fərqi

Böyük dil modelləri ([[LLM]]-lər) kod generasiya etmək üçün çox güclü
alətlərdir. Lakin onlar kodu anlamağı əvəz etmir. Əlinə avtomatik mismar
tapançası alan bir dülgər hələ də struktur mühəndisliyini anlamalıdır. Mismar
tapançası sadəcə onun işini sürətləndirir; biliyi isə lazımsız bir şeyə
çevirmir.

LLM-lərdən ən effektiv şəkildə istifadə edən şəxslər yaranan nəticəni
qiymətləndirməyi, xətalarını tapmağı və onu düzgün yönləndirməyi bacaranlardır.
Bunun üçün isə dərin bir anlayış tələb olunur. Əgər siz sahəyə bələd
deyilsinizsə, LLM sizin üçün elə bir kod generasiya edə bilər ki, onun
keyfiyyətini qiymətləndirə bilməzsiniz və qiymətləndirə bilmədiyiniz kodu
istifadəyə vermək zamanla yığılıb böyüyən xətaları, boşluqları və arxitektura
səhvlərini də özü ilə birlikdə gətirmək deməkdir.

### LLM-lərin struktur cəhətdən zəif olduğu tərəflər

Bu sətirlər yazılan ərəfədə LLM-lər real mühəndislikdə çox böyük əhəmiyyət
daşıyan bir neçə məsələdə hələ də zəif olaraq qalır (və çox güman ki, bu,
müvəqqəti deyil, struktur xarakterli bir problemdir):

**Sistem səviyyəsində düşünmə.** Komponentlərin böyük bir arxitekturada
bir-biriylə necə qarşılıqlı əlaqədə olması. Mürəkkəb sistemlərin gözlənilməz
davranışları. LLM-lər ayrı-ayrı funksiyaları çox yaxşı yaza bilirlər, lakin
sistemi bir yerdə tutan o bağlayıcı toxumanı qurmaqda çətinlik çəkirlər.

**Performans məntiqi.** Bu kod niyə yavaş işləyir? [[Yaddaş modeli]] əslində nə
edir? Bunun keşə necə bir təsiri olacaq? Bunlar maşını elə bir səviyyədə
anlamağı tələb edir ki, indiki modellər bunun öhdəsindən çox zəif gəlir.

**Yeni problemlərin hissələrə ayrılması.** Həqiqətən də yeni olan bir problemi
həll edilə bilən alt-problemlərə bölmək. LLM-lər [[təlim məlumatları]] əsasında
şablonları uyğunlaşdırmaqda mükəmməldirlər, lakin problem indiyədək gördükləri
heç nəyə bənzəmədikdə o qədər də etibarlı deyillər.

**Gözəçarpmaz xətaların aşkarlanması.** Testlərdən keçən, lakin real iş
mühitində yüksək yüklənmə, zərərli məlumat girişi və ya yarış vəziyyəti altında
çökən xətalar. Əgər siz paralelizm haqqında məntiqi mühakimə yürüdə
bilmirsinizsə, istər sizin, istərsə də modelin yazdığı paralellik xətalarını
tuta bilməyəcəksiniz.

**Təhlükəsizlik mühakiməsi.** Bir LLM işləyən, lakin [[inyeksiya]],
[[zamanlama hücumları]] və ya [[imtiyazların artırılması]]na qarşı həssas olan
bir kod yaza bilər. Əgər bunu qiymətləndirə bilmirsinizsə, deməli, bu boşluqları
böyük bir arxayınlıqla sistemə daxil edirsiniz. Arxayın şəkildə xəta etmək,
tərəddüdlə xəta etməkdən qat-qat pisdir, çünki bu zaman onları axtarmağa ehtiyac
belə duymayacaqsınız.

### Abstraksiya paradoksu

Hər yeni abstraksiya qatı onun altındakıların nə olduğunu anlamağı daha az yox,
daha çox vacib edir. İşlər qaydasında gedəndə abstraksiya gözə görünmür. Lakin
hər şey xarab olanda (həmişə ola bilir) problemi yalnız abstraksiyanın altındakı
təbəqələri anlayan şəxs tapıb həll edə bilər.

LLM-lər ən yeni abstraksiya təbəqəsidir. Onlar kod yazma prosesini
mücərrədləşdirir. Ancaq generasiya edilmiş kod işləməyəndə, səhv işləyəndə və ya
mürəkkəb bir sistemə inteqrasiya olunmalı olanda, maşını mütləq anlamalısınız.

Təriflər prinsipi burada da birbaşa keçərlidir: əgər LLM-dən etməsini
istədiyiniz şeyin dəqiq tərifini bilmirsinizsə, onun bunu düzgün edib-etmədiyini
də qiymətləndirə bilməzsiniz. Əgər "keş tətbiqi" istəyirsinizsə və
[[silinmə siyasəti]]lərini, [[uyğunluq modeli]]lərini və
[[etibarsızlaşdırma strategiyası]]larını anlamırsınızsa, onun yazdığı hər şeyi
qəbul edəcəksiniz və bunun sizin işinizə uyğun olub-olmadığını heç vaxt
bilməyəcəksiniz.

### Karyera dayanıqlılığı

Texnologiyalar gəlib gedir. Freymvorkların ömrü adətən üç-beş ildir. Kompüter
elmlərinin təməl biliklərinin ömrü isə onilliklərlə ölçülür. Süni intellekt
alətləri ilə çiyin-çiyinə irəliləyəcək mühəndislər isə əsas bacarığı indi bir
modelin daha sürətlə yaza bildiyi şablon kodları yazmaq olanlar yox, dərin
anlayışa sahib olan və süni intellektdən bir güc artırıcı kimi istifadə edənlər
olacaq.

Bu barədə təmkinli danışacağam: on il sonra mənzərənin necə olacağını heç kim
dəqiq bilmir. Arqumentim "süni intellektin əhəmiyyəti yoxdur" demək deyil.
Arqumentim odur ki, süni intellekt nəyə çevrilir-çevrilsin, buna qarşı ən yaxşı
sığorta maşının necə işlədiyini dərindən anlamaqdır.

## Tez-tez rast gəlinən tələlər və səhvlər

İndi isə şablonları tanımaq vaxtıdır. Çox güman ki, aşağıdakılardan ən azı bir
neçəsində özünüzü görəcəksiniz. Mən yeni başlayanda mütləq ki, onların bir
neçəsində özümü görmüşdüm.

**"İmtahandan keçdim, deməli, bilirəm."** İmtahandan keçmək, xüsusən də
əzbərləyərək keçmək, anlamaq demək deyil. Əgər altı ay sonra mövzunu
qeydlərinizə baxmadan izah edə bilmirsinizsə, deməli onu öyrənməmisiniz. Sadəcə,
vəziyyətdən xilas olmusunuz.

**"Tutorial" cəhənnəmi.** Heç vaxt sıfırdan nəsə yaratmadan ard-arda videoları
izləyib deyilənləri təkrarlamaq. Passiv izləyici olmaq insanda öyrənmək hissi
yaradır, lakin əslində bu belə deyil. Yüz saatlıq yemək bişirmə videolarına
baxıb hələ də yemək bişirə bilməmək kimidir.

**Yalnız LeetCode yolu.** Qalan hər şeyi bir kənara atıb yalnız alqoritm
məsələlərini əzbərləmək. Müsahibələr üçün faydalıdır. Anlamaq üçün isə kifayət
deyil. LeetCode-da mükəmməl olub, ən sadə paylanmış sistemi belə dizayn edə
bilməyəcək vəziyyətdə ola bilərsiniz.

**"Lazım olanda öyrənərəm."** Təməl bilikləri qeyri-müəyyən vaxta qədər təxirə
salmaq. Problem burasındadır ki, siz o biliyə sahib olmamanın sizə baha başa
gələcəyi bir vəziyyətə düşənə qədər, əslində ona ehtiyacınız olduğunu
bilmirsiniz. O an gəldikdə isə, artıq onu sakitcə oturub öyrənmək üçün çox gec
olur.

**"Bu dərs faydasızdır."** Dərhal tətbiqini görə bilmədiyiniz üçün nəzəri
dərsləri rədd etmək. Kompilyatorlar, formal dillər, hesablana bilmə
nəzəriyyəsi - bunlar ən çox qulaqardına vurulan və sonradan dərsə girmədiyinə
görə ən çox peşmanlıq yaradan fənlərdir.

**Anlayışlardan çox alətlərə üstünlük vermək.** Bütün vaxtınızı arxadakı
ideyaları öyrənmək əvəzinə spesifik freymvorkları və dilləri öyrənməyə sərf
etmək. React-i bilmək sizə üç il fayda verəcək. Brauzerlərin DOM-u necə
renderlədiyini anlamaq isə düz iyirmi il işinizə yarayacaq.

**"Bunun üçün süni intellektdən istifadə edərəm."** Özünüz hələ tam anlamamış,
düşünmə prosesini LLM-lərə həvalə etmək. Daha sürətli öyrənmək üçün süni
intellektdən istifadə etmək ağıllı addımdır. Ancaq öyrənməkdən qaçmaq üçün ondan
istifadə etmək özünü sabotaj etməkdir.

**"Mənə sadəcə necə həll edəcəyimi göstər."** Məsələnin məntiqini anlamadan
hazır proseduru istəmək. Bu, problem bir az dəyişənə və hazır prosedur artıq işə
yaramayana qədər keçərlidir. Bayaq danışdığımız kardinallıq hekayəsi ilə birbaşa
əlaqəlidir.

**"Əvvəlcə hər şeyi bilməliyəm."** Hazırlıq maskası arxasında gizlənən
[[mükəmməllikçilik]]. Siz başqa bir "tutorial" bitirməklə yox, işi icra edərək
öyrənirsiniz. Hansısa bir nöqtədə kitabı bağlayıb kod redaktorunuzu açmalısınız.

**Saxta ortalama ([[GPA]]) ikiliyi.** "Ortalama hər şeydir" və "Ortalamanın heç
bir əhəmiyyəti yoxdur" fikirləri. Heç biri doğru deyil. Ortalama bal
qanqaraldıcıların iddia etdiyindən daha çox, təşviş içində olan tələbələrin
qorxduğundan isə daha az əhəmiyyət kəsb edir. O, sadəcə, bir çox siqnaldan
biridir.

**Özünüzü dahilərlə müqayisə etmək.** Kompüter elmlərində göz qabağında olan
gənc dahilər var - 8 yaşında proqramlaşdırmağa başlayan, 16 yaşında məqalələr
dərc edən insanlar. Lakin ən uğurlu mühəndislərin əksəriyyəti o insanlar deyil.
Sizin öz yolunuz, öz zamanınız var.

**Nüfuzu mahiyyətdən üstün tutmaq.** Əslində nə öyrəndiyinizə və nə
yaratdığınıza deyil, Linkedin profilinizdə hansı şirkətin adının görünəcəyinə
köklənmək. Bu, işəgötürənlərin brendinə əsaslanan güclü status iyerarxiyalarının
olduğu mədəniyyətlərdə xüsusilə cəlbedicidir. Ad gəlib-gedicidir, lakin bilik
daim artaraq sizinlə qalır.

## Layihələr, təcrübə proqramları və dərsdənkənar öyrənmə

Dərs otağı sizə nəzəriyyə verir. Lakin sizin "kapotun altına girib" işin
mətbəxini görməyə də vaxt ayırmanız lazımdır.

### Anlayışı dərinləşdirmək üçün laboratoriya kimi layihələr

Hətta kiçik olsa belə, real bir sistem qurmaq sizi mühazirələrdə üstündən səthi
keçilən hər şeylə üzləşməyə məcbur edir: xətaların idarə edilməsi, sistemə
yüklənmə, yanlış daxil edilən məlumatlar, gecə saat 2-də xəta axtarışı və o "çox
sadə" görünən hissənin əslində ən çətin mərhələ olduğunu dərk etməyin verdiyi o
təvazökarlıq hissi.

Nələri öyrətdiyinə görə qruplaşdırılmış bəzi təkliflər:

- **Sistemlər:**
  [əmrlər sətri (shell)](https://brennan.io/2015/01/16/write-a-shell-in-c/),
  sadə bir [[yaddaş bölüşdürücüsü]], [[açar-dəyər deposu]], bəsit bir fayl
  sistemi yazın.
- **Şəbəkələr:** çat serveri, [xam soketlərdən](https://beej.us/guide/bgnet/)
  istifadə edərək HTTP server, DNS həlledicisi qurun.
- **Proqramlaşdırma dilləri:** kiçik bir dil üçün
  [tərcüməçi və ya kompilyator](https://craftinginterpreters.com/) yazın.
- **Məlumat bazaları:** [[B-ağacı]] indeksi, sadə bir sorğu mühərriki qurun.
- **Təhlükəsizlik:** nəsə yaradın və sonra onu qırmağa çalışın. İnanın ki,
  sındırmağa çalışarkən daha çox şey öyrənəcəksiniz.
- **Bütöv maşın:** [Nand2Tetris](https://www.nand2tetris.org/).
- **Hamısı birlikdə:**
  [build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) geniş
  yayılmış alətlərin öz versiyalarınızı yaratmaq üçün toplanmış mükəmməl bir
  rəhbər kolleksiyasıdır.

### Təcrübə proqramları və ilkin işlər

Bunları mühəndisliyin klinik rotasiyaları kimi düşünün: nəzəriyyənin real
sistemlərin xaotikliyi ilə qarşılaşdığı yer.

Yaxşı təcrübə proqramları məktəbin öyrədə bilməyəcəyi şeyləri öyrədir: böyük
[[kod bazası]]larında işləmək, [[kod yoxlama]] mədəniyyəti, canlı sistem
xətaları, növbətçilik qrafikləri, komandalararası əməkdaşlıq, real son tarixlər
altında prioritetlərin müəyyənləşdirilməsi və kodunuzun gerçək insanlar
tərəfindən istifadə edildiyini görməyin verdiyi o xüsusi hiss.

Əgər tanınmış şirkətlərdə təcrübə keçmək coğrafiya, maliyyə və ya viza
məhdudiyyətlərinə görə əlçatmazdırsa, uzaqdan iş, [[frilans]] layihələr və açıq
mənbəli töhfələr sizə daha az strukturlaşdırılmış bir mentorluqla bənzər öyrənmə
mühiti yarada bilər. Burada əsas məsələ real istifadəçiləri və ya real riskləri
olan gerçək bir iş üzərində çalışmaqdır. Bu yazı silsiləsinin təcrübə
proqramları və işlə bağlı ayrıca bir məqaləsi olacaq.

### Açıq mənbə və icmalar

Açıq mənbəli layihələrə töhfə vermək sizə başqalarının kodunu oxumağı öyrədir.
Bu, kompüter elmləri təhsilində ən az diqqət ayrılan bacarıqlardan biridir. O,
eyni zamanda real proqram təminatı layihələrinin necə təşkil olunduğunu,
qərarların necə sənədləşdirildiyini və texniki ideyaları yazılı şəkildə necə
ifadə etməli olduğunuzu öyrədir.

Əgər yaşadığınız şəhərdə güclü bir texnologiya icması yoxdursa, onu yaradan şəxs
olmağı düşünün. Mən Azərbaycanda şagirdlər üçün
[qış kamplarının](https://tedbilik.github.io/kamp/) təşkilinə kömək etmişdim,
çünki belə bir icma hələ mövcud deyildi. Kiminsə bunu başlatması lazım idi.
Həmin kimsə elə siz də ola bilərsiniz.

## Düşüncə tərzi və uzunmüddətli oyun haqqında

Yekunda bu uzunmüddətli yol haqqında bəzi fikirlərimi bölüşmək istəyirəm, çünki
kompüter elmləri dörd il oxuyub sonra dayanacağınız bir şey deyil.

### Öyrənmək heç vaxt dayanmır

Universitet təhsili dörd il çəkir. Öyrənmək isə bütöv bir karyera tələb edir.
Yeni sistemlər, yeni [[paradiqma]]lar, yeni tədqiqatlar - ən yaxşı mühəndislər
ömür boyu öyrənən tələbələrdir. Məzun olduqdan sonra öyrənməyi dayandırsanız,
olduğunuz yerdə saymırsınız, geri düşürsünüz. Biliklərinizin səhv olduğuna görə
yox, sahə dayanmadan irəlilədiyinə görə.

Karyeranız boyu öyrənmək üçün mütləq vaxt ayırın. Məqalələr oxuyun. Onlayn
kurslar keçin. Sizi bir az qorxudan, çətin görünən şeylər qurun. Hər zaman
mükəmməl qalan mühəndislər, maraqlarını heç vaxt itirməyənlərdir.

### Bilməməklə barışmaq

Kompüter elmləri çox geniş bir sahədir. Heç kim hər şeyi bilmir. Məqsəd hər şeyi
bilən biri olmaq deyil, güclü bir təmələ sahib olmaq və yeni şeyləri sürətlə
öyrənə bilməkdir.

"[[İmposter]] (saxtakar) sindromu" bu sahədə demək olar ki, hamıda var. Və
Dunning-Kruger anlayışı burada tərsinə də işləyir: nə qədər çox öyrənirsinizsə,
nə qədər çox şeyi bilmədiyinizin bir o qədər fərqinə varırsınız. Bu hiss sizin
bacarıqsız olduğunuzun göstəricisi deyil. Bu, sizin anlayışınızın böyüdüyünü
göstərir. Sizin əsl narahat olmalı olduğunuz şəxs elə hər şeyi bildiyini düşünən
şəxsdir.

### Zamanla dərinlik və əhatəlilik

Karyeranızın başlanğıcında genişliyə üstünlük verin. [[Tam stek]]i anlamağa
çalışın, fərqli sahələri yoxlayın, nəyi sevdiyinizi tapın. Karyeranızın
ortasında dərinliyə üstünlük verin, insanların konkret bir sahədə ekspertizaya
ehtiyac duyduqda yanına gəldikləri o şəxs olun. Karyeranızın sonlarına doğru isə
genişlik yenidən dəyər qazanır: arxitektura düşüncəsi, fərqli sahələri
bir-biriylə əlaqələndirmək, ixtisaslar üzrə mentorluq etmək.

### Təməl biliklərin yığılaraq artan dəyəri

Təməliniz güclüdürsə, öyrəndiyiniz hər yeni texnologiya sizə daha asan gəlir.
Üçüncü proqramlaşdırma dilini öyrənmək ikincidən daha asandır. Anladığınız
üçüncü sistem ikincidən daha asandır. Bu sürətlənmə sizin qurduğunuz o möhkəm
təməldən güc alır.

Güclü bir təməl sizə, sadəcə, daha sürətli öyrənməyə kömək etmir. O həm də daha
sürətli qiymətləndirməyə kömək edir. Yeni bir texnologiyaya baxıb onun nə
etdiyini, hansı güzəştlərə getdiyini və sizin vəziyyətinizə uyğun
olub-olmadığını sürətlə anlaya bilirsiniz. Təcrübəli mühəndisləri yeni
başlayanlardan fərqləndirən də elə bu qiymətləndirmə qabiliyyətidir və bu
qabiliyyət illərlə toplanan təməl anlayışın üzərində qurulur.

### Olduğunuz yerdən başlamaq

Bəzi oxucular bol imkanların olduğu güclü texnologiya [[ekosistem]]lərində
yaşayır. Digərləri isə texnologiya sənayesinin hələ gənc olduğu və imkanların az
olduğu yerlərdədirlər. Hər iki halda da bilik eynidir.

Proqram təminatı mühəndisliyinin qlobal təbiəti o deməkdir ki, sizin
bacarıqlarınız çox az peşənin rəqabət apara biləcəyi dərəcədə daşına biləndir.
Lakin bu, yalnız bacarıqlarınız həqiqi olduqda keçərlidir, sadəcə diplomdan və
ya hər hansı freymvorka bələd olmaqdan ibarət olmadıqda. Özünüzü həqiqətən
inkişaf etdirin. Güclü təməl sizə böyük bir sərbəstlik verir: bu, istər yerli
miqyasda, istər uzaqdan, istərsə də dünyanın istənilən yerində özgüvənlə işləmək
imkanı deməkdir.

## Nəticə

Kompüter elmlərini yaxşı öyrənmək otaqdakı ən ağıllı adam olmaq deyil. Bu,
özünüzə qarşı dürüst olmaqdır. Nəyi bildiyinizə, nəyi bilmədiyinizə və həqiqi
bir anlayışa sahib olmaq üçün tələb olunan o əziyyəti çəkməyə nə qədər hazır
olduğunuza dair dürüstlükdən söhbət gedir. Hər şey dəqiq təriflərlə başlayır.
Bütöv düşüncə modelləri ilə inşa edilir. Və işləyən sistemlər qurmaqla sınaqdan
keçirilir.

İstər təhsilinizə yeni başlayın, istər ortasında olun, istərsə də
məzuniyyətinizdən illər keçmiş olsun: materiallar əlçatandır, gediləcək yol
aydındır və qoyulan investisiya daim artaraq geri qayıdır. Başlamaq üçün heç
vaxt gec deyil və nə qədər tez ciddiyə alsanız, bir o qədər çox bəhrəsini
görəcəksiniz.

Kompüterin sizin hansı universitetdə oxuduğunuz və ya ortalama balınızın (GPA)
neçə olduğu vecinə deyil. Onun üçün əhəmiyyətli olan yeganə şey sizin onu
anlayıb-anlamamağınızdır.

Bu, kompüter elmləri sahəsində karyera qurmaq haqqında yazı silsiləsinin ilk
məqaləsidir. Gələcək yazılarda təcrübə proqramları və iş yerləri, müsahibələr və
sənayedə öz yolunu tapmaq mövzularını əhatə edəcəyik. Əgər suallarınız və ya
rəyləriniz varsa, onları eşitməkdən şad olaram.

## Dil haqqında qısa bir qeyd

Ən yaxşı kompüter elmləri resurslarının mütləq əksəriyyəti ingilis dilindədir.
Əgər ingilis diliniz zəifdirsə, onu inkişaf etdirməyə vaxt ayırmaq elə
karyeranıza qoyduğunuz ən böyük investisiyadır — və bəlkə də texniki
təhsilinizlə yanaşı ən çox bəhrəsini görəcəyiniz addımdır. Lakin ingilis
dilinizin mükəmməl olmaması sizi başlamaqdan çəkindirməsin. Yavaş-yavaş oxuyun,
tərcümə alətlərindən istifadə edin və məruz qaldıqca texniki ingiliscəniz də
mütləq inkişaf edəcək. İlk kitabın ilk fəslini oxumaq əzablı olacaq. Onuncu
fəsil isə artıq sadə bir rutinə çevriləcək.
