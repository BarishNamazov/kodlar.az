---
title: "Haskell Dili: Funksional Proqramlaşdırmaya Giriş"
author: "ziya-mammadov"
description:
  "Bu məqalədə biz proqramlaşdırma dünyasının ən maraqlı və intellektual zəngin
  dillərindən biri olan Haskell haqqında danışacağıq."
date: 2026-02-12
categories: [Proqram Dilləri]
---

> "Dil bizim necə düşündüyümüzü formalaşdırır və nə haqqında düşünə biləcəyimizi
> müəyyən edir".

Benjamin Lee Whorf-un bu fikri proqramlaşdırma dünyasında bəlkə də ən çox
**Haskell** dilinə yaraşır. Deyə bilərəm ki, Haskell sadəcə yeni bir sintaksis
öyrənmək deyil, həm də hesablama prosesinə tamamilə fərqli bir rakursdan
baxmaqdır. Əgər siz dəyişənlərin (variables) daim dəyişdiyi, dövrlərin (loops)
hər addımda vəziyyəti yenilədiyi dünyadan gəlirsinizsə, Haskell sizə başlanğıcda
bir az sirli, lakin inanılmaz dərəcədə güclü kainat vəd edir.

## Haskell-in Mahiyyəti: Funksional Yanaşma

Haskell təmiz **funksional proqramlaşdırma** (FP) dilidir. Yəni burada biz
kompüterə addım-addım nə edəcəyini (imperativ) demirik, sadəcə problemin özünü
(deklarativ) təsvir edirik. FP dili proqramçını məlumatlara bütöv bir obyekt
kimi baxmağa sövq edir, onu hissə-hissə emal etməyə yox.

Haskell-in sənayedəki tətbiqi də az deyil. Facebook-un
[Haxl](https://github.com/facebook/Haxl) kitabxanasından tutmuş,
[Cardano](https://cardano.org) kimi kriptovalyuta platformalarına, Barclays və
Standard Chartered kimi maliyyə nəhənglərinə qədər bir çox yer daxili
sistemlərin təhlükəsizliyi üçün bu dili seçir. Edinburgh, Oxford və Cambridge
kimi nüfuzlu universitetlərdə proqramlaşdırmanın ilk olaraq Haskell ilə
öyrədilməsi, tələbələri ən başından analitik düşünməyə alışdırır.

## Əsas Xüsusiyyətlər: Gecikmiş Hesablama və Güclü Tiplər

Haskell-i fərqləndirən bir neçə məqam var:

1.  **Güclü Tip Sistemi:** Haskell-də hər bir dəyərin bir tipi var (`v :: t`).
    Məsələn, `42 :: Int` və ya `sqrt :: Float -> Float`. Bu tip sistemi proqram
    hələ işə düşmədən bir çox xətaları tutur.
2.  **Gecikmiş Hesablama (Lazy Evaluation):** Haskell bir ifadənin nəticəsinə
    ehtiyac duyulmayana qədər onu hesablamır. Bu xüsusiyyət bizə **sonsuz
    siyahılarla** (infinite lists) işləmək imkanı verir. Məsələn, `[0..]`
    yazaraq sıfırdan sonsuzluğa qədər uzanan bir siyahı yarada bilərsiniz, lakin
    Haskell ondan yalnız sizə lazım olan hissəni götürəcək.
3.  **Rekursiya:** Haskell-də `for` və ya `while` dövrləri yoxdur. Hər şey
    rekursiya üzərində qurulub. Bir siyahını emal etmək üçün onu boş siyahı `[]`
    və ya "baş" (head) və "quyruq" (tail) hissələrinə `(x:xs)` (x -> head & xs
    -> tail) parçalayırıq.

## Tip Təhlükəsizliyi və Cəbri Məlumat Tipləri

Mənim üçün Haskell-in ən gözəl tərəfi **Cəbri Məlumat Tipləridir** (ADT -
Algebraic Data Type)[^burada "cəbri" sözü bu tiplərin üzərində apa bildiyimiz
riyazi əməllərdən gəlir]. Biz öz dünyamızı çox dəqiq modelləşdirə bilirik.
Məsələn, bir proqramda dəyərin olub-olmaması (null problemi) bir çox dildə
işgəncədir. Haskell-də isə `Maybe a` tipi var: ya `Just a` (dəyər var), ya da
`Nothing` (dəyər yoxdur). Bu, sizi hər ehtimalı nəzərə almağa məcbur edir və
proqramın gözlənilmədən çökməsinin qarşısını alır.

Həmçinin, `type` və `data` açar sözləri ilə yeni tiplər yarada, hətta məntiqi
ifadələr və ya riyazi ifadə ağacları kimi mürəkkəb strukturlar qura bilərik.

## Dərin Riyazi və Tarixi Köklər

Haskell-in gücü yalnız dizayndan yox, dərin elmi köklərdən gəlir.

1. **Lambda Kalkulusu:** Haskell-in nəzəri əsası lambda kalkulusudur. Bu sistem
   1930-cu illərdə Alonzo Church tərəfindən yaradılıb. `\x -> x * 2`: Buradakı
   `\` simvolu əslində **λ** (lambda) hərfinin klaviatura versiyasıdır.
2. **Currying və Funksional Məntiq:** Haskell-də funksiyalar currying prinsipi
   ilə işləyir. Funksiyanın işləyişi belədir: `add :: Int -> Int -> Int` Əslində
   isə: `Int -> (Int -> Int)` Funksiyaların arqumentlərini hissə-hissə ötürmək
   texnikası "currying" adlanır.

   > **Maraqlı Fakt:** Bu gün Haskell-də təbii qəbul etdiyimiz "currying"
   > ideyası yarananda ortada nə müasir proqramlaşdırma dilləri var idi, nə də
   > kompüterlər. Bu yanaşma XX əsrin əvvəllərində insanın məntiqi düşüncə
   > tərzini modelləşdirmək üçün irəli sürülmüşdü. Dilin adını aldığı Haskell
   > Curry bu fikri sonralardan sistemləşdirsə də, konseptin əsasları **Moses
   > Schönfinkel** və **Gottlob Frege** kimi alimlərin işlərinə dayanır. Bu
   > səbəbdən Haskell-də yazılan kod çox vaxt riyazi sübuta bənzəyir.

3. **Peano və Rekursiv Struktur:** Haskell-in düşüncə modeli riyaziyyatdan
   gəlir. Məsələn, natural ədədlər belə modelləşdirilə bilir:
   `data Nat = Zero | Succ Nat`. Bu struktur
   [Giuseppe Peano-nun aksiomları](https://en.wikipedia.org/wiki/Peano_axioms)na
   əsaslanır.

## Praktik Nümunələr:

Gəlin Haskell-də kodun necə göründüyünü iki nümunə ilə araşdıraq.

1. Tam Funksional Üslub (Currying & Composition): Burada funksiyaları silsilə
   şəklində birləşdirilir. Bu yanaşma Haskell Curry-nin şərəfinə adlandırılan
   "Currying" prinsipini — yəni hər funksiyanın əslində bir arqument alaraq yeni
   bir funksiya qaytarmasını nümayiş etdirir.

```haskell
-- Siyahıdakı müsbət ədədlərin kvadratlarının cəmi
sumSqPositive :: [Int] -> Int
sumSqPositive = foldr (+) 0 . map (^ 2) . filter (> 0)
```

Burada `.` simvolu funksiya kompozisiyanı bildirir: məlumat filtrdən keçir, map
olunur və sonda foldr ilə toplanır. Bu kompozisiya məktəb riyaziyyatında
öyrəndiyimiz `f(g(h(x)))` kimi bir ifadəyə bənzəyir.

2. ADT ilə Strukturlaşdırılmış Yanaşma: Bu üslub OOP-dəki siniflərə bənzəyir,
   lakin daha zəngindir.

```haskell
data Shape = Circle Float | Rect Float Float deriving (Show)

area :: Shape -> Float
area (Circle r) = pi * r^2
area (Rect w h) = w * h
```

Bu kodda pattern matching (uyğunluq funksiyaları) istifadə olunur; Haskell
avtomatik olaraq fiqurun tipini təyin edir.

## Çətinliklər və Yayğın Səhvlər

Əlbəttə, hər şey mükəmməl deyil. Yeni başlayanlar üçün ən böyük çətinliklərdən
biri **IO (Giriş-Çıxış)** və **Monadlar** mövzusudur. Haskell "təmiz" dildir,
yəni funksiyalar kənar təsir (side effect) göstərməməlidir. Bəs onda ekrana necə
nəsə çap edək? Burada Haskell `main :: IO ()` vasitəsilə "təmiz" dünya ilə
"çirkli" real dünya arasında körpü yaradır.

Effektivlik də vacibdir. Məsələn, siyahıları birləşdirərkən (++) onları soldan
deyil, sağdan qruplaşdırmaq (məsələn, `foldr` vasitəsilə) proqramın sürətini
O(m^2 _ n)-dən O(m _ n)-ə qədər artıra bilər.

## Şəxsi Təcrübə və Öyrəndiklərim

Haskell ilə ilk tanış olduğumda "dəyişənsiz proqram olar?" deyə düşünmüşdüm.
Lakin zamanla anladım ki, dəyişənlərin vəziyyətini izləmək əvəzinə, məlumatın
axınını (data flow) düşünmək zehni daha az yorur. Haskell öyrənmək mənə digər
dillərdə (Java, Python və s.) daha təmiz və xətasız kod yazmağı öyrətdi.

## Yeni Başlayanlara Tövsiyələr

1.  **Kiçik addımlarla başlayın:** Əvvəlcə siyahılar və rekursiyanı mənimsəyin.
2.  **GHCi-dən bol istifadə edin:** GHC Hasell üçün kompilyatordur. Onun
    interaktiv versiyası GHCi adlanır. Burada "canlı" nümunələr yoxlayaraq
    funksional ideyalarımızı təsdiq edə bilərik. Bu interaktiv mühit sizin ən
    yaxın dostunuzdur, hər n kiçik funksiyanı orada yoxlayın.
3.  **Tipləri yaxşı öyrənin:** Əgər kodunuz kompilyasiya olunmursa, çox gümman
    ki, tiplərdə uyğunsuzluq var. Haskell-in xəta mesajlarını oxumağı öyrənin.
4.  **Monadlara fokuslanmayın:** Başlanğıcda monadların riyazi nəzəriyyəsini
    deyil, onların praktik olaraq proqramın axınını necə idarə etdiyini
    (məsələn, `do` notasiyası ilə) öyrənin.

## Yekun

Funksional proqramlaşdırmaya yeni başlayırsınızsa Haskell sizin üçün sadəcə bir
dil deyil, bir az qəribə, bir az da maraqlı bir təcrübə olacaq. Amma Haskell
kimi dillər problemlərə daha diqqətlə yanaşmağı, yazdığın kodun arxasında nə baş
verdiyini düşünməyi vadar edir. Bu da uzun müddətdə proqramlaşdırmaya baxışını
dəyişir.
