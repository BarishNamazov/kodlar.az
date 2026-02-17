---
title: "Proqramlaşdırma Dillərinin Zehni Xəritəsi"
author: abutalib-barish-namazov
description:
  "Niyə bu qədər çox dil var, onlar düşüncə tərzimizi necə formalaşdırır və
  bunların hamısı bizim üçün nə deməkdir."
date: 2026-02-17
categories: ["Proqram Dilləri"]
resource: true
resource_audiences: ["Proqramçılar", "Universitet Tələbələri"]
---

Dünyada yüzlərlə proqramlaşdırma dili mövcuddur. Əgər nə vaxtsa onların
siyahısına baxıb **niyə** — niyə sadəcə ən yaxşısını seçib yolumuza davam
etmirik — deyə düşünmüsünüzsə, deməli, doğru bir sual verirsiniz. Sən demə,
bunun cavabı proqramlaşdırmanın əslində nə olduğu barədə dərin bir həqiqəti üzə
çıxarır: dil seçimi etmək sadəcə bir maşın üçün təlimat yazmaq deyil, həm də
problemlər haqqında düşüncə tərzi seçməkdir.

Bu resurs həmin mənzərənin xəritəsidir. Bu sahəyə girməzdən əvvəl kiminsə sizə
təqdim etməsini arzulayacağınız bir əl kitabçasıdır. Bütün proqram mühəndisləri
və kompüter elmləri/mühəndisliyi tələbələri bunları yaxşı bilməlidirlər.

## Önsöz

Bu resurs proqramlaşdırma haqqında bilən və ən azı bir dildə yaxşı kod yazmağı
bacaran proqramçılar üçün nəzərdə tutulub. Məsələn, olimpiadaçı məktəblilər,
universitetin 2-ci kurs ya da daha yuxarı kurs tələbələri, proqramlaşdırma ilə
peşəkar səviyyədə məşğul olanlar və sair. Əgər indiyə kimi yalnızca bir-iki dil
istifadə etmisinizsə, onda sizin üçün lap maraqlı olacaq.

Bu xəritəni oxuduqca qarşınıza sizə tanış olmayan yeni terminlər, fərqli düşüncə
tərzləri və paradiqmalar çıxa bilər. Bu zaman ağlınızda çoxlu sualların
yaranması tamamilə normaldır və məhz mənim də gözləntim budur! Sizi bu sualların
ardınca getməyə və mövzular barədə öz müstəqil araşdırmanızı aparmağa təşviq
edirəm.

Əgər hər hansı bir məqam qaranlıq qalarsa, axtardığınız cavabları tapmaqda
çətinlik çəkərsinizsə və ya sadəcə öz fikirlərinizi bölüşmək istəsəniz,
çəkinmədən aşağıdakı şərh bölməsində suallarınızı verə bilərsiniz. Həmçinin,
daha ətraflı və texniki söhbətlər üçün layihənin GitHub müzakirələri
(Discussions) bölməsində yeni bir mövzu aça bilərsiniz.

Bu resursun inkişafı üçün
[fikir bildirən dostlara](https://github.com/BarishNamazov/kodlar.az/discussions/22)
təşəkkür edirəm.

---

## 1. Proqramlaşdırma Dili Əslində Nədir?

Ən sadə təriflə, proqramlaşdırma dili sizin nə etmək istədiyinizlə maşının nə
edə biləcəyi arasındakı körpüdür. Sizin kompüterə etdirmək istədiyiniz bir
tapşırıq var. Kompüter isə yalnız elektrik gərginliklərini və sıfırlarla birləri
(binar siqnalları) başa düşür. Proqramlaşdırma dili məhz bu iki fərqli reallıq
arasında dayanır və sizin fikirlərinizi maşının dilinə tərcümə edir.

Amma bu "tərcüməçi" rolu məsələnin yalnız görünən tərəfidir. Kod əslində eyni
anda üç mühüm iş görür:

- **Təlimatlar verir:** Maşının yerinə yetirməli olduğu addım-addım əmrləri
  siyahıya alır.
- **Abstraksiyalar yaradır:** Mürəkkəb əməliyyatları sadə adlar altında
  birləşdirir və arxada gedən qarışıq detalları bizdən gizlədir.
- **Reallığı modelləşdirir:** Bir proqramçı "istifadəçi", "səbət" və ya "sensor"
  üçün kod yazarkən, əslində maşının daxilində o reallığın miniatür bir modelini
  qurur. Və seçdiyiniz dil o dünyanın necə işləyəcəyini birbaşa formalaşdırır.

Bu təlimatların kompüterə necə çatdırılmasına gəldikdə isə, dillər işləmə
prinsipinə görə əsasən üç kateqoriyaya bölünür:

1. **Kompilyasiya olunan dillər:** Burada yazdığınız kod proqram işə düşməzdən
   _əvvəl_ tamamilə maşın dilinə çevrilir. Bunu bir kitabı əvvəlcədən başqa dilə
   tərcümə edib, hazır və çap olunmuş nəşrini kiməsə verməyə bənzədə bilərsiniz.
   Bu dillər adətən daha sürətli işləyir, çünki kompilyator əvvəlcədən kod
   üzərində dərin optimizasiya apara bilir. Lakin proqramı hər dəfə işə salmaq
   üçün kompilyasiya prosesinin bitməsini gözləmək lazımdır ki, bu da böyük kod
   bazalarında uzun vaxt ala bilər. Belə dillərə C, C++, Rust və Go daxildir.

2. **İnterpretasiya olunan dillər:** Burada isə kod real vaxt rejimində,
   sətir-sətir oxunur və dərhal icra edilir. Bu, sinxron tərcüməçinin canlı
   söhbət zamanı etdiyi işə bənzəyir. Bu dillər proqramı yazarkən və test
   edərkən proqramçıya daha çox çeviklik verir. Təbii ki, əvvəlcədən
   optimizasiya edilmiş ayrıca kompilyasiya mərhələsi olmadığı üçün, bu dillərdə
   yazılan proqramlar kompilyasiya olunmuş proqramlardan adətən daha yavaş
   işləyir. Belə dillərə Python, Ruby və PHP daxildir.

3. **Hibrid dillər:** Bu yanaşmada kod həm interpretasiya olunur, həm də icra
   zamanı əlavə optimizasiya üçün _JIT (Just-In-Time - anında kompilyasiya)_
   kompilyasiyası kimi texnologiyalardan istifadə edilir. Adətən, kod əvvəlcə
   maşın dilindən daha sadə, amma daha primitiv olan "bytecode" adlanan aralıq
   dilə çevrilir. Təsəvvür edin ki, sinxron tərcüməçi sizin tez-tez təkrar
   etdiyiniz cümlələri əzbərləyir və növbəti dəfə onları dərhal (tərcümə
   etmədən) səsləndirərək prosesi xeyli sürətləndirir. Bir çox hallarda bir
   dilin həm tam interpretasiya olunan, həm də hibrid versiyası olur. Bu
   kateqoriyaya bu mühitlər və dillər daxildir: Java (JVM), C# (.NET),
   JavaScript və Python (PyPy kimi alternativ mühitlərdə).

Son olaraq, niyə onlara məhz _"dil"_ dediyimizə diqqət yetirək. Bu, sadəcə
bənzətmə deyil. Təbii dillərdə olduğu kimi, proqramlaşdırma dillərinin də öz
qrammatikası, lüğəti, idiomları və danışanlar icması var. Ən əsası isə, təbii
dillər kimi onlar da düşüncə tərzimizi formalaşdırır. Məsələn,
[Haskell](/blogs/haskell-dili-giris) dilində "düşünən" bir proqramçı eyni
problemə C dilində yazan birindən tamamilə fərqli yanaşacaq. Bu, dillərdən
birinin digərindən daha yaxşı olması demək deyil. Fərqli dillər bizi problemlərə
fərqli bucaqlardan baxmağa təşviq edir.

---

## 2. Niyə Bu Qədər Çox Proqramlaşdırma Dili Var?

Qısa cavab: çünki hər problemi qüsursuz həll edən tək bir "mükəmməl" dil
yoxdur.[^bəlkə süni intellekt ümumi intellektə sahib olanda proqram dili sadəcə
təbii dil olacaq :-)]

Hər bir proqramlaşdırma dili əslində bir sıra güzəştlərin, yəni kompromislərin
toplusudur. Dilin dizaynerləri bir xüsusiyyətdə üstünlük əldə etmək üçün qəsdən
başqa bir xüsusiyyətdən imtina etməli olurlar. Gəlin müxtəlif dillərin
yaranmasına səbəb olan və onları fərqli istiqamətlərə çəkən əsas amillərə baxaq:

- **Performans və Təhlükəsizlik arasındakı balans:** C və C++ kimi dillər sizə
  xam sürət və kompüterin yaddaşı üzərində birbaşa, qeyri-məhdud nəzarət imkanı
  verir. Lakin bu dillər sizin heç vaxt səhv etməyəcəyinizə güvənir. Kiçik bir
  diqqətsizlik proqramın çökməsinə və ya ciddi təhlükəsizlik boşluğuna səbəb ola
  bilər. Digər tərəfdən, Rust kimi müasir dillər eyni yüksək performansı təklif
  edir, lakin kompilyasiya zamanı çox ciddi qaydalar tətbiq edərək yaddaş
  xətalarının qarşısını proqram işə düşmədən əvvəl alır. Təbii ki, bunun da öz
  bədəli var: Rust dilini öyrənmək daha çətindir və kompilyasiya prosesi daha
  uzun çəkir. Əlavə olaraq, Rust dilində qəliz proqramların zehni modeli daha
  mürəkkəbdir.

* **İfadə Asanlığı və Sadəlik arasındakı balans:** Haskell kimi dillər çox güclü
  abstraksiyalar təqdim edir. Olduqca mürəkkəb riyazi və məntiqi fikirləri cəmi
  bir neçə sətir kodla ifadə edə bilərsiniz. Lakin bu yığcamlıq kodun oxunmasını
  çətinləşdirir; başqasının yazdığı kodu anlamaq qəliz bir tənliyi deşifrə
  etməyə bənzəyə bilər. Bunun tam əksi olaraq, Go kimi dillər qəsdən öz
  imkanlarını və qrammatikasını məhdudlaşdırır. Go çox vaxt "darıxdırıcı"
  adlandırılır, çünki orada hər hansı bir işi görməyin adətən yalnız bir sadə
  yolu olur. Lakin bu "darıxdırıcılıq" böyük komandalarda bir üstünlüyə
  çevrilir: istənilən proqramçı başqa bir həmkarının kodunu asanlıqla oxuyub
  başa düşə bilir.

* **Ekosistem və Alətlərin gücü:** Heç bir dil təcrid olunmuş halda böyük uğur
  qazana bilməz. Dillərin dəyəri çox vaxt onların ətrafında yaranan hazır
  kitabxanalar, paket menecerləri, freymvorklar və geniş icma ilə ölçülür.
  Məsələn, Python nə ən sürətli, nə də ən təhlükəsiz dildir. Lakin verilənlər
  elmi və maşın öyrənməsi sahələrindəki ekosistemi o qədər zəngin və yetkindir
  ki, bu işlər üçün başqa dil seçmək çox vaxt "təkəri yenidən kəşf etmək"
  mənasına gəlir. Hətta, C və Assembly kimi dillər də saneyədən və icmadan
  gördükləri dəstək sahəsində uğur qazana biliblər.

Bu texniki səbəblərdən əlavə, dillərin müxtəlifliyində insan amili və tarixi
faktorlar da böyük rol oynayır. Məsələn:

- **Akademik mühit:** Bəzi dillər sırf yeni kompüter elmləri ideyalarını
  sınaqdan keçirmək üçün universitet laboratoriyalarında doğulub. Lisp və
  Haskell buna gözəl nümunədir.
- **Korporativ ehtiyaclar:** Nəhəng şirkətlər öz daxili biznes və miqyaslama
  problemlərini həll etmək üçün yeni dillər yaradırlar. Java Sun
  Microsystems-də, C# Microsoft-da, Go isə Google-da məhz bu cür ehtiyaclardan
  yaranıb. Bəzən isə hansısa şirkət bir dili öz əhatəsinə alır, məsələn, Jane
  Street şirkəti OCaml dilini istifadə etdikləri üçün onun inkişafına böyük
  töhfələr verir.
- **Platforma məhdudiyyətləri:** Objective-C və sonradan Swift uzun illər yalnız
  Apple ekosisteminin məhsulları üçün standart olub. Veb səhifələrə
  interaktivlik qatmaq üçün yaradılan JavaScript isə cəmi 10 gün ərzində
  yazılmışdı. Onun bu cür tələsik yaranmasının izləri bu gün də dilin bəzi
  qəribəliklərində özünü göstərir.

Nəhayət, **tarixi miras** amilini unutmaq olmaz. Dünyanın qlobal maliyyə və bank
infrastrukturunun böyük bir hissəsi hələ də 1959-cu ildə yaradılmış COBOL
dilində işləyir. COBOL müasir və ya çox sevilən dil olduğu üçün deyil,
onilliklər boyu sınaqdan çıxmış milyonlarla sətirlik işlək kodu yenidən başqa
dildə yazmaq həddindən artıq bahalı, eyni zamanda riskli olduğu üçün hələ də
yaşayır.

Nəticə etibarilə, "yeganə mükəmməl dil" anlayışı sadəcə bir mifdir. Bütün
problemləri tək bir dillə həll etməyə çalışmaq, "niyə həm çəkicə, həm də
vintaçana ehtiyacımız var?" deyə soruşmağa bənzəyir. Onların hərəsi fərqli bir
məqsəd üçün dizayn edilib. Seçim isə çox vaxt qarşınızdakı problemdən,
komandanızın təcrübəsindən və mövcud ekosistemdən asılıdır.

Hazırkı ekosistemlər ona imkan verir ki, demək olar ki, istənilən proqramı
istənilən məşhur proqram dilində yaza biləsiniz. Amma bu zaman siz də yuxarıda
danışdığımız kompromisləri nəzərə almalısınız.

---

## 3. Qısa Tarixçə: Problemlər və Həllər

Proqramlaşdırma dillərinin tarixini sadəcə təqvimdəki illər və adlar siyahısı
kimi öyrənmək darıxdırıcıdır. Əvəzində, bu tarixə bir "zəncirvari problemlər və
insanların o problemləri həll etmək üçün tapdığı çıxış yolları" kimi baxmaq ən
doğrusudur. Hər yeni dil özündən əvvəlkinin yaratdığı bir dərdi həll etmək üçün
yaranıb.

### Maşınla Birbaşa Danışmaq

Başlanğıcda heç bir "dil" yox idi — yalnız nəhəng, otaq boyda fiziki qurğular
var idi. İlk proqramçılar maşınlarla **perfokartlar** vasitəsilə ünsiyyət
qururdular.

<Image src="https://static.vecteezy.com/system/resources/previews/023/583/060/original/pure-ibm-punch-card-for-electronic-calculated-data-processing-machines-retro-punchcard-for-input-and-storage-in-automated-technology-information-processing-systems-illustration-isolated-vector.jpg" alt="perfokart" />

Təsəvvür edin: üzərində dəqiq riyazi hesablama ilə deşiklər açılmış karton
parçaları. Hər bir deşik (və ya deşiyin olmaması) bir məlumat bitini təmsil
edirdi. O dövrdə proqramlaşdırma, edəcəyiniz əməliyyatları əvvəlcə kağız
üzərində diqqətlə planlaşdırmaq, xüsusi aparatla onları kartonlara deşərək
kodlaşdırmaq, sonra bu ağır kart dəstəsini maşına daxil edib nəticəni gözləmək
demək idi. Bir dənə də olsun səhv etsəniz, həmin kartı atıb yenisini deşməli
idiniz. Bu, tam mənasıyla fiziki, əllə toxunula bilən və çox zəhmət tələb edən
bir proses idi.

Zamanla perfokartlar yerini **maşın koduna** — prosessorun birbaşa anladığı xam
ikili təlimatlara (sıfırlar və birlər) verdi. Maşın kodunu klaviatura ilə yazmaq
kart deşməkdən daha sürətli olsa da, insan beyni üçün çox yorucu idi. Hər bir
əmr sadəcə bir ədəd idi. Dəyişən adları, funksiyalar və ya işinizi
asanlaşdıracaq heç bir anlayış yox idi. Proqramçı məlumatın saxlanıldığı yaddaş
ünvanlarını (uzun rəqəmləri) əzbər bilməli idi.

Buna görə də **Assembli** dili yaradıldı və bu, proqramlaşdırmada ilk böyük
qurtuluş, ilk abstraksiya oldu. Proqramçılar artıq `10110000 01100001` kimi
anlaşılamayan rəqəmlər sətiri yazmaq əvəzinə, `MOV AL, 61h` (məlumatı filan yerə
köçür) yaza bilərdilər. Bu, hələ də prosessorla birbaşa, çox aşağı səviyyədə
danışmaq idi, lakin heç olmasa insan dilinə bənzəyirdi. Assembli işləri xeyli
sürətləndirsə də, böyük bir qüsuru var idi: o, birbaşa prosessorun növünə bağlı
idi. Bir marka kompüter üçün yazılmış assembli kodu, başqa bir kompüterdə
qətiyyən işləmirdi.

### Yüksək Səviyyəli Dillərə Keçid

1950-ci illərdə inqilabi bir sual ortaya atıldı: bəs əgər biz addım-addım maşına
nə edəcəyini deyil, sadəcə nə hesablamaq _istədiyimizi_ riyazi tənliklər kimi
yaza bilsək və xüsusi bir proqram — yəni **kompilyator** — bunu bizim əvəzimizə
o qəliz maşın koduna tərcümə etsə necə olar?

Beləliklə, **FORTRAN** (1957) yarandı. Elmi və riyazi hesablamalar üçün qurulmuş
bu dil böyük səs-küyə səbəb oldu. Mühəndislər artıq maşın təlimatları deyil,
məktəbdə öyrəndikləri cəbrə bənzəyən formullar yazırdılar. Başlanğıcda bir çox
təcrübəli proqramçı buna şübhə ilə yanaşırdı; onlar inanırdılar ki, heç bir
avtomatik kompilyator insanın əllə yazdığı assembli kodu qədər sürətli işləyə
bilməz. Lakin onlar yanılırdılar, kompilyatorlar o qədər sürətlə inkişaf etdi
ki, aradakı fərq tezliklə əriyib yox oldu.

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

**COBOL** (1959) isə tamam fərqli bir sahəni hədəfə almışdı: biznes
məlumatlarının emalı. FORTRAN rəqəmlər və mürəkkəb tənliklər üçün idisə, COBOL
bank hesabları, maaş cədvəlləri və sənədləri idarə etmək üçün yaradılmışdı. Onun
qrammatikası qəsdən genişləndirilmiş və ingilis dilinə bənzədilmişdi. Məqsəd o
idi ki, yazılan biznes məntiqini təkcə mühəndislər deyil, həm də şirkət
menecerləri oxuyub anlaya bilsinlər. Bu gün dünyanın maliyyə sisteminin böyük
hissəsi hələ də bu dildən asılıdır.

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

**ALGOL** (1958–1960) bəlkə də adını çox adamın eşitmədiyi, lakin təsiri nəhəng
olan bir dildir. O, bu gün hər dildə istifadə etdiyimiz "strukturlaşdırılmış
proqramlaşdırma" anlayışlarını -- kod bloklarını və iç-içə keçmiş idarəetmə
strukturlarını gətirdi. Ondan sonra gələn demək olar ki, bütün populyar dillər
ALGOL-un qoyduğu bu təməl üzərində ucalıb.

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

**Lisp** (1958) isə bəlkə də dövrünün ən qeyri-adi, fəlsəfi yolla gedən dili
idi. Bu dilin ən məşhur xüsusiyyəti "kod və məlumatın eyni şey olması"
fəlsəfəsidir. Bəs bu nə deməkdir? Əksər dillərdə yazdığınız kod quruluşca
məlumatdan (məsələn, rəqəmlər və ya mətn siyahılarından) tamamilə fərqlənir.
Lisp-də isə həm məlumatlar, həm də proqramın öz kodu eyni formatda — mötərizələr
içərisindəki siyahılar kimi yazılır. Məhz bu oxşarlıq sayəsində, bir Lisp
proqramı başqa bir Lisp proqramını çox asanlıqla oxuya, analiz edə, dəyişdirə və
işlədiyi yerdəcə yeni kod yaza bilər (sanki adi bir rəqəm siyahısını redaktə
edirmiş kimi).

Kompüterə öz kodunu dəyişdirmək və "düşünmək" imkanı verən bu misilsiz çeviklik
Lisp-i onilliklər boyu süni intellekt tədqiqatlarının bir nömrəli dilinə
çevirmişdi. Lisp həmçinin avtomatik yaddaş təmizlənməsi kimi qabaqcıl ideyaları
sənayeyə gətirən ilk dildir.

Uzun illər çox universitet, MIT daxil olmaqla, Lisp-i kompüter elmləri
tədrisində ilk və əsas dil kimi istifadə edirdi. Hazırda bu dəyişsə də, Lisp-in
təsiri və mədəniyyəti bir çox dildə, xüsusən də Clojure və Racket kimi müasir
Lisp dialektlərində yaşamağa davam edir.

```scheme
(defun factorial (n)
  (if (<= n 1)
      1
      (* n (factorial (- n 1)))))

(mapcar #'factorial '(1 2 3 4 5))
```

Lisp-in yaradıcılarından bəziləri məşhur _Scheme (1975)_ adlı dili yaratdılar və
1984-cü ildə yayımlanan
[SICP (Structure and Interpretation of Computer Programs)](https://mitpress.mit.edu/sites/default/files/sicp/index.html)
kitabında onu kompüter elmləri tədrisində standart dil kimi təqdim etdilər. Bu
kitabı oxumaq, məncə, hər proqramçı üçün bir növ yeni dünyaya açılan qapını
açmaq kimidir. SICP proqramlaşdırmanın əsas konseptlərini, o cümlədən aşağıda
haqqında danışacağımız paradiqmaların bir neçəsini, Scheme dilində çox sadə və
eleqant nümunələrlə izah edir. Kitabın müəllifləri hələ də MIT-də dərs keçirlər
və onları hər həftə işlədiyim mərtəbədə görürəm.

### Struktur və Nizam-intizam

1960-cı illərin sonlarına doğru proqramlar o qədər böyüdü və mürəkkəbləşdi ki,
inkişaf prosesi xaosla nəticələndi. Tarixə "proqram təminatı böhranı" kimi düşən
bu dövrdə layihələr gecikir, büdcəni aşır və xətalarla dolu olurdu. Səbəb sadə
idi: o dövrün dilləri kodu istənilən yerdən başqa bir yerə tullamağa imkan verən
xüsusi əmrlərə sahib idi ki, bu da izlənməsi mümkünsüz olan, bir-birinə dolanmış
"spagetti kodu" yaradırdı.

Bunun qarşısını almaq üçün proqramların yuxarıdan aşağıya, səliqəli şəkildə
axmasını tələb edən nizam-intizamlı hərəkat başladı. Bu yeni məntiqi tələbələrə
öyrətmək üçün **Pascal** (1970) dili yaradıldı və uzun illər universitetlərdə
standart tədris dili kimi istifadə olundu.

Amma dünyanı əsl mənada dəyişən dil **C** (1972) oldu. Bell Labs-da yaradılan C
dili, əməliyyat sistemlərini (xüsusən Unix-i) yazmaq üçün dizayn edilmişdi. C
qeyri-adi bir balans tapmışdı: o, mühəndisə yüksək səviyyəli dilin aydınlığını,
eyni zamanda Assembli dilinin performansı və cihaz üzərindəki qeyri-məhdud
nəzarətini verirdi. C yaddaş xətalarını bağışlamayan, olduqca təhlükəsizsiz bir
dil idi. Lakin o qədər sürətli və çevik idi ki, onilliklər boyu dünyanı idarə
etdi. C++ və Java başda olmaqla, bu gün istifadə etdiyimiz bir çox dilin
qrammatikası birbaşa C-dən miras qalıb.

### Obyektlərin Yüksəlişi

1980-ci illərdə kod bazaları daha da böyüdükcə, məlumatları təşkil etmək üçün
yeni bir fəlsəfə meydana çıxdı: **Obyekt-yönümlü proqramlaşdırma (OOP)**.

Əvvəllər proqramçılar məlumatları (məsələn, bank hesabının balansı) ayrı, o
məlumatları dəyişən funksiyaları (pulu artırıb-azaltmaq) ayrı yazırdılar. Sistem
böyüdükcə bu dağınıqlıq işləri çətinləşdirirdi. OOP ilə proqramçılar fərqli cür
düşünməyə başladılar: "Sistemimiz hansı obyektlərdən ibarətdir?" İndi həm
istifadəçinin məlumatları, həm də edə biləcəyi fəaliyyətlər tək bir mərkəzdə —
"Obyekt" daxilində qablaşdırılırdı.

Bu fəlsəfəni tam mənasıyla tətbiq edən ilk dil **Smalltalk** (1972–1980) olsa
da, bu inqilabı kütləviləşdirən **C++** (1979) oldu. O, C-nin nəzarətçi və
sürətli təbiətini OOP-nin mütəşəkkil quruluşu ilə birləşdirdi.

Sonra isə **Java** (1995) səhnəyə çıxdı. O, işləri daha da asanlaşdırdı:
proqramçını çoxlu dərdlərdən qurtardı (məsələn, yaddaş avtomatik təmizlənir) və
"bir dəfə yaz, hər yerdə işlət" şüarı ilə çıxış etdi. Java dilində yazılan
proqram birbaşa maşın koduna deyil, xüsusi bir aralıq koda çevrilirdi --
yuxarıda danışdığımız hibrid versiya kimi. Bu sistem sayəsində bir dəfə yazılmış
kod istənilən əməliyyat sistemində problemsiz işləyə bilirdi. Qısa müddətdə
böyük korporasiyaların sevimlisi olan Java-ya rəqib olaraq Microsoft tərəfindən
**C#** (2000) yaradıldı.

### İnternet Hər Şeyi Dəyişir

1990-cı illərin ortalarında İnternetin və veb brauzerlərin partlayışı yeni bir
ehtiyac yaratdı: səhifələri hərəkətli və interaktiv etmək. Səhifə yükləndikdən
sonra hərəkət edən qrafiklər, kliklənən düymələr yaratmaq üçün skript dilləri
populyarlaşdı.

Ən məşhur hekayələrdən biri **JavaScript**-in (1995) yaranmasıdır. O, brauzerdə
işləyən bəsit animasiyalar üçün cəmi on gün ərzində, çox tələsik yazılmışdı. Heç
kim onun bu qədər böyüyəcəyini gözləmirdi. Lakin brauzerlərə başqa dil əlavə
edilmədiyi üçün JavaScript bütün vebin tək ortaq dili inhisarını ələ keçirdi.
(Bu gün böyük layihələrdə JavaScript-in buraxdığı struktur boşluqlarını bağlamaq
üçün onun təkmilləşdirilmiş versiyası olan **TypeScript** istifadə edilir).

Eyni dövrdə **Python** (1991) da səssizcə böyüyürdü. Onun əsas məqsədi
oxunaqlılıq və kodun təmizliyi idi; o qədər aydın dili var idi ki, hər kəs
asanlıqla öyrənə bilərdi. İllər sonra, xüsusən 2010-cu illərdə məlumat elmi və
süni intellekt dalğası gəldikdə, Python özünün zəngin riyazi kitabxanaları
sayəsində bu sahənin mütləq hakiminə çevrildi.

İnternetin ilk vaxtlarında server tərəfini ayaqda tutan **PHP**, **Ruby** və
**Perl** kimi dillər də bu dövrün vacib aktyorlarından oldu. Ruby zərif veb
inkişafında (Rails vasitəsilə), Perl mətn emalı və sistem inzibatçılığında, PHP
isə WordPress və Facebook-un ilk versiyaları daxil olmaqla, erkən dinamik vebin
arxasındakı işçi qüvvəsi kimi idilər.

### Müasir Dövr: Təhlükəsizlik, Sürət və Eşzamanlılıq

Bu gün prosessorların tək bir nüvəsinin sürəti əvvəlki kimi kəskin artmır,
əvəzində kompüterlərin nüvə sayı çoxalır. Buna görə də müasir dillər çoxnüvəli
mühitlərdə eyni anda bir neçə işi təhlükəsiz görməyə (eşzamanlılıq) və yaddaş
təhlükəsizliyinə köklənib.

- **Rust** (2015) yaddaş idarəetməsi probleminə inqilabi bir yanaşma gətirdi. O,
  arxa planda işləyən və sistemi yavaşladan yaddaş təmizləyicisinə ehtiyac
  duymadan, sırf kompilyasiya zamanı sərt qaydalarla yaddaş xətalarının
  qarşısını alır. C qədər sürətli, amma ondan dəfələrlə təhlükəsizdir.

* **Go** (2009) Google tərəfindən yaradıldı. Onun məqsədi xüsusilə serverlərdə
  milyonlarla sorğunu eyni anda, çətinlik çəkmədən (eşzamanlı) idarə etmək və
  böyük komandalarda proqramçıların işini maksimal dərəcədə sadələşdirməkdir.

* Mobil inkişafda köhnə və ağır dillər yerini müasir, təmiz və sürətli dillərə
  buraxdı: Apple ekosistemində **Swift**, Android dünyasında isə **Kotlin**
  standartlaşdı.

Gördüyünüz kimi, proqramlaşdırma dillərinin tarixi hələ bitməyib. Yeni
problemlər yarandıqca, onları fərqli yollarla həll edəcək yeni alətlər və
məntiqi yanaşmalar kəşf edilməyə davam edəcək.

---

## 4. Proqramlaşdırma Paradiqmaları: Kod Haqqında Necə Düşünürük?

"Paradiqma" sözünün mənası "bir şeyə yanaşma tərzi" deməkdir. Təsəvvür edin ki,
bir ev tikmək istəyirsiniz. Bir usta sizə deyir ki, "kərpicləri tək-tək üst-üstə
düzüb divar hördükdən sonra damı vur" (bu bir yanaşmadır). Digər usta isə deyir
ki, "zavodda əvvəlcədən hazırlanmış bütöv otaqları kranla gətirib bir-birinə
bağla" (bu isə fərqli bir yanaşmadır). Hər ikisinin nəticəsində ortaya bir ev
çıxır, amma iş prosesi, istifadə olunan alətlər və sizin düşüncə tərziniz
tamamilə fərqli olur.

Proqramlaşdırmada da paradiqma sadəcə dilin texniki bir xüsusiyyəti deyil; o,
proqramçıya kodu necə təşkil etməyi diktə edən bir fəlsəfə, bir zehni modeldir.
Müasir dillərin əksəriyyəti bir neçə paradiqmanı eyni anda dəstəkləyir, lakin
onların hər birinin kökündə yatan məntiqi ayrı-ayrılıqda başa düşmək sizə
istənilən dildə daha yaxşı kod yazmağa kömək edəcək.

### 4.1 İmperativ və Prosedural Proqramlaşdırma

Bu, hamımız üçün ən intuitiv və təbii yanaşmadır, çünki gündəlik həyatda kimsəyə
yol salarkən və ya təlimat verərkən məhz bu üsuldan istifadə edirik: _Bunu et.
Sonra onu et. Əgər bu şərt ödənirsə, fərqli bir şey et. Bitənə qədər təkrarla._

**İmperativ proqramlaşdırma** proqramın mövcud "vəziyyətini" dəyişdirən əmrlər
ardıcıllığıdır. (Proqramlaşdırmada **vəziyyət** dedikdə, o anda yaddaşda
saxlanılan bütün məlumatlar, dəyişənlərin o anki dəyərləri nəzərdə tutulur).
Kompüterə addım-addım bu vəziyyəti necə dəyişəcəyini deyirsiniz.

**Prosedural proqramlaşdırma** isə bu addımlar yığınına bir az nizam qatır: o,
uzun təlimatları yenidən istifadə edilə bilən kod bloklarına — _funksiyalara_ və
ya _prosedurlara_ bölür. C, Pascal və qismən də Go bu üslubun bariz
nümunələridir. Bu üslubda yazılan kod bir resept kimi oxunur.

Bu modelin ən böyük gücü onun sadəliyi və birbaşalığındadır. Zəifliyi isə
ondadır ki, proqramlar böyüdükcə ortalıqda çoxlu sayda dəyişən məlumat
(vəziyyət) yaranır. Eyni məlumat fərqli funksiyalar tərəfindən fərqli vaxtlarda
dəyişdirildikdə, xətaların haradan qaynaqlandığını tapmaq getdikcə çətinləşir.

### 4.2 Obyekt-yönümlü Proqramlaşdırma (OOP)

OOP fərqli bir sualdan yola çıxır: "Kod hansı ardıcıllıqla işləməlidir?" demək
əvəzinə, "Sistemimiz hansı varlıqlardan, yəni obyektlərdən ibarətdir?" deyə
soruşur. Burada məqsəd məlumatları (xüsusiyyətləri) və o məlumatlar üzərində
əməliyyat aparan davranışları (metodları) müstəqil **obyektlər** daxilində
birləşdirməkdir.

Bunu anlamaq üçün OOP-nin üç əsas sütununa baxaq:

- **Enkapsulyasiya (Gizlətmə):** Bir obyektin daxili işləməsinin kənar kodlardan
  gizlədilməsidir. Təsəvvür edin ki, avtomobil sürürsünüz. Siz sadəcə qaz
  pedalına basırsınız (bu sizin istifadə etdiyiniz interfeysdir), amma içəridə
  motorun necə işlədiyini, yanacağın necə yandığını bilmək məcburiyyətində
  deyilsiniz. Bu detallar sizdən "enkapsulyasiya" olunub.
- **Mirasalma (Inheritance):** Bir obyektin başqa bir obyektin xüsusiyyətlərini
  özünə götürə bilməsidir. Məsələn, bir `BankHesabı` obyektiniz var. Siz yeni
  bir `KreditHesabı` yaradarkən hər şeyi sıfırdan yazmırsınız; sadəcə adi bank
  hesabının xüsusiyyətlərini "miras alıb", üzərinə faiz hesablama məntiqini
  əlavə edirsiniz.
- **Polimorfizm (Çoxformluluq):** Eyni əmrin fərqli obyektlər tərəfindən
  özlərinə məxsus şəkildə icra edilməsidir. Məsələn, itə və pişiyə eyni "Səs
  ver" əmrini versəniz, it hürəcək, pişik isə miyovlayacaq. Əmr eynidir, amma
  nəticə obyektin kimliyindən asılı olaraq dəyişir.

OOP 1980-ci illərin sonlarından 2000-ci illərə qədər mütləq dominant paradiqma
oldu, çünki bu model real dünyanı kodda təsvir etmək üçün çox təbiidir. Lakin bu
gün həddindən artıq dərinləşmiş mirasalma zəncirləri kodu kövrəkləşdirdiyi üçün
sənaye sırf OOP-dən daha qarışıq dizayn nümunələrinə doğru meyl edir.

### 4.3 Funksional Proqramlaşdırma

Funksional proqramlaşdırma tamamilə fərqli və daha sərt bir fəlsəfəyə əsaslanır:
bəs əgər proqramın vəziyyətini (state) dəyişdirmək qəti qadağan olsaydı necə
olardı?

Bu paradiqmanı anlamaq üçün iki vacib anlayışı bilmək lazımdır:

- **Dəyişməzlik (Immutability):** Saf funksional üslubda məlumatlar dəyişməzdir.
  Bir ədəd, siyahı və ya obyekt yaradıldıqdan sonra onun üzərində heç bir
  dəyişiklik edilə bilməz. Əgər 5 elementli siyahıya yeni bir element əlavə
  etmək istəyirsinizsə, köhnə siyahını dəyişdirmirsiniz; əvəzində içində 6
  element olan _tamamilə yeni_ bir siyahı yaradırsınız.
- **Birinci dərəcəli vətəndaşlar (First-class citizens):** Bu termin
  proqramlaşdırmada bir az qəribə səslənə bilər. Bu o deməkdir ki, funksiyalara
  xüsusi bir rəftar edilmir; onlar da eynilə sıradan ədədlər və ya mətnlər
  kimidir. Siz bir funksiyanı başqa bir dəyişənə mənimsədə, başqa bir funksiyaya
  arqument kimi göndərə və ya nəticə kimi geri qaytara bilərsiniz.

Bu yanaşmanın faydaları misilsizdir. Məlumatlar heç vaxt dəyişdirilmədiyi üçün
proqramın uzaq künclərində gizlənən təsadüfi xətalar (bunlara **yan təsirlər**
və ya _side effects_ deyilir) yox olur. Ən əsası isə, eyni anda minlərlə paralel
əməliyyat aparmaq tamamilə təhlükəsiz hala gəlir, çünki heç bir əməliyyat
digərinin məlumatını korlaya bilməz.

Haskell və Lisp kimi klassik funksional dillər uzun illər akademik mühitə qapalı
qalsa da, bu gün çoxnüvəli prosessorların yüksəlişi ilə demək olar ki, hər bir
populyar dil (Java, Python, C++, JavaScript) funksional proqramlaşdırmanın
gücünü özünə inteqrasiya edib.

### 4.4 Deklarativ Proqramlaşdırma

Deklarativ proqramlaşdırma insan və kompüter arasındakı ənənəvi rolları tərsinə
çevirir. Bir işin addım-addım _necə_ yerinə yetiriləcəyini kompüterə diktə etmək
əvəzinə, siz yalnız yekunda _nə_ istədiyinizi təsvir edirsiniz. Sistem isə
məqsədə necə çatacağını, öz daxilindəki işləri necə quracağını özü həll edir.

Məlumat bazaları (database) üçün istifadə edilən **SQL** ən geniş yayılmış
deklarativ dildir. Siz verilənlər bazasına
`SELECT name FROM users WHERE age > 30` (Yaşı 30-dan böyük olan istifadəçilərin
adını seç) yazanda, kompüterə cədvəlin sətirlərini tək-tək necə axtaracağını və
ya yaddaşı necə idarə edəcəyini demirsiniz. Siz sadəcə nəticəni tələb edirsiniz.
Verilənlər bazası mühərriki ən sürətli yolu tapmaq işini öz üzərinə götürür.

Veb səhifələrin strukturunu və görünüşünü quran HTML və CSS də deklarativ
dillərdir. Siz HTML-də ekrana bir düymənin piksellərlə necə çəkiləcəyini
kodlamırsınız; sadəcə "burada bir düymə olsun" deyirsiniz, qalanını veb brauzer
həll edir.

Deklarativ yanaşma xüsusilə problem sahəsi dar və sərhədləri bəlli olan hallarda
çox güclüdür. Lakin işin incəliklərinə və tam olaraq necə baş verdiyinə birbaşa
nəzarət tələb olunduqda, bu yanaşma öz gücünü itirir və yenidən imperativ
dillərə ehtiyac yaranır.

---

## 5. Vizual və Qrafik Proqramlaşdırma

Bütün proqramlaşdırma mətn yazmaqdan ibarət deyil. Bəzən kod yazmaq kərpiclərdən
və ya leqolardan nəsə qurmağa bənzəyə bilər. Əhəmiyyətli və sürətlə böyüyən bir
alətlər ailəsi var ki, onlar insanlara mətn əvəzinə **vizual elementləri
manipulyasiya edərək** — rəngli blokları birləşdirərək, oxlarla axın diaqramları
çəkərək və ya qrafik üzərindəki qutuları (düyünləri) bir-birinə bağlayaraq
proqramlaşdırmağa imkan verir.

**Scratch** və **Blockly** kimi **blok əsaslı dillər** xüsusilə uşaqlara və bu
sahəyə yeni başlayanlara proqramlaşdırmanın təməl anlayışlarını öyrətmək üçün
dizayn edilib. Burada klaviatura ilə qəliz qrammatika (sintaksis) yazmaq və ya
kiçik bir hərf səhvinə görə saatlarla xəta axtarmaq dərdi yoxdur. Əvəzində,
dövrləri, şərtləri və dəyişənləri təmsil edən rəngli, pazl parçalarına bənzəyən
blokları sadəcə sürüşdürüb bir-birinə keçirirsiniz. Bu yanaşma öyrənmə baryerini
kəskin şəkildə aşağı salır və milyonlarla gənci proqramlaşdırma məntiqi
(hesablama düşüncəsi) ilə əyləncəli şəkildə tanış edir.

Lakin vizual proqramlaşdırma sadəcə uşaqlar üçün deyil. **Düyün əsaslı
(node-based) sistemlər** yaradıcı və yüksək texniki sahələrdə peşəkarlar
tərəfindən geniş istifadə olunur. Məsələn, **Unreal Engine-in Blueprints**
sistemi oyun dizaynerlərinə tək bir sətir belə C++ kodu yazmadan, sadəcə
ekrandakı məntiq qutularını (düyünləri) oxlarla bir-birinə bağlayaraq mürəkkəb
oyun mexanikaları qurmağa imkan verir. **Unity-nin Vizual Skriptləməsi** də
oxşar məntiqə əsaslanır. Elm və mühəndislik dünyasında isə **LabVIEW** kimi
alətlər cihazları və sınaq sistemlərini idarə etmək üçün məlumat axını
diaqramlarından istifadə edir.

Vizual proqramlaşdırmanın üstünlükləri göz qabağındadır: vizual olaraq hər kəs
üçün anlaşılandır, ideyaları sürətlə prototipə çevirməyə imkan verir və
proseslərin (xüsusən məlumatın haradan gəlib hara getdiyinin) gözlə rahat
görülməsini təmin edir. Lakin onun da çox aydın məhdudiyyətləri var:

- **İdarəolunmazlıq:** Proqramlar böyüdükcə, ekrandakı o gözəl oxlar və qutular
  idarəolunmaz bir tora çevrilir -- bu, mətn əsaslı "spagetti kodun" vizual
  versiyasıdır.
- **Abstraksiya çətinliyi:** Vizual sistemlərdə mürəkkəb riyazi və ya məntiqi
  abstraksiyalar qurmaq mətnə nisbətən daha çətindir.
- **Komanda işi və izləmə:** Komanda işində zamanla edilən dəyişiklikləri
  izləmək (versiya nəzarəti) problem yaradır, çünki "mənbə kodu" sadə,
  sətir-sətir müqayisə edilə bilən mətn deyil, qəliz bir qrafik faylıdır.

Müəyyən bir böyüklükdən və mürəkkəblikdən sonra mətn, şəkillərdən daha yığcam və
səmərəli bir ünsiyyət vasitəsinə çevrilir. Xülasə, vizual proqramlaşdırma
ənənəvi mətn əsaslı proqramlaşdırmanın tam əvəzedicisi deyil. Lakin o, çox güclü
bir köməkçi alətdir və düzgün sahədə, düzgün məqsəd üçün (məsələn, oyun dizaynı,
təhsil və ya dizaynerlər üçün sürətli avtomatlaşdırma) işi görmək üçün ən ideal
seçim ola bilər.

---

## 6. Dillər Bu Gün Nə Üçün İstifadə Olunur?

Bütün bu tarixi səyahət və nəzəri biliklər yekunda bizi çox praktik bir suala
gətirib çıxarır: bəs real dünyada kim nəyi və niyə istifadə edir?

Sahələrə görə dillərin necə bölüşdürüldüyünə nəzər salaq:

- **Sistem proqramlaşdırması:** Bu sahə kompüterin "ürəyi" ilə işləməyi tələb
  edir -- əməliyyat sistemləri, cihaz sürücüləri və məlumat bazası mühərrikləri.
  Burada ən vacib amil yüksək performans və təchizat üzərində mütləq nəzarətdir.
  **C** və **C++** onilliklərdir bu sahənin hakimidir. Lakin son illərdə
  **Rust** proqramın çökməsinin qarşısını alan yaddaş təhlükəsizliyi üstünlüyü
  ilə bu taxtı güclü şəkildə sarsıdır. **Go** bulud infrastrukturu alətlərində
  özünə möhkəm yer edib. **Zig** isə C-yə daha müasir və təhlükəsiz alternativ
  kimi diqqət çəkən yeni bir dildir.

* **Veb inkişafı:** Bu, proqram təminatı sənayesinin ən böyük bazarıdır və iki
  əsas hissəyə bölünür. İstifadəçinin birbaşa gördüyü və toxunduğu tərəfdə (yəni
  brauzerdə) **JavaScript** və onun daha nizamlı versiyası olan **TypeScript**
  birmənalı hər yerdə işlənilir. Səhifənin skeletini və dizaynını isə **HTML**
  və **CSS** təşkil edir. Məlumatların işləndiyi server tərəfində isə böyük bir
  rəqabət var: **Python** (Django, Flask freymvorkları), **PHP** (Laravel),
  **Java** (Spring), **C#** (.NET), **Ruby** (Rails), **Go** və **Node.js**
  ehtiyacdan asılı olaraq geniş istifadə olunur.

* **Məlumat elmi və Maşın öyrənməsi:** Süni intellektin və böyük məlumat
  analizinin bugünkü kralı şübhəsiz ki, **Python** dilidir. Onun öyrənilməsinin
  asanlığı və zəngin riyazi kitabxanaları onu bu sahədə əvəzedilməz edir.
  Statistik analizlər üçün **R** dili güclü ikinci seçimdir. **Julia** isə
  Python-un istifadə rahatlığını C-nin sürəti ilə birləşdirmək məqsədilə
  yaradılmış və xüsusilə ağır elmi hesablamalarda parlayan daha yeni bir dildir.
  Akademik və mühəndislik dairələrində isə **MATLAB** hələ də öz mövqeyini
  qoruyur.

* **Oyun inkişafı:** Video oyunlar prosessorları ən çox yoran proqramlardır.
  Buna görə də yüksək performans tələb edən ağır oyun mühərrikləri (məsələn,
  Unreal Engine) üçün **C++** sənaye standartıdır. Daha müstəqil oyunlar və
  mobil oyunlar üçün isə Unity mühərriki və **C#** dili çox məşhurdur. Bəzən
  oyunun əsas mühərriki C++ ilə yazılır, daxilindəki sadə məntiq və ssenarilər
  isə **Lua** kimi yüngül skript dilləri ilə idarə olunur.

* **Mobil inkişaf:** Birbaşa əməliyyat sisteminə xas tətbiqlər yazmaq
  istəyirsinizsə, Apple cihazları (iOS) üçün **Swift**, Android cihazları üçün
  isə **Kotlin** öyrənməlisiniz. Lakin hər iki platforma üçün ayrı-ayrı kod
  yazmaq əvəzinə tək bir kodla hər ikisində işləyən tətbiqlər yaratmaq getdikcə
  populyarlaşır. Bunun üçün JavaScript əsaslı **React Native** və Dart dilini
  istifadə edən **Flutter** ən çox seçilən alətlərdir.

* **Mikrokontrollerlər və Ağıllı Cihazlar:** Ekranı olmayan, lakin içərisində
  "ağıl" olan cihazları təsəvvür edin: ağıllı soyuducular, avtomobillərin beyni,
  və ya ürək kardiostimulyatorları. Çox məhdud yaddaşa və enerjiyə sahib bu
  cihazları proqramlaşdırmaq üçün hələ də **C** və qismən **C++** ən güclü
  seçimdir. Lakin burada da **Rust** və **Zig** daha təhlükəsiz alternativlər
  kimi yavaş-yavaş irəliləyir.

* **Təhsil və Akademik Tədqiqatlar:** Proqramlaşdırmaya yeni başlayanlara
  məntiqi öyrətmək üçün ən çox **Python**, azyaşlı uşaqlar üçün isə vizual
  bloklara əsaslanan **Scratch** istifadə olunur. Lakin universitetlərdə
  proqramlaşdırmanın dərin nəzəriyyəsini, paradiqmalarını və riyazi əsaslarını
  öyrətmək üçün çox vaxt **Haskell**, **Scheme** və ya **OCaml** kimi dillərə
  müraciət edilir.

Mənzərə aydındır: bütün sahələrdə hökmranlıq edən, hər işə yarayan tək bir
"sehrli" dil yoxdur. Sizin dil seçiminiz həmişə həll etməyə çalışdığınız
problemin növündən, hədəflədiyiniz platformadan və ətrafınızdakı komandanın
təcrübəsindən asılıdır.

---

## 7. Müasir Dillər İdeyaların Qarışığıdır

Proqramlaşdırma dillərinin dizaynında son illərdə baş verən ən böyük inqilab,
sərt sərhədlərin aradan qalxmasıdır. Artıq "bu ancaq obyekt-yönümlü dildir" və
ya "o yalnız funksional dildir" kimi qəti kateqoriyalar keçmişdə qalıb. Müasir
dillər ehtiyaca uyğun olaraq fərqli fəlsəfələrin ən yaxşı ideyalarını bir araya
gətirən hibridlərə çevrilib.

Gəlin real nümunələrə baxaq. **Rust** kompüterin yaddaşına birbaşa müdaxilə edə
bilən, çox aşağı səviyyəli bir sistem dilidir. Lakin o, funksional
proqramlaşdırmadan çox güclü ideyaları — cəbri məlumat növləri və şablon
uyğunlaşdırması kimi anlayışları borc alıb. **Python** özəyində obyekt-yönümlü
olsa da, içərisində funksional proqramlaşdırmanın ən sevilən xüsusiyyətlərini
barındırır. **Kotlin** obyekt-yönümlü və funksional yanaşmaları o qədər rəvan
şəkildə qarışdırır ki, yazarkən aradakı sərhədi hiss etmirsiniz. Hətta uzun
illər sərt obyekt-yönümlü fəlsəfənin sarsılmaz qalası sayılan **Java** belə, son
yenilikləri ilə funksional elementləri (məsələn, lambdaları və məlumat
axınlarını) özünə inteqrasiya etməyə məcbur oldu.

Bu yaxınlaşma təsadüfi deyil. Dil dizaynerləri və mühəndislər zamanla öyrəndilər
ki, fərqli paradiqmalar proqramın fərqli hissələri üçün daha faydalıdır. Siz
eyni bir layihə daxilində (hətta eyni dildə) təməl sisteminizi obyektlərlə
modelləşdirə, böyük məlumat yığınlarını funksional borularla emal edə və server
sazlamalarınızı deklarativ şəkildə təyin edə bilərsiniz.

Müasir dillərdə digər böyük inkişaf **təhlükəsizlik** məsələsidir.
Proqramlaşdırma tarixində "milyard dollarlıq xəta" adlandırılan məşhur bir
problem var: mövcud olmayan məlumata müraciət etmək (Null pointer istisnaları).
Bu xəta illərlə saysız-hesabsız proqramın qəfil çökməsinə səbəb olub (oxu:
[1 milyard dollarlıq səhv](https://en.wikipedia.org/wiki/Tony_Hoare#Apologies_and_retractions:~:text=I%20call%20it%20my%20billion%2Ddollar%20mistake%2E)).

Lakin Kotlin, Rust, Swift və TypeScript kimi yeni nəsil dillər bu problemi
kökündən həll edir. Onlar hər hansı bir məlumatın null (boş) olma ehtimalını
qabaqcadan, kod hələ kompilyasiya olunarkən proqramçıya məcburi şəkildə
yoxlatdırırlar. Həmçinin, əvvəllər çox qəliz və xətaya meylli olan
**eşzamanlılıq** (eyni anda bir neçə işi təhlükəsiz görmək məntiqi) artıq müasir
dillərdə xüsusi əmrlər və məlumat kanalları vasitəsilə asan anlaşılan, standart
bir dil xüsusiyyətinə çevrilib.

Nəhayət, bugünkü mühitdə bir dilin təkbaşına güclü olması kifayət deyil;
**alətlər ekosistemi** hər zamankindən daha vacibdir. Müasir tərtibatçılar yeni
bir dil yükləyərkən onunla birlikdə paket meneceri, kodu avtomatik səliqəyə
salan formatlayıcı, xətaları anında tapan alətlər və kod redaktorları üçün
ağıllı köməkçilərin dərhal hazır olmasını gözləyirlər. İnqilabi ideyaları olan,
lakin alətləri zəif olan bir dil bu gün sənayedə qəbul edilmək üçün böyük
çətinlik çəkir. Lakin ortalama ideyaları olan, amma mükəmməl alətlər toplusuna
sahib bir dil asanlıqla uğur qazana bilər.

Trend çox aydındır: ən uğurlu müasir proqramlaşdırma dilləri ideoloji cəhətdən
"saf" deyil. Onlar praqmatikdir, çoxsaylı paradiqmaları özündə birləşdirir və ən
əsası, proqramçının gündəlik iş rahatlığını mərkəzə qoyaraq dizayn edilir.

---

## 8. Dili Necə Seçmək Lazımdır?

Bu qədər çox fərqli xüsusiyyətlərə malik proqramlaşdırma dili varkən, növbəti
layihəniz və ya öyrənmək üçün doğru dili necə seçməlisiniz? Seçim prosesini
asanlaşdırmaq üçün bir neçə əsas meyara ardıcıllıqla diqqət yetirmək lazımdır:

- **Problem sahəsindən başlayın.** Hər dilin özünü daha "rahat hiss etdiyi" və
  standart qəbul olunduğu sahələr var. Əgər veb səhifənin istifadəçi
  interfeysini (frontend) qurursunuzsa, JavaScript və ya TypeScript demək olar
  ki, qaçılmazdır. Əgər məlumat təhlili, statistika və ya süni intellektlə
  məşğul olacaqsınızsa, Python sənayenin qızıl standartıdır. Yox əgər əməliyyat
  sistemi komponenti və ya saniyənin mində biri qədər sürətlə işləməli olan
  mühərrik yazırsınızsa, C, C++ və ya Rust doğru ünvandır. Həll edəcəyiniz
  problemi dəqiqləşdirmək, onsuz da siyahıdakı variantları kəskin şəkildə
  daraldacaq.

* **Texniki məhdudiyyətləri nəzərə alın.** Proqramınızın real vaxt rejimində,
  heç bir ləngimə olmadan (məsələn, avtopilot sistemlərində və ya tibbi
  cihazlarda) işləməsi lazımdırmı? O zaman avtomatik yaddaş təmizləyicisi
  işləyən və prosesi qəfil millisaniyəlik dondura bilən dilləri (məsələn, Java
  və ya C#) kənara qoymalısınız. Bəlkə cəmi 32KB yaddaşı (RAM) olan kiçik bir
  mikrokontroller üçün kod yazırsınız? Bu xüsusiyyət əksər müasir dilləri dərhal
  aradan qaldırır. Yoxsa cəmi bir həftəyə hazır olması tələb edilən bir biznes
  prototipi qurursunuz? O zaman daxili intizamdan çox, sürətli inkişaf imkanları
  və hazır paketləri olan dillərə üstünlük verməlisiniz.

* **Komanda amilini yaddan çıxarmayın.** Bir şirkətdə işləyərkən ən yaxşı dil
  çox vaxt komandanızın artıq mükəmməl bildiyi dildir. Yeni və "parlaq" bir dilə
  keçid etmək böyük görünməz xərclər gətirir: işçilərin yenidən öyrənməsi,
  fərqli alətlərin qurulması və illərlə toplanmış praktik təcrübənin itirilməsi.
  Əgər layihəyə sıfırdan komanda yığırsınızsa, işçi bazarındakı vəziyyəti də
  nəzərə alın -- populyar və geniş yayılmış dillər üçün təcrübəli proqramçı
  tapmaq həmişə daha asandır.

* **Ekosistemin gücünü dəyərləndirin.** Bir proqramlaşdırma dili yalnız onun
  ətrafında formalaşmış kitabxanalar, freymvorklar və ona dəstək olan icma qədər
  güclüdür. Bir dili layihənizə tətbiq etməzdən əvvəl, sizin xüsusi
  ehtiyaclarınız üçün mövcud hazır paketlərə mütləq baxın. Yaxşı
  sənədləşdirilmiş və minlərlə insanın istifadə etdiyi bir kitabxana sizi
  aylarla sıfırdan kod yazmaq əziyyətindən xilas edə bilər. Əksinə, lazımi hazır
  alətlərin olmaması bəyəndiyiniz bir dillə işləməyi tam bir kabusa çevirə
  bilər.

* **Uzunömürlülüyə diqqət yetirin.** Əgər növbəti on il ərzində yaşayacaq və
  xidmət göstərəcək ciddi bir sistem (məsələn, bank proqramı) qurursunuzsa,
  sabit keçmişi, arxasında böyük korporativ dəstəyi (və ya nəhəng icması) olan
  yetkin dilləri seçin. Yeni çıxmış, səs-küylü dilləri sınaqdan keçirmək
  əyləncəlidir, lakin real biznes sistemləri hər zaman sabitlikdən və
  yetkinlikdən daha çox faydalanır.

* **Əgər məqsədiniz öyrənməkdirsə,** seçiminizi sadəcə "nə qurmaq istəyirəm"
  sualına görə deyil, "nəyi başa düşmək istəyirəm" sualına görə edin.
  - **Python** sizə problemlər haqqında aydın və təmiz düşünməyi öyrədəcək.
  - **C** kompüterlərin və yaddaşın əslində pərdəarxasında necə işlədiyini
    göstərəcək.
  - **Scheme (Lisp)** kimi dillər hesablama haqqında düşüncə tərzinizi və
    məntiqinizi tamamilə yenidən quracaq.
  - **JavaScript** isə sizi proqram təminatı dünyasındakı ən böyük və qaynayan
    ekosistemə birbaşa bağlayacaq.

Hər bir dil dünyaya baxmaq üçün fərqli bir linzadır və hər linza mənzərənin
fərqli bir tərəfini ortaya çıxarır.

Tələbələr və bu sahəyə böyük həvəslə yanaşanlar üçün kiçik bir tövsiyə: Yuxarıda
bəhs etdiyimiz **4 əsas paradiqmanın hər birini mütləq sınaqdan keçirin**. Bu
fərqli fəlsəfələrlə yaxından tanış olmaq sizə proqramlaşdırma haqqında çox
zəngin və dərin bir anlayış verəcək. Nəticədə, karyeranız boyu qarşınıza çıxacaq
istənilən yeni dilə, texnologiyaya və ya freymvorka qat-qat sürətli uyğunlaşa
biləcəksiniz.

---

## 9. Nəticə: Dillər İdeyaların Daşıyıcılarıdır

Bütün bu yazılanlardan yadda saxlamalı olduğunuz tək bir əsas fikir varsa, o da
budur: proqramlaşdırma dillərini öyrənmək əslində _ideyaları_ və _yeni düşüncə
tərzlərini_ öyrənməkdir.

Öyrəndiyiniz hər yeni dil sizə qarşınızdakı problemi kiçik hissələrə
parçalamağın yeni bir yolunu, qəbul etməli olduğunuz yeni kompromisləri və kodun
mürəkkəbliyini idarə etmək üçün fərqli bir zehni model öyrədir. Qrammatika, yəni
o fiqurlu mötərizələr, nöqtəli vergüllər və xüsusi açar sözlər işin sadəcə
səthidir. Başlanğıcda ən çox vaxt aparan və çətin gələn bu hissə, arxadakı əsas
məntiqi qavradıqdan sonra əslində ən asan və mexaniki detala çevrilir.

İmperativ ardıcıllığı, obyekt-yönümlü dizaynı, funksional yanaşmanı və
deklarativ məntiqi dərindən anlayan bir proqramçı üçün tamamilə yeni bir dili
öyrənmək aylarla deyil, sadəcə günlər və ya həftələr çəkir. Çünki o insan artıq
beynində geniş bir konseptual lüğətə (anlayışlar bazasına) sahibdir. Bu
səviyyədən sonra hər hansı bir spesifik dil sadəcə fərqli bir ləhcəyə çevrilir.

Öyrəndiyiniz ilk dil sizin düşüncə tərzinizi formalaşdıracaq. O, sizə müəyyən
kod yazma vərdişləri, instinktlər və (təəssüf ki) hadisələrə tək tərəfdən
baxmağa səbəb olan bəzi kor nöqtələr verəcək. Bu, tamamilə təbii və qaçılmaz bir
prosesdir. Lakin ilk dilinizin sizi məhdudlaşdırmasına, sizi öz çərçivəsinə
salmasına icazə verməyin. Peşəkar olaraq ən çox inkişaf edən proqramçılar,
qəsdən öz rahatlıq zonalarından kənara çıxmağı bacaranlardır: illərlə Java
yazdıqdan sonra beynini Haskell ilə yoranlar, rahat Python karyerasından sonra
yaddaş idarəetməsi üçün Rust-ı sınaqdan keçirənlər və ya dünyaya tamamilə fərqli
bir bucaqdan baxmaq üçün Prolog dilini araşdıranlar.

Proqramlaşdırma dilləri dünyası həddindən artıq genişdir və hər gün daha da
genişlənməyə davam edir. Amma inanın ki, bu heç də idarəolunmaz bir xaos deyil.
Ortada təkrarlanan naxışlar, böyük bir tarix və bunların hamısını bir-birinə
bağlayan dərin bir məntiq var. Əlinizdəki doğru xəritə ilə (ümid edirəm ki, bu
məqalə o xəritənin bir parçası oldu) bu böyük mənzərədə inamla və azmadan
hərəkət edə bilərsiniz.

İndi isə gedin və yeni dilləri kəşf edin! Əgər bu məqalədəki hansısa mövzu,
paradiqma və ya dil sizi daha dərindən maraqlandırırsa, mütləq aşağıda şərh
bildirin. Suallarınızı böyük məmnuniyyətlə cavablandıracaq və araşdırmanızı
davam etdirmək üçün sizə əlavə resurslar təklif edəcəyəm.
