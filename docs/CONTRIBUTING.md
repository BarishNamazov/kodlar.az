# Töhfə Təlimatı

Bu sənəd **kodlar.az** layihəsinə töhfə vermək istəyənlər üçün rəhbərdir. Burada
qəbul olunan töhfə növləri, töhfə vermək üçün izləniləcək addımlar və layihənin
gözləntiləri barədə məlumat verilir. Bütün töhfələrdə davranış kodeksinə riayət
edilməsi vacibdir; ətraflı məlumat üçün [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
sənədinə baxın.

Əgər töhfəniz bu repozitoriyada kod dəyişikliyi edirsə, repozitoriyanı "fork"
edib, "Pull Request" (PR) yaratmaq lazım olacaq. Bu funksionallıqdan daha öncə
istifadə etməyənlər üçün
[kodlar.az saytına necə kod dəyişikləri edə bilərəm?](#) videosunda izah verilir
(TODO: video linki əlavə olunacaq).

GitHub üzərindəki
[Discussions](https://github.com/BarishNamazov/kodlar.az/discussions) bölməsi
ümumi müzakirələrə açıqdır.

## Məqalə yazmaq və ya resurs əlavə etmək

kodlar.az platforması əsasən məqalələr, söhbətlər və resurslar üzərində qurulub.
Buna görə ən dəyərli töhfələrdən biri yeni məzmun yazmaq və ya mövcud resursları
genişləndirməkdir.

Məzmun Azərbaycan dilində olmalı və kodlar.az auditoriyası üçün həqiqi dəyər
yaratmalıdır. Məqalələr həm texniki, həm də qeyri-texniki mövzularda ola bilər.

### Texniki mövzulara nümunələr

- Alqoritmlər və data strukturları (izah + tətbiq nümunələri)
- Proqramlaşdırma dilləri və ekosistemləri (məsələn, Python/JS/Go və s.)
- Sistem dizaynı, performans və optimizasiya
- Test yazmaq, debugging və ən yaxşı təcrübələr
- Təhlükəsizlik əsasları
- Git, CI/CD, deployment, konteynerləşdirmə
- Məlumat bazaları, sorğular, indekslər, transactionlar
- Bulud xidmətləri və infrastruktur
- Mühəndislik təcrübəsi: "bu səhv niyə oldu və necə düzəltdim?"
- Self-hosting və şəxsi server təcrübələri

### Qeyri-texniki mövzulara nümunələr

- Öyrənmə strategiyaları və ya resurs tövsiyələri
- Olimpiada hazırlığı, müsahibəyə hazırlıq, karyera məsləhətləri
- Karyera və peşə vərdişləri (kommunikasiya, fokus, planlama)
- Layihə yazmaq mədəniyyəti: sənədləşdirmə, təqdimat, komanda ilə işləmək
- Vaxt idarəetməsi, məhsuldarlıq üsulları
- Kompüter elmlərinin tarixi və əsas anlayışları
- Texnologiya və cəmiyyət, etik məsələlər
- Maraqlı hekayələr və şəxsi təcrübələr (özünüz yaxud başqa məşhur şəxsiyyətlər
  haqqında)

### AI (süni intellekt) istifadəsi barədə

- Məqalənin/resurs mətninin tam yazdırılması üçün AI istifadə etməməyi tövsiyə
  edirik.
- Amma AI-dan qrammatika yoxlaması, üslubun cilalanması, terminlərin
  dəqiqləşdirilməsi, mətnin anlaşılma səviyyəsinin qiymətləndirilməsi kimi
  məqsədlərlə istifadə etmək normaldır.
- Bu tələb sərt qayda deyil. Məqsədimiz məzmunu təbii saxlamaq və AI söhbətinin
  verə bilmədiyi real təcrübə qatını qorumaqdır. AI-dan faydalı istifadə
  üsullarınız varsa, ən yaxşısı bunu
  [GitHub Discussions](https://github.com/BarishNamazov/kodlar.az/discussions)
  bölməsində paylaşmaqdır.

### Tövsiyə olunan proses

Əgər ilk dəfə töhfə verirsinizsə, aşağıdakı addımları izləməyiniz tövsiyə
olunur:

- Başlamazdan əvvəl qısa mövzu təklifi (auditoriya, səviyyə, plan/başlıqlar) ilə
  [Discussions](https://github.com/BarishNamazov/kodlar.az/discussions)-da
  müzakirə açın.
- Resurs əlavə edirsinizsə: link + qısa izah (kimlər üçündür, nə verir, hansı
  ilkin biliklər tələb edir) yazın.
- Hazır olanda PR ilə göndərin; mövcud resursa əlavələr edirsinizsə,
  dəyişikliklərinizin məqsədini və səbəbini qısa şəkildə qeyd edin.

### Məqaləni göndərmək

Məqaləni göndərməyin əsas yolu PR (Pull Request) yaratmaqdır. Əgər
proqramlaşdırma ilə məşğul olursunuzsa, mütləq bu yolla göndərin. Əgər `git`
texnologiyasından istifadə edə bilmirsinizsə (texniki maneələr və ya digər
səbəblər), [Discussions](https://github.com/BarishNamazov/kodlar.az/discussions)
bölməsində öz məqalənizi paylaşa bilərsiniz; bu halda idarəçilər sizin adınıza
PR yarada bilərlər.

Məqalənizi PR kimi göndərmək üçün aşağıdakı addımları izləyin:

- Repozitoriyanı "fork" edin.
- Yeni bir "branch" yaradın.
- Əgər lazımdırsa, özünüz üçün [`src/content/authors/`](../src/content/authors/)
  qovluğuna yeni Markdown faylı əlavə edin. Faylın adı sizin müəllif slug-ınız
  olmalıdır (məsələn, `ad-soyad.md`). Frontmatter-da `name` (ad), `avatar`
  (şəkil faylının adı, istəyə bağlı) və `links` (GitHub, LinkedIn, website) qeyd
  edin; kontent hissəsinə isə qısa bio yazın. Mövcud müəllif fayllarına baxaraq
  nümunə götürə bilərsiniz.
- Məqaləni Markdown formatında [`blog`](../src/content/blog/) qovluğuna əlavə
  edin. Faylın adı `YYYY-MM-DD-meqale-basligi.md` formatında olmalıdır. Digər
  məqalələrə baxaraq nümunə götürə bilərsiniz. Əgər məqalənizi xüsusi resurs
  kimi əlavə edirsinizsə, "frontmatter" meta məlumatında `resource: true`
  sahəsini əlavə edin.
- [TECHNICAL.md](TECHNICAL.md) sənədində izah olunan qaydalara uyğun olaraq
  lokal mühitdə məqaləni yoxlayın, formatlama və lint yoxlamasından keçirin.
- Dəyişiklərinizi "commit" edin və öz branch-ınıza "push" edin.
- Əsas repozitoriyaya PR yaradın və dəyişikliklərinizi təsvir edin.
- Əgər idarəçilər tərəfindən rəylər verilərsə, onlara cavab verin və lazım
  olduqda düzəlişlər edin. Düzəlişləri öz branch-ınıza "push" edin; PR avtomatik
  olaraq yenilənəcək.

## Yazı səhvlərini və terminologiyanı düzəltmək

Məqalələrdə və resurslarda olan yazı səhvləri, dil və üslub düzəlişləri,
terminologiyanın standartlaşdırılması, işləməyən linklər və oxunaqlılıqla bağlı
kiçik düzəlişlər hər zaman xoş qarşılanır.

Belə düzəlişlər üçün bu sənəddə daha öncə izah olunan qayda ilə PR (Pull
Request) yaradın və təsvirində:

- nələri dəyişdirdiyinizi,
- dəyişikliklərin məqsədini (məsələn: "terminləri vahidləşdirdim", "imla
  düzəlişləri etdim", "qırıq linki yenilədim")

qısa şəkildə qeyd edin.

## Bug fix-lər və faydalı funksionallıq

Kod bazasına edilən dəyişikliklər (bug fix və ya yeni/faydalı funksionallıq) çox
dəyərlidir. Amma belə işlərdə məqsədimiz təkrarı azaltmaq və düzgün istiqamətdə
hərəkət etməkdir.

### Bug fix

- Əvvəlcə problemi
  [GitHub Discussions](https://github.com/BarishNamazov/kodlar.az/discussions)
  bölməsində paylaşın və həqiqətən bug olduğunu birlikdə dəqiqləşdirək
  (reproduksiya addımları, gözlənilən faktiki davranış, mümkün olduqda ekran
  görüntüsü və ya loglar).
- Bug təsdiqləndikdən sonra düzəliş üçün PR hazırlaya bilərsiniz.

### Yeni funksiya və ya dəyişiklik

Yeni funksiya, davranış dəyişikliyi, refaktor və ya böyük dəyişikliklər
planlayırsınızsa, işə başlamazdan əvvəl mütləq
[Discussions](https://github.com/BarishNamazov/kodlar.az/discussions)-da qısa
müzakirə açın: məqsəd, səbəb, təsir sahəsi və alternativlər barədə razılaşmaq
daha sonra həm sizə, həm də idarəçilərə vaxt qazandırır.

## Söhbətlər

Maraqlı bir təcrübəniz, öyrəndikləriniz və ya paylaşmağa dəyər hekayəniz varsa,
sizi kodlar.az söhbətində qonaq görməkdən məmnun olarıq. Mövzular texniki də ola
bilər, qeyri-texniki də — əsas odur ki, dinləyiciyə real dəyər versin və şəxsi
təcrübəyə dayansın.

Qonaq olmaq istəyirsinizsə, [SUPPORT.md](SUPPORT.md) sənədində göstərilən əlaqə
kanalları vasitəsilə bizə yazın.

Əlavə olaraq, danışmağa dəyər insanları da tövsiyə edə bilərsiniz:
[GitHub Discussions](https://github.com/BarishNamazov/kodlar.az/discussions)
bölməsində qısa təqdimatla (kimdir, hansı mövzuda maraqlıdır, niyə dəyərlidir)
paylaşın. Uyğun olarsa, idarəçi komanda olaraq həmin şəxslə əlaqə saxlaya
bilərik.

## Təkliflər və rəy

Layihə ilə bağlı istənilən təklif, rəy və ya sualınızı GitHub üzərindəki
[Discussions](https://github.com/BarishNamazov/kodlar.az/discussions) bölməsində
paylaşa bilərsiniz. İdeya, problem təsviri və ya məzmun təklifi formasında
yazmağınız kifayətdir.

## Sponsorluq və maddi dəstək

kodlar.az qeyri-kommersiya yanaşması ilə icma tərəfindən inkişaf etdirilir.
Layihəni maddi olaraq dəstəkləmək istəyirsinizsə, [SUPPORT.md](SUPPORT.md)
sənədində göstərilən əlaqə kanalları vasitəsilə bizimlə əlaqə saxlayın. Əgər
imkanınız varsa və layihədən faydalanırsınızsa, hər hansı məbləğdə dəstəyiniz
çox dəyərlidir!

Dəstək göstərənlərə platformada xüsusi bir **təşəkkür qeydi** əlavə olunacaq.
Toplanan vəsait tam şəkildə platformanın yaxşılaşdırılmasına (xidmət xərcləri,
infrastruktur, kontent yaradılması və s.) yönəldilir.
