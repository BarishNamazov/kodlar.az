---
title: "Haskell: Proqramlaşdırma Təfəkkürünüzü Dəyişəcək Dil"
author: "ziya-mammadov"
description: "Bu məqalədə biz proqramlaşdırma dünyasının ən maraqlı və intellektual zəngin dillərindən biri olan Haskell haqqında danışacağıq."
date: 2026-02-12
categories: [Proqramlaşdırma Dilləri]
---

> "Dil bizim necə düşündüyümüzü formalaşdırır və nə haqqında düşünə biləcəyimizi müəyyən edir". 

Benjamin Lee Whorf-un bu fikri proqramlaşdırma dünyasında bəlkə də ən çox **Haskell** dilinə yaraşır. Deyə bilərəm ki, Haskell sadəcə yeni bir sintaksis öyrənmək deyil, həm də hesablama prosesinə tamamilə fərqli bir rakursdan baxmaqdır. Əgər siz dəyişənlərin (variables) daim dəyişdiyi, dövrlərin (loops) hər addımda vəziyyəti yenilədiyi dünyadan gəlirsinizsə, Haskell sizə başlanğıcda bir az sirli, lakin inanılmaz dərəcədə güclü kainat vəd edir.

### Haskell-in Mahiyyəti: Funksional Yanaşma

Haskell təmiz **funksional proqramlaşdırma** (FP) dilidir. Yəni burada biz kompüterə addım-addım nə edəcəyini (imperativ) demirik, sadəcə problemin özünü (deklarativ) təsvir edirik. FP dili proqramçını məlumatlara bütöv bir obyekt kimi baxmağa sövq edir, onu hissə-hissə emal etməyə yox.

Haskell-in sənayedəki tətbiqi də az deyil. Facebook-un **Haxl** kitabxanasından tutmuş, **Cardano** kimi kriptovalyuta platformalarına, Barclays və Standard Chartered kimi maliyyə nəhənglərinə qədər bir çox yer daxili sistemlərin təhlükəsizliyi üçün bu dili seçir. Edinburgh, Oxford və Cambridge kimi nüfuzlu universitetlərdə proqramlaşdırmanın ilk olaraq Haskell ilə öyrədilməsi, tələbələri ən başından analitik düşünməyə alışdırır.

### Əsas Xüsusiyyətlər: Tənbəllik və Güclü Tiplər

Haskell-i fərqləndirən bir neçə məqam var:

1.  **Güclü Tip Sistemi:** Haskell-də hər bir dəyərin bir tipi var (`v :: t`). Məsələn, `42 :: Int` və ya `sqrt :: Float -> Float`. Bu tip sistemi proqram hələ işə düşmədən bir çox xətaları tutur.
2.  **Tənbəl Hesablama (Lazy Evaluation):** Haskell bir ifadənin nəticəsinə ehtiyac duyulmayana qədər onu hesablamır. Bu xüsusiyyət bizə **sonsuz siyahılarla** (infinite lists) işləmək imkanı verir. Məsələn, `[0..]` yazaraq sıfırdan sonsuzluğa qədər uzanan bir siyahı yarada bilərsiniz, lakin Haskell ondan yalnız sizə lazım olan hissəni götürəcək.
3.  **Rekursiya:** Haskell-də `for` və ya `while` dövrləri yoxdur. Hər şey rekursiya üzərində qurulub. Bir siyahını emal etmək üçün onu boş siyahı `[]` və ya "baş" (head) və "quyruq" (tail) hissələrinə `(x:xs)` (x -> head & xs -> tail) parçalayırıq.

### Tip Təhlükəsizliyi və Algebrayik Məlumat Tipləri

Mənim üçün Haskell-in ən gözəl tərəfi **Algebrayik Məlumat Tipləridir** (ADT - Algebraic Data Type). Biz öz dünyamızı çox dəqiq modelləşdirə bilirik. Məsələn, bir proqramda dəyərin olub-olmaması (null problemi) bir çox dildə işgəncədir. Haskell-də isə `Maybe a` tipi var: ya `Just a` (dəyər var), ya da `Nothing` (dəyər yoxdur). Bu, sizi hər ehtimalı nəzərə almağa məcbur edir və proqramın gözlənilmədən çökməsinin qarşısını alır.

Həmçinin, `type` və `data` açar sözləri ilə yeni tiplər yarada, hətta məntiqi ifadələr və ya riyazi ifadə ağacları kimi mürəkkəb strukturlar qura bilərik.

### Dərin Riyazi və Tarixi Köklər

Haskell-in gücü yalnız dizayndan yox, dərin elmi köklərdən gəlir.

1. **Lambda Kalkulusu:** Haskell-in nəzəri əsası lambda kalkulusudur. Bu sistem 1930-cu illərdə Alonzo Church tərəfindən yaradılıb. <br>
`\x -> x * 2`: Buradakı `\` simvolu əslində **λ** (lambda) hərfinin klaviatura versiyasıdır.
2. **Currying və Funksional Məntiq:** Haskell-də funksiyalar currying prinsipi ilə işləyir. <br>
Funksiyanın işləyişi belədir: `add :: Int -> Int -> Int`
Əslində isə: `Int -> (Int -> Int)`
Funksiyaların arqumentlərini hissə-hissə ötürmək texnikası "currying" adlanır.
>__Maraqlı Fakt:__ </br> Bu gün Haskell-də təbii qəbul etdiyimiz "currying" ideyası yarananda ortada nə müasir proqramlaşdırma dilləri var idi, nə də kompüterlər. Bu yanaşma XX əsrin əvvəllərində insanın məntiqi düşüncə tərzini modelləşdirmək üçün irəli sürülmüşdü. Dilin adını aldığı Haskell Curry bu fikri sonralardan sistemləşdirsə də, konseptin əsasları **Moses Schönfinkel** və **Gottlob Frege** kimi alimlərin işlərinə dayanır. Bu səbəbdən Haskell-də yazılan kod çox vaxt riyazi sübuta bənzəyir.

3. **Peano və Rekursiv Struktur:** Haskell-in düşüncə modeli riyaziyyatdan gəlir.
Məsələn, natural ədədlər belə modelləşdirilə bilir: `data Nat = Zero | Succ Nat` <br>
Bu struktur [Giuseppe Peano-nun aksiomları](https://en.wikipedia.org/wiki/Peano_axioms)na əsaslanır.

### Praktik Nümunələr: Qısa və Effektiv

Haskell-də kodun nə qədər yığcam olduğuna baxaq. Siyahıdakı tək ədədlərin kvadratlarının cəmini tapmaq istəyirsinizsə, bunu cəmi bir sətirlə edə bilərsiniz:
`sumSqOdd xs = sum [ x*x | x <- xs, odd x ]`.
Burada **List Comprehension** (siyahı qavrayışı) dediyimiz riyazi çoxluq sintaksisindən istifadə olunur.

Yüksək dərəcəli funksiyalar (Higher-order functions) — `map`, `filter` və `fold` — Haskell-in ürəyidir. Onlar funksiyaları başqa funksiyalara arqument kimi ötürməyə imkan verir, bu da kodu həm modul, həm də təkrar istifadəyə yararlı edir.

### Çətinliklər və Yayğın Səhvlər

Əlbəttə, hər şey mükəmməl deyil. Yeni başlayanlar üçün ən böyük çətinliklərdən biri **IO (Giriş-Çıxış)** və **Monadlar** mövzusudur. Haskell "təmiz" dildir, yəni funksiyalar kənar təsir (side effect) göstərməməlidir. Bəs onda ekrana necə nəsə çap edək? Burada Haskell `main :: IO ()` vasitəsilə "təmiz" dünya ilə "çirkli" real dünya arasında körpü yaradır.

Effektivlik də vacibdir. Məsələn, siyahıları birləşdirərkən (++) onları soldan deyil, sağdan qruplaşdırmaq (məsələn, `foldr` vasitəsilə) proqramın sürətini O(m^2 * n)-dən O(m * n)-ə qədər artıra bilər.

### Şəxsi Təcrübə və Öyrəndiklərim

Haskell ilə ilk tanış olduğumda "dəyişənsiz proqram olar?" deyə düşünmüşdüm. Lakin zamanla anladım ki, dəyişənlərin vəziyyətini izləmək əvəzinə, məlumatın axınını (data flow) düşünmək zehni daha az yorur. Haskell öyrənmək mənə digər dillərdə (Java, Python və s.) daha təmiz və xətasız kod yazmağı öyrətdi. **QuickCheck** kimi alətlərlə proqramın doğruluğunu 100-lərlə testlə avtomatik yoxlamaq isə insana inanılmaz bir əminlik hissi verir.

### Yeni Başlayanlara Tövsiyələr

1.  **Kiçik addımlarla başlayın:** Əvvəlcə siyahılar və rekursiyanı mənimsəyin.
2.  **GHCi-dən qorxmayın:** Bu interaktiv mühit sizin ən yaxın dostunuzdur, hər kiçik funksiyanı orada yoxlayın.
3.  **Tipləri izləyin:** Əgər kodunuz kompilyasiya olunmursa, çox gümman ki, tiplərdə uyğunsuzluq var. Haskell-in xəta mesajlarını oxumağı öyrənin.
4.  **Monadlara fokuslanmayın:** Başlanğıcda monadların riyazi nəzəriyyəsini deyil, onların praktik olaraq proqramın axınını necə idarə etdiyini (məsələn, `do` notasiyası ilə) öyrənin.

### Yekun

Haskell sadəcə bir dil deyil, FP yeni başlayanlar üçün bir intellektual macəradır. O, sizi çətinə salacaq, təfəkkürünüzü sorğulayacaq, lakin sonda sizi daha peşəkar bir proqramçıya çevirəcək. "Sizin proqramlaşdırma haqqında düşüncənizə təsir etməyən dil, öyrənməyə dəyməz". Haskell isə mütləq dəyər.