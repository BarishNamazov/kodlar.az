export interface GlossaryTerm {
  az: string;
  en: string;
  aliases?: string[];
  description?: string;
  link?: string;
}

export const glossary: GlossaryTerm[] = [
  {
    az: "tıxanma nəzarəti",
    en: "congestion control",
    aliases: ["sıxlıq nəzarəti"],
    description:
      "Şəbəkə tıxanmasını aşkar edib idarə etmək üçün istifadə edilən mexanizmlər.",
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
      "Paket itkisinə keçməzdən əvvəl şəbəkədə tıxanma siqnalını işarələyən mexanizm.",
    link: "https://datatracker.ietf.org/doc/html/rfc3168",
  },
  {
    az: "BBR",
    en: "bottleneck bandwidth and round-trip propagation time",
    description:
      "Ötürmə sürətini itkiyə deyil, bant genişliyi və RTT modelinə əsasən tənzimləyən TCP alqoritmi.",
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
    aliases: ["kompilyatorlar"],
    description:
      "Mənbə kodunu icradan əvvəl maşın koduna və ya aralıq koda çevirən proqram.",
    link: "https://en.wikipedia.org/wiki/Compiler",
  },
  {
    az: "interpretator",
    en: "interpreter",
    description:
      "Kodu adətən sətir-sətir və ya blok-blok oxuyub icra edən proqram.",
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
    az: "icra zamanı kompilyasiya",
    en: "just-in-time compilation",
    description:
      "Kodu icra zamanı dinamik şəkildə kompilyasiya edib performansı artıran yanaşma.",
    link: "https://en.wikipedia.org/wiki/Just-in-time_compilation",
  },
  {
    az: "obyekt-yönümlü proqramlaşdırma",
    en: "object-oriented programming",
    aliases: ["OYP", "OOP"],
    description:
      "Məlumatı və davranışı obyektlər daxilində birləşdirən proqramlaşdırma paradiqması.",
    link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
  },
  {
    az: "avtomatik yaddaş idarəsi",
    en: "garbage collection",
    description:
      "İstifadə olunmayan yaddaş sahələrinin avtomatik azad edilməsi mexanizmi.",
    link: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)",
  },
  {
    az: "funksional proqramlaşdırma",
    en: "functional programming",
    aliases: ["FP"],
    description:
      "Hesablamanı əsasən funksiyaların birləşməsi kimi modelləşdirən paradiqma.",
    link: "https://en.wikipedia.org/wiki/Functional_programming",
  },
  {
    az: "gecikmiş hesablama",
    en: "lazy evaluation",
    aliases: ["gecikmiş qiymətləndirilmə", "tənbəl qiymətləndirmə"],
    description: "İfadələri yalnız ehtiyac olduqda qiymətləndirmək prinsipi.",
    link: "https://en.wikipedia.org/wiki/Lazy_evaluation",
  },
  {
    az: "cəbri məlumat tipi",
    en: "algebraic data type",
    description:
      "Tipi bir neçə konstruktorun cəmi və ya hasili kimi modelləşdirən tip yanaşması.",
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
    az: "dekorator",
    en: "decorator",
    aliases: ["örtük"],
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
    az: "tətbiqi proqramlaşdırma interfeysi",
    en: "application programming interface",
    aliases: ["API"],
    description:
      "Sistem və kitabxanaların başqa proqramlar üçün təqdim etdiyi funksional interfeys.",
    link: "https://en.wikipedia.org/wiki/API",
  },
  {
    az: "freymvörk",
    en: "framework",
    aliases: ["çərçivə", "freymvork"],
    description:
      "Tətbiq inkişafını sürətləndirmək üçün əvvəlcədən qurulmuş struktur və alətlər toplusu.",
    link: "https://en.wikipedia.org/wiki/Software_framework",
  },
  {
    az: "verilənlər strukturu",
    en: "data structure",
    aliases: ["məlumat strukturları"],
    description:
      "Məlumatın yaddaşda təşkilini və üzərində əməliyyatları müəyyən edən məntiqi model.",
    link: "https://en.wikipedia.org/wiki/Data_structure",
  },
  {
    az: "alqoritm",
    en: "algorithm",
    aliases: ["alqoritmlər"],
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
    description: "Funksiyanın nəticəyə çatana qədər özünü çağırması üsulu.",
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
    az: "şablon uyğunlaşdırma",
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
    aliases: ["açıq mənbəli"],
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
    description: "Yaradıldıqdan sonra dəyişdirilə bilməyən məlumat yanaşması.",
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
    aliases: ["əməliyyat sistemləri"],
    description:
      "Aparat və proqram təminatı arasında vasitəçi olan sistem proqramı.",
    link: "https://en.wikipedia.org/wiki/Operating_system",
  },
  {
    az: "verilənlər bazası",
    en: "database",
    aliases: ["məlumat bazaları"],
    description:
      "Məlumatları strukturlaşdırılmış şəkildə saxlayan və sorğulayan sistem.",
    link: "https://en.wikipedia.org/wiki/Database",
  },
  {
    az: "kodun nəzərdən keçirilməsi",
    en: "code review",
    aliases: ["kod yoxlama"],
    description:
      "Başqa proqramçının yazdığı kodun keyfiyyətini yoxlamaq prosesi.",
    link: "https://en.wikipedia.org/wiki/Code_review",
  },
  {
    az: "sazlama",
    en: "debugging",
    description: "Proqramdakı xətaları aşkar edib aradan qaldırma prosesi.",
    link: "https://en.wikipedia.org/wiki/Debugging",
  },
  {
    az: "deşikli kart",
    en: "punched card",
    aliases: ["perfokart"],
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
    az: "backend",
    en: "backend",
    aliases: ["server tərəfi", "back-end", "bek-end", "bekend"],
    description:
      "Tətbiqin istifadəçiyə görünməyən server tərəfi — məlumat emalı, məntiq və verilənlər bazası əməliyyatları.",
    link: "https://en.wikipedia.org/wiki/Frontend_and_backend",
  },
  {
    az: "frontend",
    en: "frontend",
    aliases: ["görünüş tərəfi", "front-end", "frant-end", "frantend"],
    description:
      "Tətbiqin istifadəçiyə birbaşa görünən hissəsi — interfeys, vizual təqdimat.",
    link: "https://en.wikipedia.org/wiki/Frontend_and_backend",
  },
  {
    az: "marşrutlaşdırıcı",
    en: "router",
    aliases: ["ruter"],
    description: "Şəbəkədə paketləri müvafiq istiqamətə yönləndirən cihaz.",
    link: "https://en.wikipedia.org/wiki/Router_(computing)",
  },
  {
    az: "paylanmış sistemlər",
    en: "distributed systems",
    aliases: ["bölünmüş sistemlər"],
    description:
      "Şəbəkə üzərində bir neçə kompüter arasında bölünərək işləyən sistem arxitekturası.",
    link: "https://en.wikipedia.org/wiki/Distributed_computing",
  },
  {
    az: "bulud-doğma",
    en: "cloud native",
    description:
      "Bulud mühitləri üçün xüsusi dizayn edilmiş, adətən konteyner və mikroservis memarlığına əsaslanan yanaşma.",
    link: "https://en.wikipedia.org/wiki/Cloud-native_computing",
  },
  {
    az: "nativ tətbiq",
    en: "native app",
    aliases: ["native apps", "yerli tətbiq"],
    description:
      "Müəyyən əməliyyat sistemi və platforma üçün birbaşa hazırlanmış tətbiq.",
    link: "https://en.wikipedia.org/wiki/Mobile_app#Native_apps",
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
    description: "Məlumatın bir nöqtədən digərinə çatması üçün keçən vaxt.",
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
    description: "Məlumatın müvəqqəti saxlandığı yaddaş sahəsi.",
    link: "https://en.wikipedia.org/wiki/Data_buffer",
  },
  {
    az: "icra mühiti",
    en: "runtime",
    description: "Proqramın işlədiyi zaman kəsiyi və ya onu icra edən mühit.",
    link: "https://en.wikipedia.org/wiki/Runtime_system",
  },
  {
    az: "kitabxana",
    en: "library",
    description: "Təkrar istifadə oluna bilən hazır kod modulları toplusu.",
    link: "https://en.wikipedia.org/wiki/Library_(computing)",
  },
  {
    az: "maşın öyrənməsi",
    en: "machine learning",
    aliases: ["ML"],
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
      "Fiziki kompüteri təqlid edən proqram mühiti; baytkodu icra edə bilən mühitdir.",
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
  {
    az: "acgöz seçim",
    en: "greedy choice",
    description:
      "Hər addımda lokal olaraq ən optimal variantı seçməyə əsaslanan alqoritmik yanaşma.",
  },
  {
    az: "açar-dəyər deposu",
    en: "key-value store",
    description:
      "Məlumatı açar və dəyər cütləri şəklində saxlayan məlumat bazası növü.",
  },
  {
    az: "axın",
    en: "stream",
    description:
      "Məlumatın hissə-hissə və davamlı şəkildə ötürülməsi (və ya icra edilən thread/axın kontekstində fərqli tapşırıq zolağı).",
  },
  {
    az: "asinxron",
    en: "asynchronous",
    description:
      "Əməliyyatların bir-birini gözləmədən, fərqli zamanlarda icra edilməsi.",
  },
  {
    az: "B-ağacı",
    en: "B-tree",
    description:
      "Məlumat bazalarında və fayl sistemlərində geniş istifadə olunan, öz-özünü balanslaşdıran ağac strukturu.",
  },
  {
    az: "bakalavr",
    en: "bachelor's degree",
    description: "Ali təhsilin ilk pilləsini bitirənlərə verilən dərəcə.",
  },
  {
    az: "biyeksiya",
    en: "bijection",
    description:
      "İki çoxluq arasında hər bir elementin digər çoxluqdakı yalnız bir elementə uyğun gəldiyi riyazi əlaqə.",
  },
  {
    az: "böyük dil modelləri",
    en: "large language models",
    aliases: ["LLM", "Böyük Dil Modelləri"],
    description:
      "Böyük həcmdə mətn məlumatları ilə öyrədilmiş, təbii dili anlayan və yaradan süni intellekt modelləri.",
  },
  {
    az: "CRUD",
    en: "CRUD",
    description:
      "Məlumat bazası idarəetməsində dörd əsas əməliyyat: Yaratmaq (Create), Oxumaq (Read), Yeniləmək (Update), Silmək (Delete).",
  },
  {
    az: "CSAPP",
    en: "Computer Systems: A Programmer's Perspective",
    description:
      "Kompüter sistemlərinin iş prinsiplərini proqramçı baxış açısından izah edən məşhur dərslik.",
  },
  {
    az: "CSSOM",
    en: "CSS Object Model",
    description:
      "Brauzerin CSS stillərini oxuyub manipulyasiya etməsi üçün yaratdığı obyekt modeli.",
  },
  {
    az: "Deykstra alqoritmi",
    en: "Dijkstra's algorithm",
    description:
      "Qrafda düyünlər arasındakı ən qısa yolu tapan məşhur alqoritm.",
  },
  {
    az: "dinamik kitabxana",
    en: "dynamic library",
    description:
      "Proqramın icrası zamanı yaddaşa yüklənən və bir neçə tətbiq tərəfindən paylaşıla bilən kod modulu.",
  },
  {
    az: "Diskret riyaziyyat",
    en: "discrete mathematics",
    description:
      "Kəsilməz olmayan, ayrı-ayrı elementlərdən ibarət riyazi strukturları öyrənən sahə.",
  },
  {
    az: "DNS",
    en: "Domain Name System",
    description:
      "Domen adlarını (məs. google.com) şəbəkə IP ünvanlarına çevirən internet xidməti.",
  },
  {
    az: "Dunning-Kruger",
    en: "Dunning-Kruger effect",
    description:
      "Bacarıqsız və ya təcrübəsiz insanların öz qabiliyyətlərini həddindən artıq qiymətləndirməsi psixoloji effekti.",
  },
  {
    az: "ehtimal nəzəriyyəsi",
    en: "probability theory",
    description:
      "Təsadüfi hadisələri və onların baş vermə ehtimalını öyrənən riyaziyyat bölməsi.",
  },
  {
    az: "Ekvivalentlik münasibəti",
    en: "equivalence relation",
    description:
      "Riyaziyyatda refleksiv, simmetrik və tranzitiv xassələrə malik münasibət növü.",
  },
  {
    az: "etibarsızlaşdırma strategiyası",
    en: "invalidation strategy",
    description:
      "Keşdəki (cache) köhnəlmiş məlumatların silinməsi və ya yenilənməsi qaydası.",
  },
  {
    az: "əlaqələndirmə",
    en: "linking",
    description:
      "Kompilyasiya olunmuş obyekt fayllarını bir araya gətirərək icra edilə bilən fayl (executable) yaratmaq prosesi.",
  },
  {
    az: "fayl sistemi",
    en: "file system",
    description:
      "Məlumatların diskdə necə saxlanıldığını, təşkil edildiyini və oxunduğunu idarə edən sistem.",
  },
  {
    az: "formal dillər",
    en: "formal languages",
    description:
      "Xüsusi sintaktik və semantik qaydalarla yaradılmış, kompüter elmlərində istifadə olunan riyazi dillər.",
  },
  {
    az: "formal qrammatika",
    en: "formal grammar",
    description:
      "Formal dilin sətirlərini yaratmaq və ya tanımaq üçün istifadə olunan qaydalar toplusu.",
  },
  {
    az: "frilans",
    en: "freelance",
    description:
      "Heç bir şirkətə daimi bağlı olmadan müstəqil şəkildə layihələr üzərində işləmək modeli.",
  },
  {
    az: "geridönüş mexanizmləri",
    en: "fallback mechanisms",
    description:
      "Xəta baş verdikdə və ya bir yol uğursuz olduqda sistemi qorumaq üçün alternativ ssenarinin (və ya alqoritmlərdə əvvəlki addımın) işə düşməsi.",
  },
  {
    az: "GPA",
    en: "Grade Point Average",
    description:
      "Tələbənin akademik göstəricilərinin və qiymətlərinin orta statistik göstəricisi.",
  },
  {
    az: "hesablama düşüncə modeli",
    en: "computational thinking",
    description:
      "Problemləri kompüterin həll edə biləcəyi şəkildə formalaşdırmaq bacarığı.",
  },
  {
    az: "hesablama nəzəriyyəsi",
    en: "theory of computation",
    aliases: ["hesablanma nəzəriyyəsi"],
    description:
      "Hansı problemlərin kompüterlər (alqoritmlər) vasitəsilə həll edilə biləcəyini öyrənən elm sahəsi.",
  },
  {
    az: "hesablama sistemləri",
    en: "computing systems",
    description:
      "Məlumatı emal edən, saxlayan və ötürən aparat və proqram təminatı komponentlərinin toplusu.",
  },
  {
    az: "HTTP",
    en: "Hypertext Transfer Protocol",
    description:
      "Vebdə məlumatların (HTML, şəkillər və s.) ötürülməsi üçün əsas şəbəkə protokolu.",
  },
  {
    az: "Xam soket",
    en: "raw socket",
    description:
      "Proqramçıya şəbəkə paketlərinin başlıqlarını birbaşa idarə etməyə imkan verən aşağı səviyyəli şəbəkə soketi növü.",
  },
  {
    az: "xətti cəbr",
    en: "linear algebra",
    description:
      "Vektorlar, vektor fəzaları və xətti tənliklər sistemlərini öyrənən riyaziyyat sahəsi.",
  },
  {
    az: "idarəetmə axını",
    en: "control flow",
    description:
      "Proqramdakı əmrlərin, şərtlərin və dövrlərin icra edilmə ardıcıllığı.",
  },
  {
    az: "İmposter",
    en: "imposter syndrome",
    description:
      "İnsanın öz uğurlarını şansa bağlaması və əslində kifayət qədər savadlı olmadığı qorxusunu (saxtakar sindromu) yaşaması halı.",
  },
  {
    az: "imtiyazların artırılması",
    en: "privilege escalation",
    description:
      "İstifadəçinin və ya tətbiqin icazəsi olmayan sistem resurslarına (admin hüquqlarına) giriş əldə etməsi.",
  },
  {
    az: "invariant",
    en: "invariant",
    description:
      "Proqramın icrası zamanı və ya müəyyən bir mərhələdə həmişə doğru qalan şərt, məntiqi ifadə.",
  },
  {
    az: "inyeksiya",
    en: "injection",
    description:
      "Zərərli kodun proqrama və ya sorğuya daxil edilərək sistemin manipulyasiya edilməsi kiber hücumu (məs. SQL Injection).",
  },
  {
    az: "izolyasiya",
    en: "isolation",
    description:
      "Proseslərin, yaddaş sahələrinin və ya tranzaksiyaların bir-birinə təsir etmədən ayrılmış şəkildə işləməsi.",
  },
  {
    az: "kardinallıq",
    en: "cardinality",
    description:
      "Riyaziyyatda çoxluqdakı elementlərin sayı; məlumat bazasında isə sütundakı unikal dəyərlərin miqdarı.",
  },
  {
    az: "Keş cədvəli",
    en: "hash table",
    description:
      "Məlumatları açar-dəyər cütləri kimi xüsusi riyazi funksiya vasitəsilə saxlayan və çox sürətli axtarış təmin edən struktur.",
  },
  {
    az: "keş uyğunluğu",
    en: "cache coherence",
    description:
      "Çoxnüvəli sistemlərdə müxtəlif keş (cache) yaddaşlardakı eyni məlumatların sinxron və eyni vəziyyətdə qalması mexanizmi.",
  },
  {
    az: "Kilidlənmə",
    en: "deadlock",
    description:
      "İki və ya daha çox prosesin (axının) bir-birinin resursu azad etməsini gözləyərək əbədi dayanması vəziyyəti.",
  },
  {
    az: "kod bazası",
    en: "codebase",
    description:
      "Bir proqram təminatı layihəsini təşkil edən mənbə kodlarının tam toplusu.",
  },
  {
    az: "kod generasiya",
    en: "code generation",
    description:
      "Mövcud modellər, şablonlar və ya qaydalar əsasında avtomatik olaraq proqram kodunun yaradılması.",
  },
  {
    az: "kompüter arxitekturası",
    en: "computer architecture",
    description:
      "Kompüter sisteminin məntiqi strukturu və müxtəlif avadanlıqların necə inteqrasiya edildiyi dizaynı.",
  },
  {
    az: "kontekst dəyişməsi",
    en: "context switch",
    description:
      "Prosessorun bir prosesdən digərinə keçərkən köhnə vəziyyəti yadda saxlaması və yenisini yükləməsi prosesi.",
  },
  {
    az: "Kontekstdən asılı olmayan qrammatika",
    en: "context-free grammar",
    description:
      "Proqramlaşdırma dillərinin sintaksisini asanlıqla təsvir etmək və təhlil etmək üçün istifadə olunan formal qrammatika növü.",
  },
  {
    az: "kriptoqrafiya",
    en: "cryptography",
    description:
      "Məlumatın məxfiliyini, bütövlüyünü və təhlükəsizliyini təmin etmək üçün riyazi şifrələmə metodları elmi.",
  },
  {
    az: "qraf",
    en: "graph",
    description:
      "Düyünlər və onları birləşdirən kənarlardan (xətlərdən) ibarət şəbəkə quruluşunu modelləşdirən məlumat strukturu.",
  },
  {
    az: "sandbox",
    en: "sandbox",
    description:
      "Proqramların və ya sınaq kodların sistemin qalan hissəsindən təcrid olunmuş təhlükəsiz mühitdə işlədilməsi.",
  },
  {
    az: "LeetCode",
    en: "LeetCode",
    description:
      "Proqramçılara alqoritm və məlumat strukturu məsələlərini həll edərək müsahibələrə hazırlaşmağa kömək edən onlayn platforma.",
  },
  {
    az: "Magistr dərəcəsi",
    en: "Master's degree",
    description:
      "Bakalavr pilləsindən sonra əldə edilən daha dar və ixtisaslaşmış ali təhsil dərəcəsi.",
  },
  {
    az: "məntiq qapısı",
    en: "logic gate",
    description:
      "Bir və ya daha çox giriş siqnalını alaraq məntiqi əməliyyatla tək çıxış siqnalı verən elektron və ya rəqəmsal sxem.",
  },
  {
    az: "mikroproqram təminatı",
    en: "firmware",
    description:
      "Aparat avadanlıqlarının daxilinə yazılmış və onların aşağı səviyyəli idarəsini təmin edən proqram təminatı.",
  },
  {
    az: "Muteks",
    en: "mutex",
    description:
      "Bir ortaq resursdan eyni vaxtda yalnız bir axının (thread) istifadə etməsini təmin edən sinxronizasiya obyekti.",
  },
  {
    az: "müəllim köməkçisi",
    en: "teaching assistant",
    aliases: ["müəllim köməkçiləri"],
    description:
      "Müəllimə dərslərdə, tapşırıqların yoxlanmasında və tələbələrə əlavə dəstək verilməsində kömək edən şəxs.",
  },
  {
    az: "mükəmməllikçilik",
    en: "perfectionism",
    description:
      "Hər şeyin qüsursuz və səhvsiz olmasını tələb edən, çox vaxt işin ləngiməsinə səbəb olan yanaşma.",
  },
  {
    az: "NP-tamlıq",
    en: "NP-completeness",
    description:
      "Kompüter elmində həlli üçün səmərəli (polinomial vaxtlı) alqoritmin hələ tapılmadığı ən çətin hesablanan problemlər sinfi.",
  },
  {
    az: "nüvə",
    en: "kernel",
    description:
      "Əməliyyat sisteminin mərkəzi hissəsi; aparat resurslarını idarə edən və proqramlara xidmət edən əsas komponent.",
  },
  {
    az: "OSTEP",
    en: "Operating Systems: Three Easy Pieces",
    description:
      "Əməliyyat sistemlərinin əsaslarını (vizuallaşdırma, eşzamanlılıq və davamlılıq) izah edən məşhur dərslik.",
  },
  {
    az: "paralelizm",
    en: "parallelism",
    description:
      "Çoxnüvəli prosessorlarda və ya sistemlərdə eyni anda bir neçə tapşırığın eyni vaxtda fiziki olaraq icra edilməsi.",
  },
  {
    az: "PhD",
    en: "Doctor of Philosophy",
    description:
      "Elmi tədqiqat və dissertasiya müdafiəsi əsasında verilən ən yüksək akademik dərəcə.",
  },
  {
    az: "planlaşdırıcı",
    en: "scheduler",
    description:
      "Əməliyyat sistemində prosessorun hansı proses tərəfindən və nə qədər müddətə istifadə ediləcəyinə qərar verən modul.",
  },
  {
    az: "proqram təminatı mühəndisliyi",
    en: "software engineering",
    description:
      "Proqram təminatının dizaynı, inkişafı, sınaqdan keçirilməsi və davamlı saxlanması üçün mühəndislik prinsiplərinin tətbiqi.",
  },
  {
    az: "proqramlaşdırma dilləri nəzəriyyəsi",
    en: "programming language theory",
    description:
      "Proqramlaşdırma dillərinin riyazi dizaynı, tətbiqi, analizi və təsnifatı ilə məşğul olan elm.",
  },
  {
    az: "prompt",
    en: "prompt",
    description:
      "Süni intellekt modellərinə (və ya CLI sistemlərinə) verilən giriş təlimatı, mətn və ya sual.",
  },
  {
    az: "React",
    en: "React",
    description:
      "İstifadəçi interfeysləri (UI) qurmaq üçün Facebook tərəfindən yaradılmış məşhur JavaScript kitabxanası.",
  },
  {
    az: "relyasiyalı məlumat bazası",
    en: "relational database",
    description:
      "Məlumatı sətir və sütunlardan ibarət, bir-biri ilə məntiqi əlaqəli cədvəllər şəklində saxlayan sistem.",
  },
  {
    az: "render ağacı",
    en: "render tree",
    description:
      "Brauzerlərdə DOM və CSSOM-u birləşdirərək ekrana yalnız görünəcək elementləri çəkmək üçün yaradılan daxili struktur.",
  },
  {
    az: "renderinq",
    en: "rendering",
    description:
      "Kod və ya strukturlaşdırılmış məlumatların vizual olaraq ekranda istifadəçi interfeysinə çevrilməsi prosesi.",
  },
  {
    az: "robototexnika",
    en: "robotics",
    description:
      "Robotların dizaynı, inşası, istismarı və kompüter sistemləri vasitəsilə idarə edilməsi sahəsi.",
  },
  {
    az: "silinmə siyasəti",
    en: "eviction policy",
    description:
      "Keş (cache) yaddaşı dolduqda yeni gələn məlumatlara yer açmaq üçün hansı elementin silinəcəyini müəyyən edən alqoritm.",
  },
  {
    az: "sistem proqramlaşdırması",
    en: "system programming",
    description:
      "Birbaşa aparatla (hardware) və əməliyyat sistemləri ilə qarşılıqlı əlaqədə olan aşağı səviyyəli proqram təminatının yazılması.",
  },
  {
    az: "SQL JOIN",
    en: "SQL JOIN",
    description:
      "Məlumat bazasında iki və ya daha çox fərqli cədvəldəki məlumatları ortaq sütunlara əsasən birləşdirən SQL əmri.",
  },
  {
    az: "Tam stek",
    en: "full stack",
    description:
      "Həm frontend (istifadəçi tərəfi), həm də backend (server tərəfi) arxitekturalarını əhatə edən proqramlaşdırma modeli.",
  },
  {
    az: "TCP",
    en: "Transmission Control Protocol",
    description:
      "Şəbəkədə məlumat paketlərinin etibarlı, səhvsiz və ardıcıl çatdırılmasını təmin edən protokoldur.",
  },
  {
    az: "təcrübə proqramları",
    en: "internships",
    description:
      "Tələbələrin və ya karyeraya yeni başlayanların real iş mühitində praktik bilik qazanması üçün proqramlar.",
  },
  {
    az: "tədris proqramı",
    en: "curriculum",
    aliases: ["Tədris proqramı"],
    description:
      "Təhsil müəssisələrində keçiləcək fənlərin, mövzuların və qiymətləndirmələrin təşkili planı.",
  },
  {
    az: "təhlil nəzəriyyəsi",
    en: "parsing theory",
    description:
      "Formal dillərdə və kompilyatorlarda sətirlərin qrammatik quruluşunu analiz etmə və ağac strukturuna çevirmə qaydaları.",
  },
  {
    az: "təlim məlumatları",
    en: "training data",
    description:
      "Süni intellekt və maşın öyrənməsi modellərinə naxışları (pattern) öyrətmək üçün istifadə edilən ilkin məlumat bazası.",
  },
  {
    az: "tənbəl yüklənmə",
    en: "lazy loading",
    description:
      "Resursların (şəkillər, modullar) əvvəlcədən deyil, yalnız istifadəçiyə lazım olduqda yüklənməsi performansı strategiyası.",
  },
  {
    az: "TLD",
    en: "top-level domain",
    description:
      "Domen adının ən sonuncu və ən yüksək səviyyəli hissəsi (məsələn, .com, .az, .org).",
  },
  {
    az: "TLS",
    en: "Transport Layer Security",
    description:
      "Şəbəkə bağlantılarında məlumatların şifrələnməsini və təhlükəsizliyini təmin edən kriptoqrafik protokol (SSL-in xələfi).",
  },
  {
    az: "Tranzaksiyanın izolyasiya səviyyəsi",
    en: "transaction isolation level",
    description:
      "Məlumat bazalarında paralel işləyən tranzaksiyaların bir-birinə nə dərəcədə təsir edə biləcəyini müəyyən edən səviyyə.",
  },
  {
    az: "Tranzistor",
    en: "transistor",
    description:
      "Elektron siqnalları gücləndirən və ya keçid (açar) kimi istifadə olunan, kompüter prosessorlarının ən kiçik təməl elementi.",
  },
  {
    az: "UDP",
    en: "User Datagram Protocol",
    description:
      "Bağlantı qurmadan məlumat paketlərini çox sürətli, lakin çatdırılma zəmanəti olmadan göndərən şəbəkə protokolu.",
  },
  {
    az: "uyğunluq modeli",
    en: "consistency model",
    description:
      "Paylanmış sistemlərdə müxtəlif qovşaqlardakı məlumatların bir-biri ilə eyniliyini və güncəlliyini tənzimləyən qaydalar.",
  },
  {
    az: "Veb proqramlaşdırma",
    en: "web development",
    description:
      "İnternet və ya lokal şəbəkələr üçün veb saytların və veb tətbiqlərin yaradılması və idarəsi prosesi.",
  },
  {
    az: "virtual yaddaş",
    en: "virtual memory",
    description:
      "Sərt diskdən istifadə edərək tətbiqlərə faktiki RAM tutumundan daha böyük əməli yaddaş illüziyası yaradan OS texnologiyası.",
  },
  {
    az: "yaddaş bölüşdürücüsü",
    en: "memory allocator",
    description:
      "Proqramın icrası zamanı ehtiyac duyulan dinamik yaddaşın yığın (heap) üzərindən ayrılmasını idarə edən mexanizm.",
  },
  {
    az: "yaddaş iyerarxiyası",
    en: "memory hierarchy",
    description:
      "Sürət, qiymət və tutuma görə fərqlənən yaddaş növlərinin (reqistr, keş, RAM, disk) piramida şəklində təşkili.",
  },
  {
    az: "Yaddaş modeli",
    en: "memory model",
    description:
      "Çoxaxınlı proqramlarda yaddaş oxuma/yazma əməliyyatlarının digər axınlara necə və hansı ardıcıllıqla göründüyünü təyin edən qaydalar.",
  },
  {
    az: "yarış vəziyyəti",
    en: "race condition",
    description:
      "Eyni məlumata və ya resursa eyni anda müraciət edən axınların gözlənilməz və səhv nəticələrə səbəb olduğu vəziyyət.",
  },
  {
    az: "Yükləyici",
    en: "loader",
    description:
      "Proqramı diskdən oxuyaraq əməliyyat yaddaşına (RAM) yükləyən, yaddaş ünvanlarını tənzimləyən və icraya hazırlayan OS komponenti.",
  },
  {
    az: "zamanlama hücumları",
    en: "timing attacks",
    description:
      "Kriptoqrafik alqoritmlərin icra müddətindəki fərqlilikləri analiz edərək məxfi məlumatları (şifrələri) ələ keçirməyə çalışan hücum növü.",
  },
];

export function normalize(s: string): string {
  return s
    .replace(/İ/g, "i")
    .replace(/I/g, "ı")
    .toLocaleLowerCase("az")
    .replace(/[-_\s]+/g, " ")
    .trim();
}

const lookupMap = new Map<string, GlossaryTerm>();

for (const term of glossary) {
  lookupMap.set(normalize(term.en), term);
  lookupMap.set(normalize(term.az), term);
  for (const alias of term.aliases || []) {
    lookupMap.set(normalize(alias), term);
  }
}

export function lookupTerm(key: string): GlossaryTerm | undefined {
  return lookupMap.get(normalize(key));
}
