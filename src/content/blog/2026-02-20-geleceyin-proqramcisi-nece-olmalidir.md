---
title: "Gələcəyin Proqramçısı Necə Olmalıdır?"
author: murad-nurubayli
description:
  "AI və texnologiyaların inkişaf etdiyi dövrdə bu sahəyə başlayan yeni
  proqramçı nələrə diqqət etməlidir?"
date: 2026-02-20
categories: [Karyera]
---

Salam dostlar!

Bu yazıda səmimi bir söhbət edəcəyik. Proqramlaşdırma dünyasına yeni addım atan
hər kəsin ağlında eyni suallar dönür: "Hansı dili seçməliyəm?", "Bazar nə
istəyir?", "Mən öyrənənə qədər süni intellekt hər şeyi əlimdən alacaq?". Bir
neçə ilini bu sahəyə vermiş, həm .NET, həm də fərqli texnologiyalarla işləmiş
bir həmkarınız kimi, istərdim ki, bu suallar barədə öz şəxsi fikirlərimi və
sənayedə gördüyüm reallıqları bu məqalədə sizlərlə bölüşüm.

---

## 1. Hansı dili seçməli? Sənayenin görünməyən tərəfi

Proqramlaşdırma dili seçmək, əslində bir peşə seçmək kimidir. Hər dilin
arxasında fərqli bir dünya, fərqli bir iş mühiti və fərqli problemlər dayanır.
Barışın daha öncə paylaşdığı
[bu məqaləsində](https://kodlar.az/blogs/proqramlasdirma-dilleri/) dillər
haqqında ümumi texniki məlumatlar verilib. Mən isə sizə bu dillərin sənayedəki
"xarakterindən" danışmaq istəyirəm. Əgər bu gün yeni bir proqramlaşdırma dili
öyrənmək qərarına gəlmisinizsə və ya proqrmalaşdırmaya yeni başlayıb özünüzə bir
“başlanğıc nöqtəsi” seçmək istəyirsinizsə o zaman bəzi məqamları bilməyinizdə fayda
var. Gəlin sənaye dedikdə ilk öncə hansı növ kateqoriyalar və “bazar”lar var ona
baxaq.

### A) Enterprise (Böyük Korporasiyalar): Java və C# (.NET)

Əgər sizin hədəfiniz banklar, sığorta şirkətləri, dövlət sistemləri və ya
minlərlə işçisi olan beynəlxalq şirkətlərdirsə, seçiminiz ya Java, ya da C#
olmalıdır. Əslində digər dillər də ola bilər amma xüsusi olaraq bu iki dil ən
effektiv OOP dillərindən olduğundan və ən əsası çox geniş topluluğa sahib
olduqlarından xüsusilə bunları vurğulamaq istədim.

**Java:** Onilliklərdir sənayenin "bel sütunu"dur. "Bir dəfə yaz, hər yerdə
işlət" fəlsəfəsi ilə həm böyük backend sistemlərdə, həm də Android dünyasında
(Kotlin) sənayedə çox böyük paya sahibdir.

**C# (.NET):** Microsoft-un bəlkə də gördüyü ən doğru iş 😀. Son illərdə .NET
Core ilə birlikdə inanılmaz dərəcədə sürətlənib və modernləşib. Enterprise
dünyasında ən təmiz [[çərçivə]]lərdən biri sayılır. Son versiyalarında əldə
etdikləri çox ciddi performans artımı və əsas rəqibi Javadan bəzi
xüsusiyyətlərdə qabağa düşməsi və ən əsas da çox yaxşı ekosistemə sahib olması
bu dili çox güclü bir alət edir.

### B) Veb Dünyası və Startaplar: JavaScript / TypeScript

Əgər dinamikanı sevirsinizsə, "bu gün yazdığım kodu dərhal brauzerdə görüm"
deyirsinizsə, JavaScript sizin üçün yeganə seçimdir. Amma müasir sənaye artıq
"sadə JS" yox, TypeScript tələb edir. TypeScript sizə kodun içində azmağa
qoymur, səhvlərinizi kodu yazarkən göstərir. Bu arada TS dizayn olarkən C#-dan
çox böyük ilhamlar alıb.

### C) Data və AI: Python (tək bu dil olmasa da yeni başlayanlar üçün ideal seçimdir)

Python bu gün proqramlaşdırmaya ən asan giriş qapısıdır. Amma aldanmayın, o həm
də ən güclü alətdir. Data Analitikası, Süni İntellekt və maşın öyrənməsi
sahələrində Python-dan başqa ciddi alternativ yox kimidir.

### D) Performans, aşağı səviyyə proqamlaşdırma, gömülü və təchizat bazalı: C++, Go, Rust

Əgər sistemlərin alt qatları, "bulud" texnologiyaları (Cloud Native) və ya
yüksək performanslı oyun mühərrikləri sizi maraqlandırırsa, bu dillərə
baxmalısınız. Go (Golang) xüsusilə Google-un dəstəyi ilə backend dünyasında çox
sürətlə yayılır. Həmçinin C++, C çox böyük və yüksək təzyiqli sistemlərdə
(finans, brija, OS və s.) ən çox istifadə edilən dillərdəndir.

---

## 2. Sənaye Tələbləri: Kod yazmaq kifayətdirmi?

Yuxarıdaki siyahını çox uzatmaq olar. İnternetdə və az qala hər yerdə siz demək
olar ki, bu dilləri məsləhət olunan dillər kimi görəcəksiniz. Bəs əsas suala,
“Kod yazmaq kifayətdirmi?” cavab çox sadədir. Düzünü deyim: yox. Şirkətlər artıq
"kod yazan maşın" axtarmır. HR menecerlərin və Tech Lead-lərin (texniki
rəhbərlərin) masasında yüzlərlə CV var. Onlar fərqlənmək üçün sizdən bunları
tələb edir:

- **Problem Həll Etmə Bacarığı (Tənqidi Düşüncə):** Sizə bir problem veriləndə
  onu neçə hissəyə bölə bilirsiniz? Hansı alqoritm daha effektivdir? Hansı
  dizayn, kodlaşdırma paradiqması kontekstə daha uyğundur və s.
- **Soft Skills:** Proqramçılar tək işləmir. Komanda ilə necə ünsiyyət
  qurursunuz? Başqasının koduna necə [[kodun nəzərdən keçirilməsi]] verirsiniz?
- **Davamlı Öyrənmə:** Bu sahədə "mən artıq öyrəndim, bitdi" dediyiniz gün,
  karyeranızın sonu başlayır.

---

## 3. AI Faktoru: Proqramçılar əvəz olunacaq?

Buranı çox diqqətlə oxuyun. AI proqramlaşdırmanı öldürmür, onu dəyişdirir.

Məsələn, çoxları deyir ki, AI artıq React kodunu çox yaxşı yazır, buna görə də
React öyrənməyə dəyməz. Bu, kökündən yanlışdır. AI-nin bir dili və ya çərçivəni
yaxşı yazması, o sahədəki mütəxəssisə olan tələbi artırır, çünki məhsul yaratmaq
sürətlənir. Amma ast hədd yuxarı qalxır.

AI-nin yazdığı React kodunda bəzən performans problemləri, bəzən isə ciddi
təhlükəsizlik boşluqları olur. Sizin işiniz AI-nin yazdığı 100 sətirlik kodu
oxuyub, oradakı 1 sətirlik kritik səhvi tapa bilməkdir. Bunun üçün isə siz həmin
dili AI-dən daha dərindən bilməlisiniz (React sadəcə bir nümunədir, istənilən
dil üçün bu belədir).

---

## 4. Fundamental Biliklər: Sizin "Sarsılmaz Bünövrəniz"

Dili seçdiniz, amma o dili öyrənməyə başlamazdan əvvəl (və ya paralel olaraq)
proqramlaşdırmanın fundamentlərini öyrənməlisiniz. Bunlar olmadan siz sadəcə
"sintaksis təkrarçısı" olacaqsınız.

- **[[verilənlər strukturu]]:** Array, Linked List, Tree,
  Graph, Hash Table. Verilənləri harada və necə saxlamaq lazım olduğunu
  bilməsəniz, yazdığınız proqram tısbağa sürəti ilə işləyəcək.
- **[[alqoritm]]lər:** Sıralama, axtarış, rekursiya. Google niyə sürətlidir?
  Çünki arxasında nəhəng alqoritmlər dayanır.
- **Şəbəkə (Networking) və HTTP:** Brauzer serverlə necə danışır? Status kodları
  (200, 404, 500) nə deməkdir?
- **Verilənlər Bazası (Database):** SQL nədir? Verilənlər bir-biri ilə necə
  əlaqələnir?

Bu siyahını kompüterlər necə işləyir, [[kompilyator]], [[interpretator]] və s.
kimi təməl biliklərlə uzatmaq olar.

---

## 5. Müasir Yol Xəritəsi (Roadmap)

Bir dili seçdiniz (məsələn, .NET və ya Java). İndi nə etməlisiniz? Dili necə və
hansı yol ilə öyrənməlisiniz?

### Mərhələ 1: "Hello World" və Sintaksis

Burada məqsəd dilin "dilini" anlamaqdır. Dəyişənlər, şərt operatorları
(if/else), dövrlər (loops). Bu mərhələdə AI-dən (ChatGPT, Claude) repetitor kimi
istifadə edin. "Mənə for loop-u bir uşaq üçün izah edə bilərsən?" tipli suallar
verin.

### Mərhələ 2: Obyekt Yönlü Proqramlaşdırma (OOP) və Fundamentlər

Hər şeyin "obyekt" olduğu bir dünyadır. Klasslar, miras alma (inheritance),
polimorfizm. Bu mərhələdə artıq özünüz kod yazmağa başlayın. AI-yə sadəcə
xətalarınızı tapmaqda ([[sazlama]]) icazə verin.

### Mərhələ 3: Versiya İdarəetməsi və Git

Kodunuzu necə qoruyursunuz? git commit, git push, git pull – bunlar sizin
gündəlik rutinləriniz olmalıdır. GitHub-da bir profil açın və yazdığınız hər bir
kiçik kodu oraya yükləyin.

### Mərhələ 4: Çərçivə və Layihə

İndi artıq real oyuncaqlarla oynamaq vaxtıdır. Əgər C# seçmisinizsə ASP.NET
Core, Java seçmisinizsə Spring Boot, JavaScript seçmisinizsə React/Next.js. Bir
layihə götürün (məsələn, bir kitab mağazası sistemi) və onu başdan sona qurun.

### Mərhələ 5: AI-ni mühərrik kimi istifadə edin.

Layihəniz artıq formalaşdıqda, AI-dən məhsuldarlığınızı artırmaq üçün istifadə
edin.

**Düzgün Prompt Metodikası verməyi bilin:**

AI-yə sadəcə "kod yaz" deməyin. Ona kontekst verin, problemin həll yolunu təqdim
edin ki, o sadəcə kodunu yazsın. Unutmayın ki, AI alətləri hələ uzun müddət
biznesi, problemi sizin kimi dərindən anlayıb hansısa bir sistemi 0-dan
arxitekturasını, dizaynını doğru şəkildə qura bilməyəcək. Bunu siz etməlisiniz.
AI sadəcə sizin üçün kod yazma prossesini sürətləndirməlidir.

---

## 6. Mühəndis Təfəkkürü formalaşdırmaq.

Yazının sonuna yaxınlaşarkən sizə ən böyük tövsiyəm budur: Heç vaxt bir dilin
fanatı olmayın. Dillər sadəcə alətdir. Bu gün Java ilə yaxşı maaş qazanırsınız,
sabah bazar Python tələb edə bilər. Əgər fundamentləriniz (Mərhələ 2 və 4)
güclüdürsə, bir dildən digərinə keçmək cəmi bir neçə həftənizi alacaq.

Sənaye mühəndisləri sevir. Mühəndis odur ki, sistemin necə işlədiyini bilir,
AI-ni özünə alət edir və hər zaman yeni şeylər öyrənməyə acdır.

---

## 7. Özünü İnkişaf üçün Əlavə Addımlar

Yuxarıda danışdıqlarımız texniki yol xəritəsidir. Amma sizi digərlərindən
fərqləndirəcək bəzi əlavə addımlar da var:

- **Şəxsi Portfolio Saytı Qurun:** Özünüzü təqdim etməyi öyrənin. GitHub
  profilinizlə yanaşı, öz domain-ə sahib sadə bir portfolio saytı sizin vizit
  kartınızdır.
- **Mühəndislik Bloqlarını Oxuyun:** HackerNews kimi platformaları, fərqli
  mühəndislərin bloqlarını izləyin. Amma oxuduğunuz hər şeyi olduğu kimi qəbul
  etməyin — kritik düşünün, məntiqli və praktik olan hissələri götürün.
- **Kitab Oxuyun:** Yalnız dərsliklərlə kifayətlənməyin. Proqramlaşdırma və
  mühəndisliyə aid kitablar sizə daha dərin perspektiv qazandırır.
- **roadmap.sh-dən istifadə edin:** Hansı sahəyə yönəlmək istədiyinizi
  bilmirsinizsə və ya strukturlaşdırılmış plan axtarırsınızsa, roadmap.sh pis
  başlanğıc nöqtəsi deyil.
- **Yazın və Paylaşın:** Səmimi məqalələr yazın — istər kodlar.az-da, istər
  sosial şəbəkədə, istərsə də şəxsi dəftərinizdə. Yazmaq düşüncəni
  sistemləşdirir.
- **Mühəndis Dəftəri Saxlayın:** Bir çox təcrübəli mühəndisin şəxsi qeydlər
  dəftəri olur. Öyrəndiklərinizi, etdiyiniz səhvləri, çıxardığınız nəticələri
  yazın. Məsələn: https://ntietz.com/blog/using-an-engineering-notebook/

Unutmayın: Öyrənmək passiv proses deyil. Oxumaq, yazmaq, tətbiq etmək və
düşünmək birlikdə sizi real mühəndisə çevirir.
