# Texniki Məlumatlar

Bu sənəd **kodlar.az** platformasının texniki infrastrukturu, istifadə olunan
texnologiyalar və layihənin lokal mühitdə işə salınması qaydalarını əhatə edir.

Məqsədimiz platformanı mümkün qədər sadə, sürətli və davamlı saxlamaqdır.

## Dizayn Fəlsəfəsi

**kodlar.az** tamamilə statik veb sayt (Static Site) olaraq dizayn edilib.
Layihənin arxa fonunda işləyən dinamik bir server (backend), verilənlər bazası
(database) və ya mürəkkəb idarəetmə paneli yoxdur.

Bu yanaşmanın əsas üstünlükləri:

- **Sürət:** Bütün səhifələr əvvəlcədən yaradılır və istifadəçiyə hazır HTML
  kimi çatdırılır.
- **Təhlükəsizlik:** Server tərəfində kod icra olunmadığı üçün təhlükəsizlik
  riskləri minimuma enir.
- **Sadəlik:** Bütün layihə özünü təmin edən (self-contained) bir
  repozitoriyadan ibarətdir. Məqalələr və resurslar sadəcə Markdown fayllarıdır.

## Texnoloji Seçimlər

### Framework: Astro

Saytın qurulması üçün **Astro** framework-ündən istifadə olunur. Astro, müasir
veb standartlarına uyğun gələn və məzmun yönümlü saytlar üçün ideal həllərdən
biridir.

#### Niyə Jekyll, Hugo və ya Eleventy yox, məhz Astro?

- **Müasir ekosistem:** Jekyll (Ruby) kimi köhnə asılılıqlar tələb etmir və
  Eleventy-dən fərqli olaraq daha müasir komponent yanaşmasını dəstəkləyir.
- **Performans:** Astro "Zero JS by default" prinsipi ilə işləyir. Lazımsız
  JavaScript göndərilmədiyi üçün sayt çox sürətli açılır.
- **Dəstək və gələcək:** Astro-nun Cloudflare tərəfindən satın alınması,
  framework-ün gələcəyinin stabil və uzunmüddətli olduğunu göstərir.

### İşləmə Mühiti (Runtime): Bun

Layihədə paketləri idarə etmək və skriptləri işlətmək üçün Node.js əvəzinə
**Bun** istifadə olunur.

**Səbəb:** Bun, Node.js-dən xeyli sürətlidir. Paketlərin yüklənməsi və layihənin
işə salınması vaxtını əhəmiyyətli dərəcədə azaldır.

## Kod Keyfiyyəti (Linting & Formatting)

Kodun oxunaqlı və səliqəli qalması üçün **ESLint** və **Prettier** alətlərindən
istifadə olunur. Bu alətlər sintaksis səhvlərini və formatlama uyğunsuzluqlarını
avtomatik aşkarlayır.

## Yerləşdirmə və İnfrastruktur (Deployment)

Sayt **Cloudflare Pages** üzərində yerləşir.

- **Qlobal CDN:** Cloudflare-in geniş CDN şəbəkəsi sayəsində sayt dünyanın
  istənilən yerindən sürətli açılır.
- **Xərcsiz:** İnfrastruktur tamamilə pulsuzdur. Yeganə potensial xərc build
  vaxtı ola bilər, lakin Astro və Bun sayəsində bu müddət çox qısadır.

GitHub-a hər yeni `push` edildikdə, Cloudflare saytı avtomatik olaraq yenidən
qurur və yayımlayır.

## Şərhlər və Reaksiyalar

Bloqlara yazılan şərhlər və reaksiyalar üçün **Giscus** inteqrasiya olunub.
Giscus, GitHub Discussions əsasında işləyən bir şərh sistemidir.

Giscus istifadəsi sayəsində biz heç bir xüsusi backend və ya verilənlər bazası
qurmağa ehtiyac duymuruq. Şərhlər və reaksiyalar GitHub Discussions-da
saxlanılır və idarə olunur, bu da həm təhlükəsiz, həm də istifadəsi asan bir
həll təmin edir.

## Lokal İnkişaf Mühiti (Development)

Layihəni lokal mühitdə işə salmaq üçün aşağıdakı addımları izləyin.

### 1. Bun-un quraşdırılması

Əgər sisteminizdə Bun yoxdursa, macOS, Linux və WSL üçün:

```bash
curl -fsSL https://bun.sh/install | bash
```

Windows istifadəçiləri üçün WSL tövsiyə olunur.

### 2. Asılılıqların yüklənməsi

Repozitoriyanı klonladıqdan sonra:

```bash
bun install
```

### 3. Lokal serverin işə salınması

```bash
bun dev
```

Sayt adətən `http://localhost:4321` ünvanında açılır və dəyişikliklər dərhal əks
olunur.

### 4. Kodun yoxlanması

Commit etməzdən əvvəl:

```bash
bun check
```

Bu əmr kodu formatlayır və mümkün xətaları avtomatik olaraq düzəldir.
