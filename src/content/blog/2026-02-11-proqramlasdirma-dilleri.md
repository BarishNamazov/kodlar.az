---
title: "Proqramlaşdırma Dillərinin Zehni Xəritəsi"
author: abutalib-barish-namazov
description:
  "Niyə bu qədər çox dil var, onlar düşüncə tərzimizi necə formalaşdırır və
  bunların hamısı bizim üçün nə deməkdir."
date: 2026-02-11
categories: ["Proqram Dilləri"]
---

Dünyada yüzlərlə proqramlaşdırma dili mövcuddur. Əgər nə vaxtsa onların
siyahısına baxıb **niyə** — niyə sadəcə ən yaxşısını seçib yolumuza davam
etmirik — deyə düşünmüsünüzsə, tamamilə doğru sualı verirsiniz. Sən demə, bunun
cavabı proqramlaşdırmanın əslində nə olduğu barədə dərin bir həqiqəti üzə
çıxarır: bu, sadəcə bir maşın üçün təlimat yazmaq deyil, həm də problemlər
haqqında düşüncə tərzi seçməkdir.

Bu resurs həmin mənzərənin xəritəsidir. Bu sahəyə girməzdən əvvəl kiminsə sizə
təqdim etməsini arzulayacağınız bir bələdçi. Bütün proqram mühəndisləri və
kompüter elmləri/mühəndisliyi tələbələri bunları yaxşı bilməlidirlər.

---

## 1. Proqramlaşdırma Dili Əslində Nədir?

Özəyində proqramlaşdırma dili, insan niyyəti ilə maşın icrası arasındakı
interfeysdir. Sizin kompüterə etdirmək istədiyiniz bir şey var. Kompüter isə
elektrik gərginliklərini və ikili (binar) siqnalları başa düşür. Proqramlaşdırma
dili bu iki reallıq arasındakı boşluqda dayanır və birini digərinə tərcümə edir.

Amma bu tərif məsələni tam əhatə etmir. Kod eyni anda ən azı üç iş görür.

Birincisi, o, **təlimatlar** verir — maşının yerinə yetirdiyi addım-addım
əmrlər. İkincisi, o, **abstraksiyalar** yaradır — mürəkkəb əməliyyatları sadə
adlarla çağırmağa imkan verir, qarışıq detalları təmiz bir səth altında
gizlədir. Üçüncüsü və bəlkə də ən maraqlısı, o, **reallığın modeli** kimi çıxış
edir. Proqramçı "istifadəçi", "əməliyyat" və ya "sensor oxunuşu"nu təmsil edən
kod yazarkən, maşının daxilində miniatür bir konseptual dünya qurur. İstifadə
etdikləri dil həmin dünyanın necə görünəcəyini formalaşdırır.

Kodun əslində necə işlədiyi barədə faydalı bir yanaşma var. Bəzi dillər
**kompilyasiya olunur (tərtib edilir)**: yazdığınız kod proqram işə düşməzdən
_əvvəl_ maşının oxuya biləcəyi təlimatlara çevrilir; sanki bir kitabı başqa dilə
tərcümə edib, bitmiş tərcüməni təhvil verirsiniz. Digər dillər **interpretasiya
olunur**: kod real vaxt rejimində sətir-sətir oxunur və icra edilir, bu daha çox
canlı söhbət zamanı tərcüməçinin işinə bənzəyir. Bir çox müasir dillər bu iki
yanaşma arasındakı sərhədi bulandırır, lakin konseptual fərq hələ də önəmlidir.
Kompilyasiya olunan dillər daha sürətli olmağa meyllidirlər. İnterpretasiya
olunan dillər isə inkişaf zamanı daha çevik və səhvlərə qarşı daha dözümlü
olurlar.

Burada son bir fikir də qeyd edim. Biz bunlara _dillər_ deyirik və bu söz ilk
baxışda göründüyündən daha uyğundur. Təbii dillər kimi, proqramlaşdırma
dillərinin də qrammatikası, lüğəti, idiomları və danışanlar icması var. Təbii
dillər kimi, onlar da istifadəçilərinin düşüncə tərzini formalaşdırır. Haskell
dilində səlis danışan bir proqramçı problemə C dilində danışandan fərqli
yanaşacaq; bu, hansısa birinin daha yaxşı olduğuna görə yox, dillərin fərqli
zehni vərdişləri təşviq etməsinə görədir.

---

## 2. Niyə Bu Qədər Çox Proqramlaşdırma Dili Var?

Qısa cavab: çünki tək bir mükəmməl dil yoxdur.[^bəlkə suni intellekt ümumi
intellektə sahib olanda proqram dili sadəcə təbii dil olacaq :-)]

Hər bir proqramlaşdırma dili dizayn qərarlarında dondurulmuş bir kompromislər
(güzəştlər) toplusudur. Dilləri fərqli istiqamətlərə çəkən bəzi məqamlar
bunlardır:

**Performans və Təhlükəsizlik.** C kimi bir dil sizə xam sürət və yaddaş
üzərində birbaşa nəzarət verir — lakin o, səhv etməyəcəyinizə güvənir və səhv
etdiyiniz zaman nəticələr fəlakətli ola bilər. Rust kimi bir dil oxşar
performans təklif edir, lakin tərtib (kompilyasiya) zamanı ciddi təhlükəsizlik
qaydalarını tətbiq edərək, proqramınız işə düşməzdən əvvəl bütöv səhv
kateqoriyalarını tutur. Bunun əvəzi isə daha çətin öyrənmə prosesi və daha
tələbkar bir kompilyatordur (məsələn, kompilyasiya daha uzun çəkir).

**İfadə Asanlığı və Sadəlik.** Haskell kimi bəzi dillər sizə inanılmaz dərəcədə
güclü abstraksiyalar verir: mürəkkəb fikirləri çox az sətirlə ifadə edə
bilərsiniz. Lakin bu güc konseptual sıxlıqla gəlir — öyrənmə procesi çox
çətindir və başqasının kodunu oxumaq riyaziyyatı deşifrə etmək kimi hiss edilə
bilər. Go kimi digər dillər isə qəsdən öz xüsusiyyətlərini məhdudlaşdırır. Go
bəzən "darıxdırıcı" olduğu üçün tənqid edilir, lakin bu darıxdırıcılıq bir
üstünlükdür: hər hansı bir Go proqramçısı başqa bir Go proqramçısının kodunu
çətinlik çəkmədən oxuya bilər.

**Ekosistem və Alətlər.** Çox az dil təkbaşına güclü ola bilər (məsələn, C
dili). Dillərin çoxu paket menecerləri, kitabxanalar, freymvorklar, sazlayıcılar
(debuggers), icma forumları və iş bazarları ilə birlikdə gəlir. Python ən
sürətli dil deyil. Ən təhlükəsiz dil də deyil. Lakin onun data elmi (data
science) və maşın öyrənməsi üçün ekosistemi o qədər zəngin və yetkindir ki, bu
tapşırıqlar üçün başqa dil seçmək çox vaxt "velosipedi yenidən kəşf etmək"
deməkdir.

Bu texniki məqamlardan əlavə, insan və tarix faktorları da rol oynayır. Akademik
tədqiqatçılar fikirləri araşdırmaq üçün dillər yaradırlar — ML və Haskell kimi
dillər universitet laboratoriyalarından çıxıb. Korporasiyalar biznes
problemlərini həll etmək üçün dillər yaradırlar — Java Sun Microsystems-də, C#
Microsoft-da, Go isə Google-da doğulub. Bəzi dillər xüsusi bir platforma
səbəbindən mövcuddur: Objective-C onilliklər ərzində Apple ekosisteminin dili
idi, JavaScript isə veb səhifələri interaktiv etmək üçün on gün ərzində
yaradılmışdı. Həmin tələsik yaranma hekayəsi, onilliklər boyu davam edən
təkamüldən sonra belə dilin qəribəliklərində hələ də görünür.

Keçmiş istifadə (legacy) də önəmlidir. Dünyanın maliyyə infrastrukturunun böyük
bir hissəsi hələ də 1959-cu ildə hazırlanmış COBOL dilində işləyir. COBOL
kiminsə sevimlisi olduğu üçün yox, milyonlarla sətirlik işlək, sınaqdan keçmiş
kodu yenidən yazmaq bahalı və təhlükəli olduğu üçün hələ də qalıb.

"Yeganə doğru dil" mifi cəlbedicidir, lakin yanlışdır. Bu, niyə həm çəkicə, həm
də vintaçana ehtiyacımız olduğunu soruşmağa bənzəyir. Onlar fərqli problemləri
həll edirlər. Və bəzən onlar arasındakı seçim alətdən çox, onu tutan əllə bağlı
olur.

---

## 3. Qısa Tarixçə: Problemlər və Həllər

Proqramlaşdırma dillərinin tarixini kalendardakı günlər və adlar siyahısı kimi
deyil, bir zəncirvari problemlər və insanların onları həll etmək üçün icad
etdiyi həllər kimi başa düşmək ən doğrusudur.

### Maşınla Birbaşa Danışmaq

Başlanğıcda heç bir dil yox idi — yalnız aparat təminatı (hardware) var idi. İlk
proqramçılar maşınlarla **perfokartlar** vasitəsilə ünsiyyət qururdular:
üzərində dəqiq nümunələr əsasında deşiklər açılmış karton parçaları. Hər bir
deşik (və ya deşiyin olmaması) bir məlumat bitini təmsil edirdi. Proqramlaşdırma
əməliyyatlarınızı kağız üzərində planlaşdırmaq, onları kartlara kodlaşdırmaq,
dəstəni maşına daxil etmək və gözləmək demək idi. Səhv etsəniz, yeni bir kart
deşməli idiniz. Bu, fiziki, toxunula bilən bir proqramlaşdırma aktı idi.

<Image src="https://static.vecteezy.com/system/resources/previews/023/583/060/original/pure-ibm-punch-card-for-electronic-calculated-data-processing-machines-retro-punchcard-for-input-and-storage-in-automated-technology-information-processing-systems-illustration-isolated-vector.jpg" alt="perfokart" />

Perfokartlar yerini **maşın koduna** — prosessorun birbaşa icra etdiyi xam ikili
təlimatlara verdi. Maşın kodunu yazmaq kart deşməkdən daha sürətli olsa da, çox
da xoş deyildi. Hər bir təlimat bir rəqəm idi. Dəyişən adları, funksiyalar, heç
bir abstraksiya yox idi. Yaddaş ünvanlarını əzbərləməli idiniz.

**Assembli (Assembly) dili** ilk abstraksiya oldu. `10110000 01100001` yazmaq
əvəzinə, `MOV AL, 61h` yaza bilərdiniz — bu hələ də prosessora birbaşa təlimat
idi, lakin insanın heç olmasa oxuya biləcəyi bir şey idi. Assembli
proqramlaşdırmanı daha sürətli və az xətalı etdi, lakin o hələ də hədəflədiyiniz
xüsusi aparat təminatına sıx bağlı idi. Bir prosessor üçün yazılmış kod
digərində işləmirdi.

### Yüksək Səviyyəli Dillərə Sıçrayış

1950-ci illər inqilabi bir fikir gətirdi: bəs əgər nə hesablamaq _istədiyinizi_
təsvir edən kod yaza bilsəniz və bir proqram — **kompilyator** — bunu sizin üçün
maşın koduna tərcümə etsə necə olar?

**FORTRAN** (1957) elmi və riyazi hesablamalar üçün qurulmuş ilk geniş uğur
qazanan yüksək səviyyəli dil oldu. O, mühəndislərə maşın təlimatları ardıcıllığı
əvəzinə, cəbrə bənzəyən formullar yazmağa imkan verdi. FORTRAN əvvəlcə
mübahisəli idi — bir çox proqramçı inanırdı ki, kompilyator heç vaxt əllə
yazılmış assebler qədər səmərəli kod istehsal edə bilməz. Onlar yanılırdılar, ya
da ən azından fərq əhəmiyyət kəsb etməyəcək qədər sürətlə azaldı.

```fortran
      PROGRAM DOT_PRODUCT
      REAL A(3), B(3), RESULT
      DATA A /1.0, 2.0, 3.0/
      DATA B /4.0, 5.0, 6.0/
      RESULT = 0.0

      DO 10 I = 1, 3
         RESULT = RESULT + A(I) * B(I)
   10 CONTINUE

      PRINT *, 'Dot product = ', RESULT
      END
```

**COBOL** (1959) fərqli bir sahəni hədəflədi: biznes məlumatlarının emalı.
FORTRAN rəqəmlər və tənlikləri idarə edirdisə, COBOL qeydləri, faylları və
əməliyyatları idarə etmək üçün dizayn edilmişdi. Onun sintaksisi qəsdən geniş və
ingilis dilinə bənzər idi, bu da biznes məntiqinin təkcə mühəndislər tərəfindən
deyil, menecerlər tərəfindən də oxuna bilməsi fikrinə əsaslanırdı. Bu
oxunaqlılıq hədəfinə yalnız qismən nail olundu, lakin COBOL-un kommersiya
hesablamalarına təsiri böyük oldu.

```cobol
       IDENTIFICATION DIVISION.
       PROGRAM-ID. PAYROLL.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 EMPLOYEE.
          05 NAME        PIC A(20).
          05 HOURS-WORKED PIC 99.
          05 RATE        PIC 9V99.
          05 PAY         PIC 999V99.

       PROCEDURE DIVISION.
           MOVE "ALICE" TO NAME
           MOVE 40 TO HOURS-WORKED
           MOVE 15.50 TO RATE
           COMPUTE PAY = HOURS-WORKED * RATE
           DISPLAY "EMPLOYEE: " NAME
           DISPLAY "PAY: " PAY
           STOP RUN.
```

**ALGOL** (1958–1960) məşhur olduğundan daha çox təsirli idi. O,
strukturlaşdırılmış proqramlaşdırma anlayışlarını — kod blokları, iç-içə
idarəetmə strukturları, leksik əhatə dairəsi — təqdim etdi ki, bunlar ondan
sonra gələn demək olar ki, hər bir dilin təməli oldu. ALGOL, birbaşa olaraq az
adam tərəfindən istifadə edilməsinə baxmayaraq, illər boyu akademik kompüter
elmləri məqalələrinin dili oldu.

```algol
begin
   integer i;
   real sum;

   sum := 0;
   for i := 1 step 1 until 10 do
      sum := sum + 1 / i;

   print(sum)
end
```

**Lisp** (1958) tamamilə fərqli bir istiqamətə getdi. John McCarthy tərəfindən
yaradılan Lisp, kod və məlumatı eyni şey kimi qəbul edirdi — proqramlar digər
siyahıları, o cümlədən özlərini manipulyasiya edə bilən siyahılar idi. Bu,
Lisp-i xüsusilə süni intellekt tədqiqatları üçün qeyri-adi dərəcədə çevik və
güclü etdi. Lisp, zibil toplama (garbage collection), əsas idarəetmə strukturu
kimi rekursiya və yüksək dərəcəli funksiyalar kimi ideyaları təqdim etdi — bu
ideyaların məşhurluğa çatması onilliklər çəkdi, lakin indi onlar hər yerdədir.

```scheme
(defun factorial (n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(mapcar #'factorial '(1 2 3 4 5))
```

### Struktur və Nizam-intizam

1960-cı illərin sonlarına doğru proqram təminatı o qədər mürəkkəbləşirdi ki,
insanlar nəzarəti itirməyə başladılar. Lüğətə "proqram təminatı böhranı" ifadəsi
daxil oldu. Proqramlar gecikir, xətalarla dolu olur və büdcəni aşırdı. Problemin
bir hissəsi o idi ki, dövrün dilləri `GOTO` ifadələrinin məhdudiyyətsiz
istifadəsi ilə mümkün olan dolaşıq, izlənməsi çətin kodu — məşhur "spagetti
kodu"nu təşviq edirdi.

Edsger Dijkstra və digərlərinin rəhbərlik etdiyi **strukturlaşdırılmış
proqramlaşdırma** hərəkatı, proqramların təmiz, birləşdirilə bilən
strukturlardan qurulmalı olduğunu müdafiə edirdi: ardıcıllıqlar, seçimlər
(if/else) və dövrlər. Niklaus Wirth tərəfindən hazırlanmış **Pascal** (1970) bu
hərəkatın simvolu idi — nizamlı proqramlaşdırma vərdişlərini aşılamaq üçün
nəzərdə tutulmuş tədris dili.

**C** (1972) strukturlaşdırılmış proqramlaşdırmanı daha praqmatik bir istiqamətə
apardı. Bell Labs-da Dennis Ritchie tərəfindən yaradılan C, əməliyyat sistemləri
— xüsusən də Unix yazmaq üçün dizayn edilmişdi. O, assembli dilinin nəzarəti və
səmərəliliyini yüksək səviyyəli dilin oxunaqlılığı və daşına bilməsi ilə
birləşdirdi. C təhlükəsiz deyildi. O, yaddaşla təhlükəli şeylər etməyə imkan
verirdi. Lakin o, sürətli, çevik və "dəmirə yaxın" idi və onilliklər boyu sistem
proqramlaşdırmasının ortaq dili oldu. Onun təsirini qiymətləndirməmək mümkün
deyil: C-nin sintaksisi C++, Java, C#, JavaScript və bir çox başqalarının
əcdadıdır.

### Obyektlərin Yüksəlişi

1980-ci illərdə proqram təminatı sistemləri böyüdükcə yeni bir təşkilati ideya
sürət qazandı: **obyekt-yönümlü proqramlaşdırma (OOP)**. Əsas fikir proqram
təminatını "obyektlər" toplusu kimi modelləşdirmək idi, burada hər bir obyekt
məlumatları və həmin məlumatlar üzərində fəaliyyət göstərən əməliyyatları bir
araya gətirirdi.

**Smalltalk** (1972–1980) bu ideyanın ən saf ifadəsi idi — Smalltalk-da hər şey,
o cümlədən rəqəmlər və mühakimə (boolean) dəyərləri bir obyekt idi. O, həmçinin
qrafik istifadəçi interfeysləri üçün qabaqcıl bir mühit idi. Smalltalk ondan
sonra gələn demək olar ki, hər şeyə təsir etdi, lakin OOP-ni kütlələrə çatdıran,
obyekt-yönümlü xüsusiyyətləri C-yə əlavə edən **C++** (1979–1985) oldu. C++
C-nin performansından imtina etmədən OOP-nin gücünü təklif edirdi və bu da onu
1990-cı illər boyu iri miqyaslı proqram təminatı üçün dominant dilə çevirdi.

**Java** (1995) paradiqmanı daha da irəli apardı. Sun Microsystems-də "bir dəfə
yaz, hər yerdə işlət" şüarı ilə dizayn edilən Java, proqramları platformalar
arasında daşına bilən edən virtual maşında işləyən aralıq bayt-koda kompilyasiya
olunurdu. Java həmçinin avtomatik yaddaş idarəçiliyi (zibil toplama) və bir çox
xətanı tərtib zamanı tutan ciddi tip sistemi əlavə etdi. O, korporativ proqram
təminatı, Android inkişafı və universitet kurikulumları üçün standart dilə
çevrildi.

Microsoft-un Java-ya cavabı olan **C#** (2000), Windows və .NET ekosisteminə sıx
inteqrasiya ilə oxşar bir yol izlədi.

### İnternet Hər Şeyi Dəyişir

1990-cı illərin ortalarında Ümumdünya Hörümçək Torunun (World Wide Web)
yüksəlişi brauzerlərdə, serverlərdə və şəbəkələrdə işləyən proqram təminatına
tələbat partlayışı yaratdı. Bu dövr bizə skript dillərini bəxş etdi.

**JavaScript** (1995) Netscape Navigator-da veb səhifələrinə interaktivlik əlavə
etmək üçün Brendan Eich tərəfindən on gün ərzində yaradıldı. Tələsik mənşəyinə
baxmayaraq, JavaScript hər veb brauzerdə yerli olaraq işləyən yeganə
proqramlaşdırma dili oldu və bu ona müştəri tərəfi (client-side) veb inkişafında
inhisar qazandırdı. Zamanla o, serverləri, mobil tətbiqləri və hətta masaüstü
proqramları gücləndirən ümumi məqsədli bir dilə çevrildi. Microsoft tərəfindən
hazırlanan **TypeScript** (2012) JavaScript-in üzərinə statik tip sistemi əlavə
edərək, iri miqyaslı inkişaf üçün onun bir çox zəif cəhətlərini həll etdi.

**Python** (1991) Guido van Rossum tərəfindən oxunaqlılıq və sadəliyə vurğu
edilərək dizayn edildi. Onun təmiz sintaksisi və yumşaq öyrənmə əyrisi onu
tədris, skript yazma və sürətli prototipləmə üçün populyar etdi. 2010-cu illərdə
data elmi və maşın öyrənməsi populyarlığı gəldikdə, Python-un zəngin ədədi və
elmi kitabxanalar ekosistemi (NumPy, pandas, scikit-learn, TensorFlow) onu həmin
sahələrdə dominant dilə çevirdi.

**Ruby** (1995), **Perl** (1987) və **PHP** (1995) hər biri öz sahələrini tutdu
— Ruby zərif veb inkişafında (Rails vasitəsilə), Perl mətn emalı və sistem
inzibatçılığında, PHP isə WordPress və Facebook-un ilk versiyaları daxil
olmaqla, erkən dinamik vebin arxasındakı işçi qüvvəsi kimi idilər.

### Müasir Dövr: Təhlükəsizlik, Sürət və Eşzamanlılıq

Dillərin ən son nəsli bir neçə təkrarlanan mövzu ilə müəyyən edilir: yaddaş
təhlükəsizliyi, eşzamanlılıq (concurrency) və paradiqmaların qarışması.

**Rust** (2010, stabil 2015) təhlükəsizlik probleminə birbaşa hücum edir. Onun
sahiblik və borc (ownership and borrowing) sistemi zibil toplayıcı olmadan
kompilyasiya zamanı yaddaş təhlükəsizliyinə zəmanət verir və C səviyyəsində risk
olmadan C səviyyəsində performans təklif edir. Rust Mozilla, Amazon, Microsoft
və Linux kernel layihəsi tərəfindən qəbul edilib.

Google-da yaradılan **Go** (2009) sadəlik, sürətli kompilyasiya və "goroutines"
vasitəsilə daxili eşzamanlılıq üçün optimallaşdırılıb. O, bulud infrastrukturu,
mikroservislər və əmr sətri alətləri üçün sevimli dilə çevrilib.

**Swift** (2014) təhlükəsizlik, performans və müasir sintaksisi birləşdirərək
Apple-ın əsas dili kimi Objective-C-ni əvəz etdi. **Kotlin** (2011) Android və
JVM ekosistemi üçün oxşar bir şey edərək, Java-ya daha ifadəli və yığcam
alternativ təklif etdi.

**Elixir** (2011) kimi dillər, daha dostcanlı sintaksislə funksional
proqramlaşdırmanı və xətaya dözümlü eşzamanlılığı (Erlang-ın döyüşdə sınanmış
virtual maşınından miras qalmış) daha geniş auditoriyaya gətirdi.

Hekayə, əlbəttə ki, hələ də yazılır.

---

## 4. Proqramlaşdırma Paradiqmaları: Kod Haqqında Necə Düşünürük?

Paradiqma dilin tək xüsusiyyəti deyil, həm də onunla yazılan proqramların
məntiqini təşkil etmək üçün zehni modeldir. Müasir dillərin əksəriyyəti bir neçə
paradiqmanı dəstəkləyir, lakin hər birini ayrı-ayrılıqda başa düşmək bizə kömək
edəcək.

### 4.1 İmperativ və Prosedural Proqramlaşdırma

Bu ən intuitiv paradiqmadır, çünki gündəlik həyatda necə təlimat verdiyimizi əks
etdirir. _Bunu et. Sonra onu et. Əgər bu şərt doğrudursa, başqa bir şey et.
Bitənə qədər təkrarla._

İmperativ proqramlaşdırma proqramın **vəziyyətini** — dəyişənlərdə saxlanılan
dəyərləri, yaddaşın məzmununu dəyişdirən ifadələr ardıcıllığıdır. Prosedural
proqramlaşdırma təlimatları **prosedurlara** (və ya funksiyalara) təşkil etməklə
buna struktur əlavə edir: adlandırılmış, təkrar istifadə edilə bilən kod
blokları.

C, Pascal və Go prosedural dillərdir. Bu üslubda yazanda proqramınız resept kimi
oxunur: hər biri dünyanın bir hissəsini dəyişdirən addımlar seriyası.

Bu modelin gücü onun birbaşalığındadır. Nə baş verdiyini addım-addım izləyə
bilərsiniz. Zəifliyi ondadır ki, proqramlar böyüdükcə, dəyişən vəziyyətlər
çoxluğu (kodun müxtəlif hissələri tərəfindən dəyişdirilən bütün o dəyişənlər)
haqqında mühakimə yürütmək çətinləşir. Səhvlər proqramın uzaq hissələri
arasındakı gözlənilməz qarşılıqlı əlaqələrdə gizlənir.

### 4.2 Obyekt-yönümlü Proqramlaşdırma (OOP)

OOP fərqli bir təşkilati prinsip təklif edir: əməliyyatlar ardıcıllığı haqqında
düşünmək əvəzinə, **obyektlər** haqqında düşünün — məlumatları (atributları) və
davranışı (metodları) bir araya gətirən müstəqil varlıqlar.

Bir `BankAccount` (Bank Hesabı) obyekti balans ehtiva edə bilər və `deposit()`
(mədaxil) və `withdraw()` (məxaric) kimi metodlar təklif edə bilər. Balansın
necə saxlandığının daxili detalları təmiz bir interfeys arxasında gizlədilir —
bu **enkapsulyasiya**dır. Obyektlər **mirasalma (inheritance)** vasitəsilə
iyerarxiyalara təşkil edilə bilər: `SavingsAccount` (Əmanət Hesabı)
`BankAccount`-dan miras ala bilər və faiz hesablamaları əlavə edə bilər. Və
**polimorfizm** müxtəlif növ obyektlərin eyni mesaja müxtəlif yollarla cavab
verməsinə imkan verir — hər hansı bir hesab növündə `calculateFee()` (Rüsumu
Hesabla) çağıra bilərsiniz və hər biri bunu öz qaydalarına uyğun hesablayacaq.

OOP 1980-ci illərin sonlarından 2000-ci illərə qədər dominant paradiqma oldu və
bunun əsaslı səbəbi var idi. O, bir çox real dünya sahələrinə yaxşı uyğun gəlir,
böyük komandalar üçün miqyaslana bilir (müxtəlif insanlar müxtəlif obyektlər
üzərində işləyə bilər) və proqram təminatı dizaynı üçün təbii bir lüğət təmin
edir.

Lakin OOP-nin tənqidçiləri də çoxdur. Dərin miras iyerarxiyaları kövrək və
dəyişdirilməsi çətin ola bilər. Dəyişən obyektlərə vurğu eşzamanlı
proqramlaşdırmanı çətinləşdirə bilər — bir neçə nüvə (thread) eyni obyektə eyni
vaxtda daxil olduqda, işlər incə yollarla tərs gedə bilər. Və bəzi problemlər
obyektlərə yaxşı uyğun gəlmir. Sənayenin cavabı OOP-ni tərk etmək yox, onu
yumşaltmaq oldu: müasir ən yaxşı təcrübələr mirasdan çox kompozisiyaya, kiçik
interfeyslərə və digər paradiqmalardan ideyalar götürməyə üstünlük verir.

### 4.3 Funksional Proqramlaşdırma

Funksional proqramlaşdırma fərqli bir əsasdan başlayır: bəs əgər vəziyyəti
dəyişdirmək əvəzinə, hesablamaları riyazi funksiyaların qiymətləndirilməsi kimi
təsvir etsəniz necə olar?

Saf funksional üslubda məlumatlar **dəyişməzdir (immutable)** — bir dəyər
yaradıldıqdan sonra heç vaxt dəyişmir. Siyahını dəyişdirmək əvəzinə, arzu olunan
dəyişikliklərlə yeni bir siyahı yaradırsınız. Funksiyalar **birinci dərəcəli
vətəndaşlardır**: onlar digər funksiyalara arqument kimi ötürülə, nəticə kimi
qaytarıla və dəyişənlərdə saxlanıla bilər. Başqa bir funksiyanı giriş kimi qəbul
edən funksiya **yüksək dərəcəli funksiya** adlanır və bu, inanılmaz dərəcədə
güclü bir abstraksiya olur.

Faydaları əhəmiyyətlidir. Dəyişməz məlumatlar paylaşılan vəziyyətlə bağlı bütöv
səhv kateqoriyalarını aradan qaldırır. Proqramlar haqqında mühakimə yürütmək
asanlaşır, testlər yazmaq rahatlaşır və təbii olaraq **paralel icraya**
uyğunlaşır — əgər heç nə dəyişdirilmirsə, eyni anda bir neçə hesablama aparmaqda
heç bir təhlükə yoxdur.

Klassik funksional dillər **Haskell**, **Scheme** və **ML** ailəsidir (OCaml və
Standard ML). **Erlang** və onun müasir varisi **Elixir** xətaya dözümlülük və
eşzamanlılığa vurğu edərək funksional proqramlaşdırmanı telekommunikasiya və veb
xidmətlərinə gətirdi. **F#** funksional proqramlaşdırmanı .NET ekosisteminə
gətirdi.

Onilliklər ərzində funksional proqramlaşdırma akademik və qeyri-praktik hesab
edilirdi. Bu fikir kəskin şəkildə dəyişdi. Bu gün demək olar ki, hər bir əsas
cərəyan dili funksional xüsusiyyətləri qəbul edib: Java, Python, C++ və
JavaScript-də lambdalar və bağlanmalar (closures); map/filter/reduce
əməliyyatları; Rust, Python və C#-da uyğunluq funksiyaları (pattern matching).
Funksional inqilab digər dilləri əvəz etməklə baş vermədi — onlara sızmaqla baş
verdi.

### 4.4 Deklarativ Proqramlaşdırma

Deklarativ proqramlaşdırma proqramçı və kompüter arasındakı adi əlaqəni tərsinə
çevirir. Bir şeyi addım-addım _necə_ yerinə yetirəcəyini dəqiqləşdirmək əvəzinə,
_nə_ istədiyinizi təsvir edirsiniz və sistem onu necə çatdıracağını özü müəyyən
edir.

**SQL** ən geniş istifadə olunan deklarativ dildir.
`SELECT name FROM users WHERE age > 30` yazanda, onu tapmaq alqoritmini deyil,
istədiyiniz nəticəni təsvir edirsiniz. Verilənlər bazası mühərriki cədvəlləri
necə skan edəcəyinə, indeksləri necə istifadə edəcəyinə və sorğunu necə
optimallaşdıracağına qərar verir.

**HTML** və **CSS** də deklarativdirlər: HTML sənədin _strukturunu_, CSS isə
onun _görünüşünü_ təsvir edir. Heç biri renderləmə alqoritmini dəqiqləşdirmir —
brauzer bunu həll edir.

**Prolog** deklarativ proqramlaşdırmanı məntiqi ekstremallığa çatdırır. Siz
faktları və qaydaları müəyyən edirsiniz, dilin nəticə çıxarma mühərriki isə
nəticələri əldə edir. Prolog istifadəsi nadir bir dildir, lakin ideyaları
məhdudiyyət həlledicilərində, tip sistemlərində və müəyyən süni intellekt
tətbiqlərində yaşayır.

Deklarativ yanaşmalar sahə yaxşı müəyyən edildikdə və sistem icranı insan
proqramçıdan daha yaxşı optimallaşdıra bildikdə parlayır. Bir şeyin tam olaraq
necə baş verdiyinə incə nəzarət lazım olduqda isə çətinlik çəkirlər.

---

## 5. Vizual və Qrafik Proqramlaşdırma

Bütün proqramlaşdırma mətn yazmaqdan ibarət deyil. Əhəmiyyətli və böyüyən bir
alətlər ailəsi insanlara vizual elementləri manipulyasiya edərək — blokları
birləşdirərək, axın diaqramları çəkərək və ya qraf üzərində düyünləri bir-birinə
bağlayaraq proqramlaşdırmağa imkan verir.

**Scratch** və **Blockly** kimi **blok əsaslı dillər** proqramlaşdırma
anlayışlarını uşaqlara və yeni başlayanlara öyrətmək üçün dizayn edilib.
Sintaksis yazmaq (və hərf səhvləri etmək) əvəzinə, istifadəçilər dövrləri,
şərtləri və dəyişənləri təmsil edən rəngli blokları birləşdirirlər. Bu, giriş
baryerini kəskin şəkildə aşağı salır və milyonlarla gənci hesablama düşüncəsi
ilə tanış edir.

**Düyün əsaslı sistemlər** yaradıcı və texniki sahələrdə populyar olan fərqli
bir yanaşma tətbiq edir. **Unreal Engine-in Blueprints** sistemi oyun
dizaynerlərinə C++ tələb olunmadan vizual qrafikdə düyünləri birləşdirərək oyun
məntiqi qurmağa imkan verir. **Unity-nin Vizual Skriptləməsi** də oxşar bir iş
görür. **LabVIEW** elmi alətləri və sınaq sistemlərini proqramlaşdırmaq üçün
məlumat axını diaqramlarından istifadə edir.

Vizual proqramlaşdırmanın üstünlükləri realdır: əlçatanlıq, sürətli prototipləmə
və müəyyən növ məntiqlərin (xüsusilə məlumat axını və vəziyyət maşınlarının)
daha intuitiv təsviri. Lakin vizual proqramlaşdırmanın da aydın məhdudiyyətləri
var. Proqramlar böyüdükcə, vizual qrafiklər idarəolunmaz hala gəlir — spagetti
kodun vizual ekvivalenti. Abstraksiyaya nail olmaq daha çətindir. Versiya
nəzarəti (zamanla dəyişikliklərin izlənməsi) çətindir, çünki "mənbə kodu" sadə
mətndən daha çox binar və ya qrafik fayldır. Və müəyyən miqyasda mətn sadəcə
şəkillərdən daha səmərəli ünsiyyət qurur.

Vizual proqramlaşdırma mətn əsaslı proqramlaşdırmanın əvəzedicisi deyil, lakin
güclü bir tamamlayıcıdır — və bir çox sahələr və auditoriyalar üçün işi görmək
üçün doğru alətdir.

---

## 6. Dillər Bu Gün Nə Üçün İstifadə Olunur?

Bütün bu tarix və nəzəriyyə çox praktik bir suala bağlanır: kim nəyi və niyə
istifadə edir?

**Sistem proqramlaşdırması** — əməliyyat sistemləri, sürücülər (drivers),
mikroproqram təminatı (firmware), verilənlər bazaları — performans və nəzarət
tələb edir. C hələ də burada dominantdır, baxmayaraq ki, Rust sürətlə yer
qazanır. Go bulud infrastrukturu və şəbəkə alətlərində bir niş tapıb. **Zig**
daha yaxşı təhlükəsizlik və erqonomika ilə C-yə alternativ təklif edən yeni bir
iştirakçıdır.

**Veb inkişafı** proqram təminatında ən böyük tək sahədir. JavaScript (və
TypeScript) brauzerdə hökmranlıq edir. Server tərəfində seçimlər daha genişdir:
Node.js (JavaScript), Python (Django, Flask), Ruby (Rails), PHP (Laravel), Go,
Java (Spring) və C# (ASP.NET) hamısı rəqabət aparır. HTML və CSS hər bir veb
səhifənin deklarativ onurğa sütunudur.

**Data elmi və maşın öyrənməsi** böyük ölçüdə Python hakimiyyəti altındadır,
statistika üçün R güclü ikinci seçimdir. **Julia**, Python-un istifadə
rahatlığını C-nin sürəti ilə birləşdirməyi hədəfləyən, yüksək performanslı ədədi
hesablamalar üçün dizayn edilmiş daha yeni bir dildir. **MATLAB** mühəndislik və
akademik dairələrdə möhkəmlənib.

**Oyun inkişafı** performans baxımından kritik mühərriklər üçün C++ dilinə
arxalanır, C# isə Unity-də geniş istifadə olunur. Lua da oyun məntiqi üçün
populyar bir skript dilidir.

**Mobil inkişaf** iOS üçün Swift və Android üçün Kotlin istifadə edir,
baxmayaraq ki, çoxplatformalı (cross-platform) freymvorklar (JavaScript ilə
React Native, Dart ilə Flutter) getdikcə populyarlaşır.

**Mikroproqram sistemləri (Embedded systems)** — mikrokontrollerlərin, IoT
cihazlarının və aparat təminatının proqramlaşdırılması — hələ də əsasən C-yə
əsaslanır, Rust və Zig daha təhlükəsiz alternativlər kimi ortaya çıxır.

**Təhsil** giriş kursları üçün Python, daha gənc öyrənənlər üçün Scratch və
proqramlaşdırma dili nəzəriyyəsinə yönəlmiş kurslarda Haskell və ya Scheme kimi
dillərdən istifadə edir.

Mənzərə aydındır: heç bir dil bütün sahələrdə dominant deyil və seçim həmişə
problemin, platformanın, komandanın və ekosistemin funksiyasıdır.

---

## 7. Müasir Dillər İdeyaların Qarışığıdır

Son dil dizaynındakı ən vacib inkişaflardan biri sərt paradiqma sərhədlərinin
dağılmasıdır. Köhnə kateqoriyalar — "bu OOP dilidir", "o funksional dildir" —
getdikcə köhnəlir.

Rust, funksional proqramlaşdırmadan borc alınmış cəbri məlumat növləri və
uyğunluq funksiyaları (pattern matching) olan sistem dilidir. Python-da sinif
əsaslı OOP ilə yanaşı siyahı qavrayışları (list comprehensions), birinci
dərəcəli funksiyalar və dekoratorlar var. JavaScript prototip mirasını,
bağlanmaları (closures) və async/await-i dəstəkləyir. Kotlin OOP və funksional
xüsusiyyətləri rəvan şəkildə qarışdırır. Hətta uzun müddət saf OOP qalası olan
Java-da indi lambdalar, axınlar (streams), möhürlənmiş siniflər (sealed classes)
və uyğunluq funksiyaları var.

Bu yaxınlaşma təsadüfi deyil. Dil dizaynerləri öyrəniblər ki, fərqli
paradiqmalar proqramın fərqli hissələri üçün faydalıdır. Sahənizi obyektlərlə
modelləşdirə, məlumatları funksional kəmərlərlə emal edə və infrastrukturunuzu
deklarativ konfiqurasiya faylları ilə təyin edə bilərsiniz — hamısı eyni
layihədə, bəzən eyni dildə.

Təhlükəsizlik də mərkəzi dizayn qayğısına çevrilib. Tony Hoare-in "milyard
dollarlıq səhvi" adlandırdığı "Null pointer" istisnaları (exceptions), "null"
olma ehtimalını tip sistemində açıq şəkildə göstərən dillər (Kotlin, Rust,
Swift, TypeScript) tərəfindən həll edilir. Bir vaxtlar qabaqcıl və xətaya meylli
mövzu olan eşzamanlılıq async/await, aktorlar, kanallar və strukturlaşdırılmış
eşzamanlılıq modelləri ilə birinci dərəcəli dil xüsusiyyətinə çevrilir.

Alətlər də hər zamankindən daha çox əhəmiyyət kəsb edir. Müasir tərtibatçılar
bir dildən paket meneceri, formatlayıcı, linter, IDE inteqrasiyası üçün dil
serveri və hərtərəfli sənədləşdirmə ilə gəlməsini gözləyirlər. Böyük ideyaları
olan, lakin zəif alətləri olan dil qəbul edilmək üçün mübarizə aparır. Orta
səviyyəli ideyaları, lakin əla alətləri olan dil isə çiçəklənə bilər.

Trend aydındır: ən uğurlu müasir dillər ideoloji cəhətdən saf deyil. Onlar
praqmatikdir, çox paradiqmalıdır və tərtibatçının tam təcrübəsi nəzərə alınmaqla
dizayn edilmişdir.

---

## 8. Dili Necə Seçmək Lazımdır?

Bu qədər seçim varkən, əslində necə seçim etməlisiniz?

**Problem sahəsindən başlayın.** Əgər veb frontend qurursunuzsa, JavaScript və
ya TypeScript demək olar ki, məcburidir. Əgər data təhlili edirsinizsə, Python
praqmatik standartdır. Əgər əməliyyat sistemi komponenti yazırsınızsa, Rust və
ya C doğru ünvandır. Sahə seçimi kəskin şəkildə daraldır.

**Məhdudiyyətləri nəzərə alın.** Real vaxt performansı lazımdırmı? Bu,
proqnozlaşdırıla bilməyən zibil toplama fasilələri olan dilləri aradan qaldırır.
32KB RAM-ı olan mikrokontrollerdə işləməlisinizmi? Bu, əksər dilləri tamamilə
aradan qaldırır. Bir həftəyə hazır olması lazım olan prototip qurursunuz? Zəngin
ekosistemləri və sürətli inkişaf dövrləri olan dillərə üstünlük verin.

**Komandanı amil kimi qəbul edin.** Ən yaxşı dil çox vaxt komandanızın artıq
bildiyi dildir. Dil dəyişdirmək real xərclər gətirir: yenidən təlim, yeni
alətlər, toplanmış təcrübənin itirilməsi. Əgər sıfırdan komanda qurursunuzsa,
işə qəbul bazarını nəzərə alın — böyük icmaları olan dillər üçün işçi tapmaq
daha asandır.

**Ekosistem haqqında düşünün.** Bir dil yalnız onun kitabxanaları, freymvorkları
və icması qədər yaxşıdır. Bir dil seçməzdən əvvəl, xüsusi ehtiyaclarınız üçün
mövcud paketlərə baxın. Yaxşı saxlanılan bir kitabxana aylarla işə qənaət edə
bilər; birinin olmaması dil seçimini dözülməz edə bilər.

**Uzunömürlülüyü nəzərə alın.** Əgər on il ərzində saxlanılması lazım olan bir
şey qurursunuzsa, sabit keçmişi, korporativ və ya icma dəstəyi və aydın
idarəetmə modeli olan bir dil seçin. Həyəcanverici yeni dilləri araşdırmaq
əyləncəlidir, lakin istehsalat sistemləri yetkinlikdən faydalanır.

**Əgər öyrənirsinizsə,** sadəcə nə qurmaq istədiyinizə görə yox, nəyi başa
düşmək istədiyinizə görə seçin. Python sizə problemlər haqqında aydın düşünməyi
öyrədəcək. C kompüterlərin əslində necə işlədiyini öyrədəcək. Haskell hesablama
haqqında düşüncə tərzinizi yenidən quracaq. JavaScript sizi proqram
təminatındakı ən böyük ekosistemə bağlayacaq. Hər dil bir linzadır və hər linza
fərqli bir şeyi ortaya çıxarır.

Tələbələr və öyrənən həvəslilər! Mütləq yuxarıdakı 4 paradiqmadan hamısını
sınayın -- bu sizə proqramlaşdırma haqqında zəngin bir anlayış verəcək və sizi
istənilən bir dilə daha sürətli uyğunlaşmağa hazırlayacaq.

---

## 9. Nəticə: Dillər İdeyaların Daşıyıcılarıdır

Bütün bunlardan götürüləcək tək bir fikir varsa, o da budur ki, proqramlaşdırma
dillərini öyrənmək əslində _ideyaları_ öyrənməkdir.

Öyrəndiyiniz hər bir dil sizə problemləri parçalamağın yeni bir yolunu, nəzərə
alınmalı yeni kompromislər dəstini, mürəkkəbliyi təşkil etmək üçün yeni bir
zehni model öyrədir. Sintaksis — o fiqurlu mötərizələr, nöqtəli vergüllər, açar
sözlər — səthdir. Bu, başlayanda çətin hiss olunan hissədir və əsas anlayışları
mənimsədikdən sonra sadə olduğu üzə çıxan hissədir.

İmperativ idarəetmə axınını, obyekt-yönümlü dizaynı, funksional kompozisiyanı və
deklarativ spesifikasiyanı başa düşən bir proqramçı yeni bir dili günlər yaxud
həftələr ərzində öyrənə bilər, çünki onlar artıq konseptual lüğətə sahibdirlər.
Xüsusi dil bir ləhcəyə (dialektə) çevrilir.

İlk diliniz sizi formalaşdıracaq. O, sizə vərdişlər, instinktlər və (təəssüf ki)
kor nöqtələr verəcək. Bu təbii və qaçılmazdır. Amma onun sizi məhdudlaşdırmasına
icazə verməyin. Ən çox inkişaf edən proqramçılar qəsdən rahatlıq zonalarından
kənara çıxanlardır — illərlə Java-dan sonra Haskell yazanlar, Python
karyerasından sonra Rust-ı sınayanlar, dünyanı tamamilə fərqli bir bucaqdan
görmək üçün Prolog-u araşdıranlar.

Proqramlaşdırma dilləri mənzərəsi genişdir və hələ də genişlənir. Amma bu xaos
deyil. Nümunələr var, tarix var və bunların hamısının bir məntiqi var. Doğru
xəritə ilə bu mənzərədə inamla hərəkət edə bilərsiniz.

İndi isə gedin və kəşf edin. Əgər hansısa mövzu sizi daha dərindən maraqlandırırsa,
mütləq şərh bildirin -- suallarınızı xoşluqla cavablandıraram və əlavə resurslar
təklif edə bilərəm.
