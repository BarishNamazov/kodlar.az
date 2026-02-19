---
title: "The Missing Semester — Kompüter Elminin Çatışmayan Semestri"
author: "ziya-mammadov"
description:
  "MIT-in 'The Missing Semester of Your CS Education' kursu ilə tanış olun. Proqramçıların ehtiyac duyduğu, lakin universitetlərdə öyrədilməyən vacib alətlər və texnikalar
  haqqında məqalə."
date: 2026-02-13
categories: [Kompüter Elmləri]
---

## Nəzəriyyə və Praktika

Ənənəvi kompüter elmləri (Computer Science) təhsili zamanı tələbələr adətən
Əməliyyat Sistemləri, Proqramlaşdırma Dilləri və Maşın Öyrənməsi kimi mürəkkəb
və qabaqcıl mövzuları dərindən öyrənirlər. Lakin bir çox ali təhsil
müəssisələrində nadir hallarda toxunulan, əvəzində isə tələbələrin özbaşına
öyrənməsinə buraxılan fundamental bir çatışmazlıq mövcuddur: ekosistemi
savadlılığı. Biz alqoritmlərin zaman mürəkkəbliyini hesablamağı bilsək də,
gündəlik işimizdə istifadə etdiyimiz alətlərə nə dərəcədə hakimik?

Kompüterlər işlərimizi avtomatlaşdırmaq üçün yaradılıb, lakin, bir çox tələbə hələ
də təkrarlanan tapşırıqları əllə yerinə yetirir və ya versiya nəzarəti (version
control) və mətn redaktorları kimi güclü alətlərin potensialından tam istifadə
edə bilmir.

Çox vaxt faylları qarışdırırıq və ya “mənim kompüterimdə işləyirdi” problemi ilə
üzləşirik. Halbuki bu işlərin çoxu asanlıqla avtomatlaşdırıla bilər.

**MIT** tərəfindən hazırlanan ["The Missing Semester of Your CS Education"](https://missing.csail.mit.edu/) **(Kompüter
Elmləri Təhsilinizin Çatışmayan Semestri)** kursu məhz bu boşluğu doldurmaq üçün
yaradılmışdır.

## Kursun Məqsədi

Bu kursun əsas məqsədi sadədir: səni alətlərlə daha rahat və daha ağıllı işləyən
proqramçıya çevirmək.

Proqramçılar təhsil illəri ərzində bu alətlərdən yüzlərlə, karyeraları boyunca
isə minlərlə saat istifadə edirlər. Ona görə də bu təcrübəni mümkün qədər
effektiv etmək lazımdır.

Kursun yaradıcıları – Anish, Jon və Jose – tələbələrin sadəcə əmrləri əzbərləyib
internetdən kor-koranə kod kopyalamasını yox, alətlərin mahiyyətini anlayaraq
onlardan maksimum yararlanmasını istəyirlər.

## Kursun Əsas Mövzuları

"The Missing Semester" kursu 6 əsas mövzudan ibarətdir və hər bir mövzu
proqramçının gündəlik fəaliyyətində kritik rol oynayır:

1. **Shell (Əmr Sətri):** Qrafik interfeyslər (GUI) nə qədər cəlbedici
   olsa da, onlar proqramlaşdırılmamış funksiyalarla məhdudlaşır. Shell isə
   proqramları yaradıcı şəkildə birləşdirməyə və istənilən tapşırığı
   avtomatlaşdırmağa imkan verir. Kursda bash, zsh kimi mühitlərdə naviqasiya,
   əmrlərin avtomatlaşdırılması və skriptlərin yazılması öyrədilir.
2. **Versiya Nəzarəti (Git):** Kodun içində böyük şərhlər saxlamağın və ya
   səhvən silinən kodlara son qoyur. Git-in qabaqcıl funksiyaları, `git bisect`
   ilə xətaların tapılması və pull request-lər vasitəsilə açıq mənbəli
   layihələrə töhfə vermə yolları araşdırılır.
3. **Mətn Redaktəsi (Vim):** Faylları həm lokal, həm də uzaq serverlərdə sürətlə
   redaktə etmək üçün Vim makroları və qabaqcıl funksiyalar öyrədilir.
4. **Uzaqdan idarə etmə və Terminal Multiplexing:** SSH [^1] açarları ilə
   təhlükəsiz bağlantı və tmux kimi alətlərlə uzaq serverlərdə session-ların
   idarə olunması qaydaları izah edir.
5. **Məlumatların Emalı (Data Wrangling):** Log fayllarını əllə kopyalayıb
   Excel-də analiz etmək yerinə, əmr sətrindən istifadə edərək məlumatların
   filterlənməsi, formatlanması və vizuallaşdırılması öyrədilir.
6. **Kod Keyfiyyəti:** Linting [^2], avtomatik formatlaşdırma və
   davamlı inteqrasiya (CI) alətlərindən istifadə etməklə kodun stabil, oxunaqlı
   və müxtəlif mühitlərdə işləməsi təmin edilir.

## Süni İntellekt Dövründə Bu Kursun Əhəmiyyəti

Müasir proqram təminatı mühəndisliyi süni intellekt tərəfindən sürətlə dəyişir.
Bəziləri düşünə bilər ki, AI hər şeyi bizim yerimizə edirsə, bu alətləri
öyrənməyə nə ehtiyac var? Lakin kursun müəllifləri fərqli düşünür: AI alətlərini
düzgün və onların çatışmazlıqlarını bilərək istifadə etmək proqramçılara böyük
üstünlük verir.

"The Missing Semester" kursunun 2026-cı il seriyasında süni intellekt mövzusu
ayrı bir mövzu kimi deyil, bütün mövzuların tərkibinə daxil edilmişdir. Bu,
AI-nın "çapraz funksional imkan verən texnologiya" (cross-functional enabling
technology) olduğunu vurğulayır. AI-dan agentik kodlaşdırma (agentic coding)
məqsədilə istifadə etmək, əslində əmr sətrinə və ekosistemə daha dərindən bələd
olmağı tələb edir.

## Niyə Bu Kurs Azərbaycanda CS təhsili alanlar Üçün Vacibdir?

Azərbaycandakı icma və tələbələr üçün MIT-in bu resursu əvəzolunmazdır.
Ölkəmizdə proqramlaşdırma təhsili və özəl kurslar çox vaxt konkret bir dilin
(Python, Java, C#) sintaksisini öyrətməyə fokuslanır. Lakin gənc mütəxəssislər
real iş mühitinə daxil olduqda, serverlərlə işləmək, mürəkkəb git konfliktlərini
həll etmək və ya minlərlə sətirlik log fayllarını analiz etmək məqamında
çətinlik çəkirlər.

## Nəticə və Çağırış

MIT-in bu kursu tamamilə ödənişsizdir və bütün materiallar (videolar, qeydlər,
tapşırıqlar) hər kəs üçün açıqdır. Kursun original dili İngilis dilidir. Hazırda
Rus, Alman, Türk daxil olmaqla 14 dildə təsdiqlənmiş tərcümələri mövcuddur,
təəssüfki, kursun Azərbaycan dilində tərcüməsi mövcud deyil.

Kurs üçün MIT-in rəsmi səhifəsinə daxil olun, 2026-cı ilin yeni mühazirələrini
izləyin və tapşırıqları yerinə yetirməyə başlayın. Alətlərinizi elə mənimsəyin
ki, onlar sizə mane olmaq yerinə, düşüncələrinizin birbaşa davamına çevrilsin və
yaradıcılığınızı məhdudlaşdırmasın.

[^1]:
    Uzaq serverlərə təhlükəsiz şəkildə qoşulmaq üçün istifadə olunan
    protokoldur.

[^2]: Kodun stil və standartlara uyğunluğunu avtomatik yoxlayan alətlərdir.
