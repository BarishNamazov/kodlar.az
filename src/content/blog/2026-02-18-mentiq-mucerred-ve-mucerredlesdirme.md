---
title: "Məntiq, Mücərrəd və Mücərrədləşdirmə: Optimal kod yazmağın tək sirri."
author: ali-taghizade
description:
  "Bu məqalə proqramlaşdırma dillərinin necə və hansı anlayışlar əsasında
  yaranmasını və bunları göz önünə alaraq yaxşı və ya optimal kod yazılmasını
  qısaca izah edir."
date: 2026-02-18
categories: ["Proqram Dilləri"]
---

Yaxşı, təmiz və ya gözəl kod nədir? Bir çox proqramçı ilkin dövründə bu sualı
özünə verib. Bəzən bu sual haqqında düşünmək insanı yorur və bir müddət sonra
kefini pozur. Çünki kod yazmaq bir baxımdan bir bacarıqdır. Yaxşı kod yaza
bilməmək isə, yetərli potensiala sahib olmamaq və bacarıqsızlıq düşüncəsini özü
ilə gətirir. Lakin bu suala veriləcək cavab heç də qarmaşıq və çətin deyil.
Əslində burada əksik olan bacarıq yox, sadəcə ümumi anlayışlar və
proqramlaşdırmanın əsas ideyasını unutmaq və ya bilməməkdir. Bunun əsas
səbəblərindən biri, yeni başlayanlara tövsiyə olunan "öyrəndikcə çox kod yaz"
yanaşmasıdır. Özündə bu yol çox səmərəlidir. Həqiqətən də insanlar kod yazma
bacarığını əldə edir və kod yazmaqda rahat olurlar. Çünki kod yazmaq bir
baxımdan da alışqanlıq məsələsidir. Təcrübə artdıqca kod yazmaq avtomatikləşir
və insan artıq çox düşünmür. Amma bu heç də düşünülən kimi mükəmməl deyil.
İnsanlar metodu izləyərkən sadəcə "X et, Y al" məntiqinə fokuslanır. Buna kiçik
şəkili görmək deyilir. Biz burada əsas olaraq necə edəcəyimizə fokuslanır və
kiçik detallara başımızı yoruruq. Nəticədə zəif əlaqəli və idarəsi çətin kod
bazası yaranır. Bu tip kodlar adətən "pis kod" kimi qiymətləndirilir. Bu tip
kodlar:

- Gələcəkyönümlü deyil, yəni yeni xüsusiyyət əlavə etmək arxitekturanı pozur.
- İdarəsi çox çətindir. Debugging etmək başdan aşağa bir işgəncədir.

Hər nə qədər nəticədə işlək kod olsa da, pis koddur və proqramçıları ən başdakı
suala gətirir. Amma bu məqalə isə, sizə yaxşı kod yazmağı ümumi və biraz fəlsəfi
yolla izah etməyə çalışacaq. Digər tərəfdən də bir mesajı qeyd etmək lazımdır
ki, bu məqalə cavab vermək üçün deyil, sual yaratmaq üçündür. Əgər oxuduqdan
sonra suallarınız artıbsa, məqsədinə çatmışdır.

## Optimal

Əslində bir çox insanın bu sözün mənası haqqında ilkin düşüncələri var. Bu çox
vaxt verilən məsələyə ən yaxşı və ya ən sürətli yol kimi olur. Bu açıqlama
optimal sözünün həqiqi izahına olduqca yaxındır, amma özündə yenə də tam
oturmur. Çünki burada nisbilik anlayışı çatışmır. Sürət kimi, optimallıq da
nisbi anlayışdır və kontekstdən asılıdır. Məsələn, avtomobillər üçün olan
naviqasiya sistemlərində düşünülə bilər ki, ən optimal yol ən qısa yoldur. Bu
həm yanlış, həm də doğru düşüncədir. Çünki əgər biz həqiqətən də sadəcə qısa
məsafə getməyi hədəfləyiriksə, bəli ən qısa məsafəni tapmaq bizim üçün optimal
həlli tapmaqdır. Lakin əsas istədiyimiz sadəcə hədəfə ən tez zamanda
çatmaqdırsa, ən qısa məsafə bizim üçün həmişə optimal həll deyil. Çünki ən qısa
məsafəyə sahib olan yolda hal-hazırda tıxac ola bilər. Görülən kimi optimal həll
üçün hədəflər düzgün müəyyən olunmalı və əsas məqsədi unutmamaq lazımdır.

Proqramlaşdırmada optimal kod böyük şəkilə ən uyğun implementasiyadır. Böyük
şəkil dedikdə isə, performansın, oxuna bilirliyin, ölçülənə bilirliyin,
davamlılığın və etibarlılığın (stabillik) birləşməsidir. Bu ümumi məqsədli böyük
portretə problemin həll etmək istədiyi hədəfləri də qatmaq və ya bu hədəflərə
əsasən dəyişmək olar.

## Məntiq

Məntiq insanın düzgün düşünməsini və nəticə çıxarmasını təmin edən qaydalar
sistemidir. Əslində biz məntiqi gündəlik həyatımızda daimi şəkildə istifadə
edirik. Hər hansı məlumatı bizim zatən doğru olduğunu bildiyimiz digər
ifadələrlə birləşdirib, doğru və ya yanlış olduğunu üzə çıxarırıq. Məntiqin bir
çox növləri vardır, lakin biz burada onlara toxunmayacağıq. Amma, yenə də daha
yaxşı anlamaq üçün bir misala baxaq. Təsəvvür edək ki, maksimum 70 kq
ağırlığında cisim daşıya bilən bir qutumuz var. Eyni zamanda, biz qutunun
içərisində hal-hazırda bir cisim olduğunu bilirik. Bu kimi vəziyyətlərdə, bizim
o cismin 70 kq-dan ağır olmasını yoxlamağımıza heç bir səbəb yoxdur. Çünki,
məntiq yeridərək sübut edə bilərik ki, qutu 70 kq-dan ağır cisim daşıya bilməz
və qutu hal-hazırda bir cisim daşıyır. Deməli içərindəki cisimin ən maksimal
çəkisi 70 kq-dır. Bu məntiq sadə göründüyü üçün proqramlaşdırmada əhəmiyyəti
unudula bilər. Məntiq mürəkkəb strukturlu kodları sadələşdirərək performansı
artıran, eyni zamanda kodları daha oxunaqlı edən sistem kimi rol oynaya bilər.
Bu səbəblə də məntiqin proqramlaşdırma və kodun optimallaşdırılmasında önəmi
çoxdur. Buna daha yaxşı misal və istifadə olunan metodlardan biri olan ikili
axtarış (**Binary Search**) alqoritmini araşdırmağınız tövsiyə olunur.

## Mücərrəd

Mücərrəd gözlə görülə, toxunula bilməyən və konkret olmayan hər hansı bir
şeydir. Əsasən bir ideya, konsept, keyfiyyət və ya şablon ifadə kimi mövcuddur.
Misal: sözlər, ədədlər, sevgi, söhbət və sair. Mücərrədlər bizim düşüncəmizin və
məntiqimizin əsas təməlidir. İnsan üçün ən əhəmiyyətli bacarıqlardan biri olan
danışıq mücərrədlər olmadan mövcud ola bilməzdir. Biz bundan əvvəlki paraqrafda,
məntiq və onun önəmindən bəhs etdik. Özündə məntiq kimi bir sistem var olması
üçün doğru və ya yanlış deyə biləcəyimiz ifadələrə ehtiyac var. İfadələr isə
istənilən halında və ya tipində bir mücərrəddir. Bu da o deməkdir ki, biz bir
problemi həll edərkən əgər məntiqimizi istifadə ediriksə, eyni zamanda,
mücərrədlərdən də istifadə edirik. Kiçik şəkildə, mücərrədlər sadəcə şərt
bloklarında və ya dəyişənlərdə görülə bilər. Burada heç bir yanlış yoxdur və
onlar həqiqətən də müəyyən bir anlayışları ifadə edən mücərrədlərdirlər. Lakin,
mücərrədlərin proqramlaşdırmada bundan ibarət olması düşüncəsi tamamilə
yanlışdır. Buradan belə bir problem çıxır. Bizim əlimizdə olan mücərrədlər
sadəcə kiçik şəkilə fokuslanıb, buna görə də böyük şəkilə optimal həll gətirə
bilmir. Başqa da bildiyimiz mücərrəd yoxdur deyə də tıxanma baş verə bilər. Bu
problemi həll etmək üçün fokusu daha genişləndirən standart və problemə xas
mücərrədlərə ehtiyac var. Standart və problemə xas mücərrədlər qurmaq üçün də
mücərrədləşdirməyə ehtiyac var.

## Mücərrədləşdirmə

Mücərrədləşdirmə konkret obyektlərin fərqli cəhətlərini kənara qoyaraq, onların
ortaq və əsas xüsusiyyətlərini seçib ümumi anlayış yaratmaq prosesidir. Məsələn
konktret olaraq biz iki alma, 3 ağac və 5 kitab kimi anlayışlarda sayın
cisimlərə bir-başa bağlı olmamasını görüb, onu bütöv bir mücərrəd anlayış kimi
ifadə edə bilərik. Bu bizə kəmiyyət və ya ədədləri verir. Kəmiyyət özü-özlüyündə
heç bir konkret məna ifadə etmir, amma elə bir ümumi anlayışdır ki, biz bunu bir
çox cisimə tətbiq edə bilərik. Əşyaların sayından ümumi ortaq cəhət olan
ədədləri çıxarmağımız əslində bir mücərrədləşdirmədir. Mücərrədləşdirmə beynin
çoxsaylı spesifik detalları ayrıca-ayrıca emal etmək əvəzinə, onları ümumi və
sadə anlayışlar altında birləşdirərək strukturlaşdırmasına imkan verir. Belə
olduqda mürəkkəb ideyalar özü əslində daha da mürəkkəb ideyalar üçün
sadələşəcək. Misal, tutaq ki, bizim sistemimizdə (video oyun və ya simulasiya
kimi) çoxlu şəxslər və ağac tipləri var. Biz bu şəxsləri və ağac tiplərini bütöv
insan və ağac mücərrədlərinə mücərrədləşdirə bilərik. Eyni zamanda, biz
sistemimizdə olan ölümlü cisimləri də quruplaşdırıb buna başqa bir məntiq qurmaq
istəyə də bilərik. Bu zaman bizim mücərrədləşdirdiyimiz insan və ağac
mücərrədləri digər bir mücərrəd olan ölümlülər anlayışısını yarada bilər. Bu
vəziyyətdə bizim strukturumuz ölümlüləri bütöv bir əsas çoxluq, ağac və insanı
isə onun kəsişməyən alt çoxluqları kimi görür. Bu kimi strukturda bizim
ölümlülərə quracağımız hər hansı məntiq avtomatik olaraq insan və ağac çoxluğuna
və o da bu çoxluqlarda olan spesifik ağac tipləri və şəxslərə təsir edəcək.

## Bu kimi fəlsəfi anlayışların proqramlaşdırmaya olan əlaqəsi

Proqramlaşdırma sadəcə alqoritm yazmaq və ya obyektlər təyin edib, onları
bir-biri ilə əlaqələndirmək deyil. Proqramlaşdırma özündə bu anlayışların
hamısının toplamıdır və heç bir zaman bizə spesifik olaraq hansı sadə yol
izlənilməlidir demir. Bu anlayışlara əsasən proqramlaşdırma dillərinin
paradiqmaları var və zamanla yeniləri də kəşf olunur. Paradiqma özündə bir
mövzuya baxış tərzi və düşüncə modeli deməkdir. Paradiqmalar alt modellərə sahib
ola bilər. Tarixi olaraq proqramlaşdırma dilləri əsasən iki yanaşma ətrafında
formalaşıb: Əmr yönümlü (**Imperative**) və Bəyanedici (**Declarative**). Bir
çox proqramçı yeni başlayanda öyrənməsi asan olduğu üçün əmr yönümlü dilləri
görür. Məsələn, C dili prosedural dildir və prosedural da əmr yönümlü modelinin
alt-paradiqmasıdır.

Prosedural və əmr yönümlü paradiqmalar özündə müəyyən zamandakı vəziyyəti əsas
mücərrəd anlayış kimi götürüb, bu vəziyyətlərə və ya hallara uyğun olaraq
ardıcıl digər prosedurları və əmrləri icra etməkdən ibarətdir. Bu məntiq əslində
kompüterin işləmə məntiqinə çox bənzər olduğu üçün performans tələb edən
sistemlərdə mükəmməldir. Eyni zamanda, insana məsələnin həlli üçün sadə ardıcıl
əmrlər toplusu və ya digər adı ilə alqoritm dizayn etdirir. Bu da insanın
gündəlik düşüncəsinə yaxın olduğu üçün yorucu olmur və asanlıq gətirir. Lakin bu
tip proqramlaşdırma zamanla çox qarmaşıqlaşa və idarə olunması vəziyyətlərin
sayı həddindən artıq hala gələ bilər. Bu kimi vəziyyətlərdə xətaların olması və
tıxanma qaçınılmazdır. Yəni, prosedural proqramlaşdırma hər nə qədər mükəmməl
görsənsə də, əslində mükəmməl də proqramçı tələb edir.

Biz mücərrədləşdirmə və onun mürəkkəb vəziyyətləri strukturlaşdırmasından bəhs
etdik. Bunun proqramlaşdırmada bir-başa qarşılığı var və buna obyekt yönümlü
proqramlaşdırma deyilir. Obyekt yönümlü proqramlaşdırma əsasında hər şeyin bir
obyekt olması və hər obyektin də bir sinifin elementi olmasını tələb edir. Bu
siniflər bizim ağac və insan misalına tam uyur. Siniflərin özü də digər mücərrəd
(abstrakt) və ya konkret siniflərin alt-sinifi ola bilər. Burada biz hələ də
görüləcək işləri əmr yönümlü olaraq gördüyümüz üçün bu paradiqma əslində
alt-paradiqmadır. Bu paradiqma vəziyyətləri ümumiləşdirib, sadələşdirdiyi üçün
mürəkkəb sistem dizaynı daha asanlaşır. Bu düşüncə tərzi bir yandan modularlıq
məntiqini də ödəyir. Bir digər yandan, bu kimi mücərrədləşdirmə kompüterin
işləmə məntiqindən fərqləndiyi və bizim də bu proqramı nəticədə kompüter
üzərində çalışdıracağımız üçün, performans baxımından heç də mükəmməl deyil.
Eyni zamanda, çoxlu obyektlərin idarəsi əvvəl dediyimiz çoxlu vəziyyətlərin
idarə edilməsi kimi mürəkkəbləşə və yaddaş təhlükəsizliyi problemləri gətirə
bilər. Obyekt yönümlü dillərin bir çoxu bu problemi aradan qaldırmaq üçün zibil
toplayıcısından (**Garbage Collector**) istifadə edir. Zibil toplayıcısı hər nə
qədər proqramçı üçün işi asanlaşdırsa da, kompüter üçün əlavə edilməsi gərəkən
işə çevrilir və yenə də müəyyən performans itkisi ilə nəticələnir. Bu səbəblərə
görə də obyekt yönümlü dillər sistem proqramlaşdırılmasında istifadə olunsa da,
aşağı səviyyəli nəzarət tələb edən mühitlərdə əlavə abstraksiya performans
kompromisi yarada bilər.

Proqramlaşdırma həmişə bir problemin həlli və ya ardıcıl prosesin dizaynı kimi
görülə bilməz. Bəzən ediləcək iş dayanmadan artan mürəkkəbliyə və paralel
görülən proseslərə ayrıla bilər. Xüsusilə son zamanlarda, prosessorların
güclənməsi onların saniyə başı gördüyü işlə bərabər saniyə başı neçə iş paralel
hesablanır tərzində olur. Hətta demək olar ki, artıq hertz fərqinə baxılmır və
əsas fərq nüvə saylarından gəlir. Buna əlavə olaraq qrafik kart
proqramlaşdırılması da deyilə bilər. Əlimizdəki cihaz budursa, proqramçı kimi
buna ayaq uydurmaq məcburiyyətindəyik. Həm də qeyd edilən kimi bəzən sənayelər
davamlı və həmişə istifadə oluna bilən, əsas çətinliyi inkişaf etdirilməsi və
yeni özəlliklərin artırılması olan sistemlər də tələb edə bilir. Buna misal
olaraq, finans sahəsini görə bilərik. Bu kimi sahələrdə məqsəd bir neçə problemi
həll etmək yox, davamlı dəyişən vəziyyəti anında yaxalamaq və adaptasiya ola
biləcək sistemlərdir. Və ya telekomunikasiya sahəsi də buna misal gətirilə
bilər. Telekomunikasiya məntiq olaraq dəyişməyib və həmişəki məqsədlərini
ödəməyə çalışır. Bu tipdə böyük sistemlər davamlı, paralel və etibarlı olmaq
məcburiyyətindədir. Əmr yönümlü yanaşma "necə etməyə" həddindən artıq
fokuslandığı üçün zamanla qarışa bilir. Buna həll olaraq bəyanedici və ən məşhur
alt-paradiqması olan funksional proqramlaşdırma ortaya çıxdı. Funksional
proqramlaşdırma mümkün qədər yan təsirləri izolyasiya etməyə və idarə etməyə
çalışır. Əsasında funksional proqramlaşdırma sistem dizaynını riyaziyyatdakı
təmiz və təsirsiz hala gətirməyə çalışır. Əgər funksiyalar həmişə eyni nəticəni
verirsə, nə xəta riski artır, nə də arxitekturanı yenidən qurmaq lazım olur. Həm
də bu funksiyalar bir-birindən asılı olmadığı üçün rahatlıqla paraleldə işləyə
bilər. Bu kimi düşüncə problemi həll edir, və biraz da insana qəribə gəlir.
Çünki kiçik işlərdə bu düşüncə tərzi mənasız və həddindən artıq səslənir. Buna
görə də öyrənməsi çətin görülə bilər. Riyaziyyat ilə məşğul olan insanlar üçün
isə, çox daha rahat anlaşıla bilər.

Burada məqalə paradiqmalar və onların necə işlədiyini detallı izah etmək
istəmir. Çünki onların hər biri çox detallı və geniş mövzulardır. Burada əsas
ideyaları misal göstərərək, göstərilən məntiq, mücərrəd və mücərrədləşdirmə
anlayışlarının necə standart formada tətbiq edilə biləcəyini göstərməkdir. Yəni,
məsəl üçün burdan alınacaq dərslərdən biri kimi mücərrədləşdirmə digər adı ilə
abstraksiya yalnız obyekt yönümlü programlaşdırmada olmur. Hətta bu paradiqmanı
çıxardan da məhs elə bu anlayışlardır. Əlavə olaraq, bəzi proqramlaşdırma
dilləri vardır ki, özündə çox-paradiqmalıdır və bir neçə paradiqmanın müsbət
yönlərinin birgə istifadəsinə imkan yaradır. Bunu edə bilirik, çünki bu
paradiqmalar əslində mücərrəd modellərdir və mütləq deyil ki, sintaksis
tərəfindən təyin olunsun. Və nəticədə hər biri sadəcə problemə optimal həll
olmağa və bir işi icra etməyə yarayır, yəni proqramlaşdırmaya.

Məsələn, C++ proqramlaşdırma dilində funksional proqramlaşdırma məntiqi
sintaktik olaraq birbaşa dəstəklənmir. Lakin müəyyən prinsiplərə, məsələn,
dəyişməzlik (**immutability**), yan təsirlərin minimuma endirilməsi və saf
funksiyalardan istifadə kimi qaydalara özümüzü şüurlu şəkildə məhdudlaşdıraraq
funksional yanaşmanı tətbiq edə bilərik.

Bu cür yanaşmada səhv etmə ehtimalı nisbətən daha yüksək olsa da, düzgün
prinsiplərə əməl etdikdə nəticə etibarilə funksional proqramlaşdırma məntiqini
C++ mühitində də uğurla reallaşdırmaq mümkündür.

## Nəticə. Bir proqramçı bu düşüncə tərzində necə mükəmməlləşə bilər?

Çox hekayə və kitab oxumadan yaxşı yazıçı olmaq çətindir. Eynilə çox düşüncə
tərzi və yanaşma görmədən yaxşı proqramçı olmaq da çətindir. Çünki, proqramçı
problemin həlli üçün sistem qurarkən tıxana və çətin vəziyyətə düşə bilər. Bunun
əsas səbəbi də, yetərli mücərrədləşdirmə və məntiq sistemini qurmamasıdır. Bu
sistemi qurmaq üçün digər paradiqmaları bilmək böyük üstünlükdür. Mütləq deyil
ki, bu paradiqmaların hər biri davamlı şəkildə proyektlərdə istifadə olunsun. Ən
əsası standartlaşmış modelləri düzgün anlamalı və onlardan dərs götürməliyik.
Praktika ilə öyrən metodunu burada da eynilə tətbiq edib, onlarla bağlı özümüzdə
alışqanlıqlar yaratmaq həmişə bizi daha yaxşı proqramçı edir. Sonda, ümid olunan
ümumi anlayışları anlamaq və böyük şəkili görə bilməyinizdir. Dil dəyişir,
trendlər dəyişir, amma düşüncə modeli dəyişmirsə, proqramçı inkişaf etmir. Əgər
düşüncə sisteminiz güclüdürsə, istənilən dil sadəcə alətə çevrilir.
