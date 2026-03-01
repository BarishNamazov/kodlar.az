export interface GlossaryTerm {
  az: string;
  en: string;
  description?: string;
  link?: string;
}

export const glossary: GlossaryTerm[] = [
  {
    az: "tıxac nəzarəti",
    en: "congestion control",
    description:
      "Şəbəkədə tıxanmanın qarşısını almaq üçün istifadə edilən mexanizmlər.",
    link: "https://en.wikipedia.org/wiki/Network_congestion#Congestion_control",
  },
  {
    az: "ACK",
    en: "acknowledgment",
    description: "TCP-də paketin qəbul olunduğunu bildirən təsdiq mesajı.",
    link: "https://datatracker.ietf.org/doc/html/rfc793",
  },
  {
    az: "RTT",
    en: "round-trip time",
    description:
      "Məlumat paketinin göndəricidən alıcıya gedib geri dönməsi üçün keçən vaxt.",
    link: "https://en.wikipedia.org/wiki/Round-trip_time",
  },
  {
    az: "ECN",
    en: "explicit congestion notification",
    description:
      "Paket itirmədən öncə şəbəkədə tıxac siqnalını işarələməklə verən mexanizm.",
    link: "https://datatracker.ietf.org/doc/html/rfc3168",
  },
  {
    az: "BBR",
    en: "bottleneck bandwidth and round-trip propagation time",
    description:
      "Ötürmə sürətini itkiyə yox, bant genişliyi və gecikmə modelinə görə tənzimləyən TCP alqoritmi.",
    link: "https://research.google/pubs/bbr-congestion-based-congestion-control-2/",
  },
  {
    az: "maşın dili",
    en: "machine language",
    description:
      "Prosessorun birbaşa icra etdiyi 0 və 1-lərdən ibarət aşağı səviyyəli təlimatlar.",
    link: "https://en.wikipedia.org/wiki/Machine_code",
  },
  {
    az: "kompilyator",
    en: "compiler",
    description:
      "Mənbə kodunu icradan əvvəl maşın koduna və ya aralıq koda çevirən proqram.",
    link: "https://en.wikipedia.org/wiki/Compiler",
  },
  {
    az: "interpretator",
    en: "interpreter",
    description:
      "Kodu adətən sətir-sətir və ya blok-blok oxuyub icra edən tərcüməçi mühit.",
    link: "https://en.wikipedia.org/wiki/Interpreter_(computing)",
  },
  {
    az: "baytkod",
    en: "bytecode",
    description:
      "Adətən virtual maşın tərəfindən icra olunan, maşın kodundan daha abstrakt aralıq kod.",
    link: "https://en.wikipedia.org/wiki/Bytecode",
  },
  {
    az: "ani kompilyasiya",
    en: "just-in-time compilation",
    description:
      "Kodu icra zamanı dinamik şəkildə kompilyasiya edib performansı artıran yanaşma.",
    link: "https://en.wikipedia.org/wiki/Just-in-time_compilation",
  },
  {
    az: "obyekt-yönümlü proqramlaşdırma",
    en: "object-oriented programming",
    description:
      "Məlumatı və davranışı obyektlər daxilində birləşdirən proqramlaşdırma paradiqması.",
    link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
  },
  {
    az: "zibil yığımı",
    en: "garbage collection",
    description:
      "İstifadə olunmayan yaddaş sahələrinin avtomatik azad edilməsi mexanizmi.",
    link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)",
  },
  {
    az: "funksional proqramlaşdırma",
    en: "functional programming",
    description:
      "Hesablamanı əsasən funksiyaların birləşməsi kimi modelləşdirən paradiqma.",
    link: "https://en.wikipedia.org/wiki/Functional_programming",
  },
  {
    az: "gecikmiş hesablama",
    en: "lazy evaluation",
    description:
      "İfadələrin nəticəsini yalnız ehtiyac yarandıqda hesablamaq prinsipi.",
    link: "https://en.wikipedia.org/wiki/Lazy_evaluation",
  },
  {
    az: "cəbri məlumat tipi",
    en: "algebraic data type",
    description:
      "Tipi bir neçə konstruktorun cəmi və ya hasilı kimi modelləşdirən tip yanaşması.",
    link: "https://en.wikipedia.org/wiki/Algebraic_data_type",
  },
  {
    az: "lambda hesablaması",
    en: "lambda calculus",
    description:
      "Funksiyaların hesablanmasını formal modelləşdirən riyazi sistem; funksional dillərin nəzəri bazasıdır.",
    link: "https://en.wikipedia.org/wiki/Lambda_calculus",
  },
  {
    az: "karriləmə",
    en: "currying",
    description:
      "Çoxarqumentli funksiyanı bir arqument qəbul edən funksiyalar zəncirinə çevirmə üsulu.",
    link: "https://en.wikipedia.org/wiki/Currying",
  },
  {
    az: "sintaktik şəkər",
    en: "syntactic sugar",
    description:
      "Eyni məntiqi daha oxunaqlı və qısa yazmağa imkan verən əlavə sintaksis forması.",
    link: "https://en.wikipedia.org/wiki/Syntactic_sugar",
  },
  {
    az: "örtük",
    en: "decorator",
    description:
      "Funksiya və ya metodun davranışını onu dəyişmədən genişləndirən quruluş.",
    link: "https://en.wikipedia.org/wiki/Decorator_pattern",
  },
  {
    az: "imperativ proqramlaşdırma",
    en: "imperative programming",
    description:
      "Kompüterə addım-addım hansı əməliyyatları etməli olduğunu bildirən yanaşma.",
    link: "https://en.wikipedia.org/wiki/Imperative_programming",
  },
  {
    az: "deklarativ proqramlaşdırma",
    en: "declarative programming",
    description:
      "Nəticənin necə yox, nə olmalı olduğunu ifadə edən proqramlaşdırma yanaşması.",
    link: "https://en.wikipedia.org/wiki/Declarative_programming",
  },
  {
    az: "eşzamanlılıq",
    en: "concurrency",
    description:
      "Bir neçə tapşırığın eyni vaxt intervalında təhlükəsiz idarə olunması modeli.",
    link: "https://en.wikipedia.org/wiki/Concurrency_(computer_science)",
  },
  {
    az: "tətbiq proqramlaşdırma interfeysi",
    en: "application programming interface",
    description:
      "Sistem və kitabxanaların başqa proqramlar üçün təqdim etdiyi funksional interfeys.",
    link: "https://en.wikipedia.org/wiki/API",
  },
  {
    az: "çərçivə",
    en: "framework",
    description:
      "Tətbiq inkişafını sürətləndirmək üçün əvvəlcədən qurulmuş struktur və alətlər toplusu.",
    link: "https://en.wikipedia.org/wiki/Software_framework",
  },
  {
    az: "verilənlər strukturu",
    en: "data structure",
    description:
      "Məlumatın yaddaşda təşkilini və üzərində əməliyyatları müəyyən edən məntiqi model.",
    link: "https://en.wikipedia.org/wiki/Data_structure",
  },
  {
    az: "alqoritm",
    en: "algorithm",
    description: "Məsələni həll etmək üçün dəqiq, sonlu addımlar ardıcıllığı.",
    link: "https://en.wikipedia.org/wiki/Algorithm",
  },
  {
    az: "şəbəkə protokolu",
    en: "network protocol",
    description:
      "Şəbəkədə məlumat mübadiləsi üçün cihazlar arasında razılaşdırılmış qaydalar toplusu.",
    link: "https://en.wikipedia.org/wiki/Network_protocol",
  },
  {
    az: "rekursiya",
    en: "recursion",
    description:
      "Funksiyanın nəticəyə çatana qədər özünü çağırması üsulu.",
    link: "https://en.wikipedia.org/wiki/Recursion_(computer_science)",
  },
  {
    az: "monad",
    en: "monad",
    description:
      "Funksional proqramlaşdırmada yan təsirləri və hesablama kontekstini idarə edən abstraksiya.",
    link: "https://en.wikipedia.org/wiki/Monad_(functional_programming)",
  },
  {
    az: "nümunə uyğunlaşdırma",
    en: "pattern matching",
    description:
      "Məlumatın quruluşuna görə avtomatik parçalanması və uyğun kod budağının seçilməsi.",
    link: "https://en.wikipedia.org/wiki/Pattern_matching",
  },
  {
    az: "tip sistemi",
    en: "type system",
    description:
      "Proqramdakı dəyərlərə tip təyin edərək xətaları kompilyasiya zamanı aşkar edən qaydalar toplusu.",
    link: "https://en.wikipedia.org/wiki/Type_system",
  },
  {
    az: "yan təsir",
    en: "side effect",
    description:
      "Funksiyanın nəticə qaytarmaqdan əlavə kənar vəziyyəti dəyişdirən davranışı.",
    link: "https://en.wikipedia.org/wiki/Side_effect_(computer_science)",
  },
  {
    az: "açıq mənbə",
    en: "open source",
    description:
      "Mənbə kodu ictimaiyyət üçün açıq olan və sərbəst istifadəyə yararlı proqram təminatı modeli.",
    link: "https://en.wikipedia.org/wiki/Open_source",
  },
  {
    az: "versiya nəzarəti",
    en: "version control",
    description:
      "Faylların dəyişikliklər tarixçəsini izləyən və idarə edən sistem.",
    link: "https://en.wikipedia.org/wiki/Version_control",
  },
  {
    az: "dəyişməzlik",
    en: "immutability",
    description:
      "Yaradıldıqdan sonra dəyişdirilə bilməyən məlumat yanaşması.",
    link: "https://en.wikipedia.org/wiki/Immutable_object",
  },
  {
    az: "abstraksiya",
    en: "abstraction",
    description:
      "Mürəkkəb detalları gizlədib daha sadə interfeys təqdim edən dizayn prinsipi.",
    link: "https://en.wikipedia.org/wiki/Abstraction_(computer_science)",
  },
  {
    az: "paket idarəçisi",
    en: "package manager",
    description:
      "Kitabxana və asılılıqların quraşdırılması, yenilənməsi və silinməsini idarə edən alət.",
    link: "https://en.wikipedia.org/wiki/Package_manager",
  },
  {
    az: "proqram təminatı",
    en: "software",
    description:
      "Kompüterin icra etdiyi proqramlar və əlaqəli məlumatlar toplusu.",
    link: "https://en.wikipedia.org/wiki/Software",
  },
  {
    az: "aparat təchizatı",
    en: "hardware",
    description:
      "Kompüterin fiziki komponentləri — prosessor, yaddaş, disk və s.",
    link: "https://en.wikipedia.org/wiki/Computer_hardware",
  },
  {
    az: "əməliyyat sistemi",
    en: "operating system",
    description:
      "Aparat və proqram təminatı arasında vasitəçi olan sistem proqramı.",
    link: "https://en.wikipedia.org/wiki/Operating_system",
  },
  {
    az: "verilənlər bazası",
    en: "database",
    description:
      "Məlumatları strukturlaşdırılmış şəkildə saxlayan və sorğulayan sistem.",
    link: "https://en.wikipedia.org/wiki/Database",
  },
  {
    az: "kodun nəzərdən keçirilməsi",
    en: "code review",
    description:
      "Başqa proqramçının yazdığı kodun keyfiyyətini yoxlamaq prosesi.",
    link: "https://en.wikipedia.org/wiki/Code_review",
  },
  {
    az: "sazlama",
    en: "debugging",
    description:
      "Proqramdakı xətaları aşkar edib aradan qaldırma prosesi.",
    link: "https://en.wikipedia.org/wiki/Debugging",
  },
  {
    az: "perfokart",
    en: "punched card",
    description:
      "Erkən kompüterlərdə məlumat daxil etmək üçün deşiklər açılmış karton vərəq.",
    link: "https://en.wikipedia.org/wiki/Punched_card",
  },
  {
    az: "enkapsulyasiya",
    en: "encapsulation",
    description:
      "Obyektin daxili vəziyyətini kənar koddan gizlədən OOP prinsipi.",
    link: "https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)",
  },
  {
    az: "varislik",
    en: "inheritance",
    description:
      "Bir sinifin digər sinifin xüsusiyyətlərini miras alması mexanizmi.",
    link: "https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)",
  },
  {
    az: "polimorfizm",
    en: "polymorphism",
    description:
      "Eyni interfeysin fərqli tiplər tərəfindən fərqli şəkildə həyata keçirilməsi.",
    link: "https://en.wikipedia.org/wiki/Polymorphism_(computer_science)",
  },
  {
    az: "funksiya kompozisiyası",
    en: "function composition",
    description:
      "Bir funksiyanın nəticəsini digər funksiyanın girişinə ötürərək yeni funksiya yaratma.",
    link: "https://en.wikipedia.org/wiki/Function_composition_(computer_science)",
  },
  {
    az: "spagetti kodu",
    en: "spaghetti code",
    description:
      "İdarəetmə axınının dolaşıq və izlənilməsi çətin olduğu kod strukturu.",
    link: "https://en.wikipedia.org/wiki/Spaghetti_code",
  },
  {
    az: "arxa plan",
    en: "backend",
    description:
      "Tətbiqin istifadəçiyə görünməyən server tərəfi — məlumat emalı, məntiq və verilənlər bazası əməliyyatları.",
    link: "https://en.wikipedia.org/wiki/Frontend_and_backend",
  },
  {
    az: "ön plan",
    en: "frontend",
    description:
      "Tətbiqin istifadəçiyə birbaşa görünən hissəsi — interfeys, vizual təqdimat.",
    link: "https://en.wikipedia.org/wiki/Frontend_and_backend",
  },
  {
    az: "marşrutlaşdırıcı",
    en: "router",
    description:
      "Şəbəkədə paketləri müvafiq istiqamətə yönləndirən cihaz.",
    link: "https://en.wikipedia.org/wiki/Router_(computing)",
  },
  {
    az: "bant genişliyi",
    en: "bandwidth",
    description:
      "Şəbəkə kanalının vahid zamanda ötürə biləcəyi maksimum məlumat həcmi.",
    link: "https://en.wikipedia.org/wiki/Bandwidth_(computing)",
  },
  {
    az: "gecikmə",
    en: "latency",
    description:
      "Məlumatın bir nöqtədən digərinə çatması üçün keçən vaxt.",
    link: "https://en.wikipedia.org/wiki/Latency_(engineering)",
  },
  {
    az: "paket",
    en: "packet",
    description:
      "Şəbəkədə ötürülən məlumatın kiçik, idarə olunan hissələrə bölünmüş vahidi.",
    link: "https://en.wikipedia.org/wiki/Network_packet",
  },
  {
    az: "bufer",
    en: "buffer",
    description:
      "Məlumatın müvəqqəti saxlandığı yaddaş sahəsi.",
    link: "https://en.wikipedia.org/wiki/Data_buffer",
  },
  {
    az: "icra mühiti",
    en: "runtime",
    description:
      "Proqramın işlədiyi zaman kəsiyi və ya onu icra edən mühit.",
    link: "https://en.wikipedia.org/wiki/Runtime_system",
  },
  {
    az: "kitabxana",
    en: "library",
    description:
      "Təkrar istifadə oluna bilən hazır kod modulları toplusu.",
    link: "https://en.wikipedia.org/wiki/Library_(computing)",
  },
  {
    az: "maşın öyrənməsi",
    en: "machine learning",
    description:
      "Kompüterlərin açıq proqramlaşdırma olmadan məlumatlardan öyrənməsi sahəsi.",
    link: "https://en.wikipedia.org/wiki/Machine_learning",
  },
  {
    az: "süni intellekt",
    en: "artificial intelligence",
    description:
      "İnsan zəkasına xas olan vəzifələri yerinə yetirmək üçün maşınları hazırlayan elm sahəsi.",
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
  },
  {
    az: "geriyə uyğunluq",
    en: "backward compatibility",
    description:
      "Yeni versiyaların köhnə versiyanın məlumatları və davranışı ilə uyğun işləmə qabiliyyəti.",
    link: "https://en.wikipedia.org/wiki/Backward_compatibility",
  },
  {
    az: "paradiqma",
    en: "paradigm",
    description:
      "Proqramlaşdırmada problemlərin həlli üçün istifadə olunan fundamental yanaşma və düşüncə modeli.",
    link: "https://en.wikipedia.org/wiki/Programming_paradigm",
  },
  {
    az: "sintaksis",
    en: "syntax",
    description:
      "Proqramlaşdırma dilinin qrammatik qaydaları — kodun necə yazılmalı olduğunu müəyyən edən struktur.",
    link: "https://en.wikipedia.org/wiki/Syntax_(programming_languages)",
  },
  {
    az: "ekosistem",
    en: "ecosystem",
    description:
      "Bir dilin və ya platformanın ətrafındakı kitabxanalar, alətlər və icma toplusu.",
    link: "https://en.wikipedia.org/wiki/Software_ecosystem",
  },
  {
    az: "virtual maşın",
    en: "virtual machine",
    description:
      "Fiziki kompüteri təqlid edən proqram mühiti; baytkodu icra etmək üçün istifadə olunur.",
    link: "https://en.wikipedia.org/wiki/Virtual_machine",
  },
  {
    az: "mənbə kodu",
    en: "source code",
    description:
      "Proqramçının yazdığı, insan tərəfindən oxuna bilən proqram mətni.",
    link: "https://en.wikipedia.org/wiki/Source_code",
  },
  {
    az: "vaxt aşımı",
    en: "timeout",
    description:
      "Gözlənilən cavab müəyyən müddətdə alınmadıqda əməliyyatın dayandırılması.",
    link: "https://en.wikipedia.org/wiki/Timeout_(computing)",
  },
  {
    az: "axın nəzarəti",
    en: "flow control",
    description:
      "Göndərənin qəbul edənin emal sürətinə uyğunlaşdırılması mexanizmi.",
    link: "https://en.wikipedia.org/wiki/Flow_control_(data)",
  },
];

const lookupMap = new Map<string, GlossaryTerm>();

for (const term of glossary) {
  lookupMap.set(term.en.toLowerCase(), term);
  lookupMap.set(term.az.toLowerCase(), term);
}

export function lookupTerm(key: string): GlossaryTerm | undefined {
  return lookupMap.get(key.toLowerCase());
}
