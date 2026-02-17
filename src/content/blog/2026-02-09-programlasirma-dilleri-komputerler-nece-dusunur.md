---
title: "Proqramlaşdırma Dilləri: Kompüterlər Necə Düşünür?"
author: ali-taghizade
description:
  "Proqramlaşdırma dillərinin əsas anlayışları, fərqləri və niyə mövcud
  olduqları haqqında qısa icmal."
date: 2026-02-09
categories: ["Proqram Dilləri"]
---

Bəzən gözümüzdə sehrli qutu olaraq görünən kompüterlər bizə maraqlı gəlir.
Bilirik ki, realda sehr mövcud deyil. Bəs necə olur ki, bu kompüter adlanan
cihazda insanlar oyunlar oynaya, videolar izləyə və bir çox işlərini edə
bilirlər?

## Proqramlaşdırma dili nədir və niyə var?

Kompüter sadə dildə izah etsək sadəcə onlara verilən əmrləri yerinə yetirə bilən
qabaqcıl kalkulyatordan başqa bir şey deyil. Kalkulyator deməkdə məqsəd verilən
əmrlərin çox sadə olmasıdır. Qarmaşıq gördüyümüz dünya isə sadəcə proqramçının
bu sadə əmrləri toplu və ağıllı şəkildə işlətməsindən nəticələnir. Bu da
proqramlaşdırmanın nə olduğunu bizə ifadə edir. Lakin bir çox insanın rahatlıqla
bildiyi bir məlumat var: kompüterlər sıfırlar (**0**) və birlərlə (**1**)
işləyir. Həqiqətən də kompüterlər özündə yalnız bitlərlə hesablama edə və
məlumat saxlaya bilir. Eyni zamanda, yazılan proqramlar da bu şəkildə olmalıdır
ki, kompüter onu anlaya bilsin. Bu kompüterin anladığı bir dil olduğu üçün biz
buna maşın dili deyirik. İstifadə etdiyimiz bütün software sistemləri kompüterdə
maşın dilində olur. Amma proqramların bitlərlə yazılması düşüncəsi çox qorxunc
səslənir. Təsəvvür edin ki, yazmaq istədiyiniz proqram üçün yalnızca 0 və 1
düymələrinə basırsınız. Bu həm çox qarmaşıq görünər, həm də çox uzun vaxt
aparar. Bu problemə həll üçün insanların daha yaxşı anlaya biləcəkləri bir üsul
olaraq proqramlaşdırma dilləri ixtira olunmuşdur. Proqramlaşdırma dilləri özündə
sadəcə yazıdan (**text**) ibarət olub əmrləri sözlərlə ifadə edib yazmaqdır. Biz
onsuz da bu əmrlərin sadə olmasından, çoxlu təkrarlanması gərəkdiyini bilirik və
qarmaşıq sistemlərdə artıq bizə daha mürəkkəb əmrlər lazım olur. Bu mürəkkəb
əmrləri də müəyyən qrammatikada işlətməliyik ki, yazılan kod mənalı və anlaşılan
olsun. Bu şəkildə düşündükdə kod yazmaq daha asan hala gəlir. Sanki kompüterlə
söhbət edirmişik kimi düşünülə bilər. Lakin unutmamaq lazımdır ki, kompüterlər
bu dilləri anlamır, onlar sadəcə maşın dilini bilirlər. Bu zaman bizim
köməyimizə tərcüməçi proqramlar gəlir. Bu tərcüməçi proqramlar proqramlaşdırma
dillərinə görə fərqlənir, lakin hər birinin məqsədi maşın dilinə çevirməkdir.
Onlar kodları çevirmə metodlarına görə iki hissəyə ayrılır: Interpreter və
Compiler. Əslində bu çevirmələrə daha da çox metodlar vardır, amma biz hələlik
işləri sadə tutmaq üçün bunları bilsək yetərlidir. Bu proqramlarla biz bizim
proqramlaşdırdığımız mənbə (**source**) kodunu maşın dilinin anlaya bildiyi
vəziyyətə gətirə bilərik.

## Niyə fərqli və çoxlu proqramlaşdırma dillərinə sahibik?

Proqramlaşdırma ixtira olunduqdan sonra standartlar bəlli deyildi. Eyni zamanda,
kompüterlərin istifadəsi çox geniş ola biləcəyinə görə, proqramlaşdırma dilləri
də bir vaxt sonra müəyyən məqsədlərə görə hazırlanmağa başlandı. Hər dil
bir-birlərindən bəzi üstünlükləri ilə fərqlənir. Amma bəzi üstünlüklər eyni
zamanda başqa problemlər də yaradır. Bu fərqlilikləri anlamağınız üçün bəzi
misal dillərdən bəhs edək:

- Python: Ümumi məqsəd (**General Purpose**) proqramlaşdırma dilidir. Əsas məğzi
  sadə, rahat və aydın olmasıdır. Proqramçını yormayan və kiçik sadə scripting
  kimi işlərdə mükəmməldir. Yeni başlayanların çox asanlıqla öyrənə biləcəyi bir
  dildir. Əsasən interpret olaraq maşın dilinə çevrilir. Bu onun sürətli işə
  salınmasına yardım etsə də, performans baxımından zəiflədir. Bir çox
  paradiqmaları etməyə çalışır və buna görə də geniş istifadə oluna da bilinir.
  Lakin, onu fərqləndirən cəhətləri həm də onu geri salır. Proqramçıya rahat
  dillər maşın dilindən çox uzaq olduğu üçün maşına əlavə yük salır. Buna görə
  də performans tələb edən işlərdə yalnız daha sürətli kitabxanalara qoşulub
  işlədilə bilər.
- PHP: Server tərəfli scripting dilidir. Əsas məğzi server appləri üçün asan,
  sürətli və dinamik kodlar yazmağa kömək etməsidir. Asanlıqla, HTML koduna
  inteqrasiya olur və çox sadə şəkildə dinamik səhifələr yaradır. Vebin çox
  hissəsini təşkil edir və populyar dillərdən biridir. İnkişafa tamamilə açıqdır
  və versiyaları müasir tutulur. Lakin, onu fərqləndirən bir çox cəhət onun hər
  yerdə istifadə oluna bilməməsinə də nəticələnir. Hər nə qədər Turing-complete
  dil olmasına baxmayaraq, bu dil əsasında sadəcə serverlər üçün nəzərdə
  tutulub. Yəni, native applər hazırlanması uyğun deyil. Bundan əlavə olaraq,
  PHP mənbə kodları sadəcə düz mətn olaraq yadda saxlanıldığı üçün də bir çox
  təhlükəsizlik problemlərinə açıqdır. Son olaraq, inkişafa açıq olması onu öz
  versiyaları arasında böyük fərqləndirir. Bu da köhnəlmiş PHP kodlarının geriyə
  uyğunluğunu qırır.
- Elixir: Bölüşdürülmüş sistemlər (**Distributed Systems**) üçün
  optimallaşdırılmış bir dildir. Köhnəlmiş olan Erlang/BEAM ekosisteminin müasir
  halı kimi ortaya çıxıb. Əsasən telekomunikasiya sistemlərində istifadə olunur.
  Bu dil həmişə çalışdırdığı kodları qarşılaşdığı xətalara baxmayaraq davamlı
  olaraq aktual tutmağa çalışır. Bir çox proqramçı üçün öyrənməsi çətindir və
  digər dillər kimi geniş istifadəyə açıq deyil. Paralel sistemlər üçün mükəmməl
  olsa da, prosessor-ağırlıqlı işlərdə çətinlik çəkir.
- Cobol: Ən qədimi dillərdən biridir və artıq istifadəsi demək olaraq yoxdur.
  Çıxdıqda əsas məqsədi ola bildiyincə ingilis dilinə bənzəməsi və kompüter
  bilməyənlərin belə istifadə edə biləcəyi dil olması idi. Əsasən finans
  sistemləri üçün inkişaf etdirilib. Bu dil bizim bildiyimiz proqramlaşdırma
  dili anlayışından olduqca uzaqdır və ən sadə alqoritmlər belə çox uzun kodlara
  çevrilə bilər. Olduqca riskli və qarmaşıq olan bu dil sadəcə standartların
  olmadığı dövrü əla ifadə edən tarixi fakt olaraq yaşayır ancaq.
- Java: Bu dil müasir dövrün ən çox istifadə edilən və obyekt-yönümlü
  proqramlaşdırmanın (**Object Oriented Proqramming**) ən güclü dillərindən
  biridir. Java çıxdığı zaman _"Bir dəfə yaz, hər yerdə işlət!"_ mottosu ilə
  populyar idi. Əsasən həm compiler, həm də interpreter metodlarının müsbət
  cəhətlərini hibrit birləşdirən JIT virtual maşın məntiqi ilə işləyir. Onu
  populyar edən bir digər nöqtəsi isə, zəngin və müasir kitabxana ekosistemidir.
  Lakin indiki dövrdə, ən böyük məqsədi istənilən sistemin asan və tez tətbiq
  (**implement**) oluna bilməsidir və bu da onu performans cəhətdən geriyə
  salır. Hər nə qədər Python kimi dillərdən daha sürətli olsa da, onun hər yerdə
  OOP paradiqmasını istifadə qanunu, prosessorun işləmə məntiqinə biraz zidd
  olduğu üçün yavaşladır. Həmçinin nəticədə birbaşa maşın dilinə çevrilməyən bir
  dildir. Əlavə olaraq, Java proqramçı üçün kəskin bəzi qaydalar qoyur. Bu
  qaydalarla kodu daha təhlükəsiz etməyə çalışsa da, bu həm də proqramçını
  limitləyir. Misal, zibil qutusu (**Garbage Collector**) metodunu istifadə
  etməsi onun aşağı səviyyə işlərdə istifadəsini bağlayır. Sonda, PHP-də qeyd
  edilən versiya probleminə də sahibdir.

Əlavə olaraq daha yaxşı anlamaq üçün, _Haskell_ və _Scala_ kimi dilləri də
araşdırmağınız tövsiyə olunur.

Bütün bu fərqlərə görə də mükəmməl dil ola bilməz. Tövsiyə olunan ilk başda
öyrənməyə başlayan zaman ümumi məqsədli (**general purpose**) dillərdən birini
öyrənməkdir. Buna misal olaraq bu dillərdən biri olan C/C++ dilindən
danışacağıq. Bu dil bütün məqsədlər üçün istifadə oluna bilər, amma hər məqsəd
üçün səmərəli deyildir. Məqsəd giriş səviyyəsidirsə bizə yetərlidir. Lakin, bu
dil bəzən digərlərindən daha çətin anlaşıla bilər. Bu biraz da mifdən ibarətdir,
çünki bu dili ilk öyrənən bir çox insan vardır və əslində başqa dillər də bu
dili təməl olaraq hazırlandığı üçün C/C++ öyrənməklə bir çox dili də öyrənmiş
olursunuz.

## Proqramlaşdırma dillərində səviyyələr nələrdir və bəzi dillər niyə çətin adlanır?

Niyə C/C++ çətin adlandırılır? Çünki C/C++ orta səviyyə proqramlaşdırma dilidir.
Proqramlaşdırma dilləri səviyyələrinə görə 3 hissəyə ayrılır: Aşağı, Orta və
Yuxarı. Bu səviyyələr əslində kompüterlərin inkişafı ilə yaranıb. İnsanların
proqramlaşdırma dillərini ilk ixtirası zamanı, təbii ki də yaranan ilk dillər də
maşın dilinə çox bənzəyirdi ( Məsələn Assembly ). Dillər nə qədər çox maşın
dilinə oxşasa, bu o qədər aşağı olduğunu göstərir. Eyni zamanda, əgər dil insan
dilinə daha çox oxşasa, bu da onu yuxarı səviyyə dil edir. C/C++ orta səviyyə
bir dil olduğu üçün həm maşın dilinə həm də insan dilinə daha yatqındır. Bəzi
yuxarı səviyyə dillərə nəzərən daha qarmaşıq sayılsa da kompüterləri anlamaq
üçün ən sadə dil də məhz bu dildir.

## Niyə bəzi dillər aktuallığını itirir?

Buna bir çox səbəb gətirilə bilər:

Məsələn,

- **Artıq inkişaf etmir.** Buna səbəb onu hazırlayan insanların və ya şirkətin
  artıq bağlanması və ya ən azından proyektdən çəkilməsi ola bilər.
- **Müasir tələbləri ödəmir.** Dil hazırlanan zaman əsas məntiqi nüvə və ya
  fundament kimi qoyulur və sonrakı yeniliklər də onun üzərinə yığılır. Əgər bu
  təməl bütövlüklə uymursa, heç bir yenilik bunu dəyişə bilməz və köhnəlmiş dilə
  çevrilir.
- **Günümüzün texnologiyasına əl vermir.** Bəzi dillər vardır ki, sırf müəyyən
  texnologiyanı dəstəkləmək və işini asanlaşdırmaq üçün çıxıb. Texnologiyalar
  əvəzləndikcə, bu dillər də əvəzlənməyə məcburdur.
- **İstifadəsi o qədər də geniş deyil.** Bir dilin geniş istifadəyə sahib olması
  onun çıxdığı ildən asılı deyil. Əsas qoyulduğu təməl və gördüyü məqsəddir.
  Əgər bu məqsədlər niş auditoriyanı əhatə edirsə, aktual olmağa da səbəb
  yoxdur.

Son olaraq, proqramlaşdırmaya marağınız və həvəsiniz varsa, hansı dildən
başlamağınız önəmli deyil. Burada doğru və ya yanlış seçim yoxdur. Sadəcə
başlanğıc üçün rahat və ya çətin gələ biləcək dillər vardır. Hətta bunun özü
belə insandan insana dəyişir. Ən yaxşı metod kimi məqsədinizə uyğun olan dili
seçməyiniz və onda peşəkarlaşmağınızdır.
