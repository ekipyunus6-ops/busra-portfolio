export type Project = {
  slug: string;
  category: string;
  title: string;
  year: string;
  partner: string;
  sector: string;
  description: string;
  coverImage: string;
  coverAlt: string;
  ctaLabel: string;
  intro: string;
  problem: string;
  approach: string;
  outcome: string;
  gallery: { image: string; alt: string }[];
  services: string[];
  deliverables: string[];
  aspectClassName: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
    avatar: string;
  };
};

export const projects: Project[] = [
  {
    slug: "atelier-nive",
    category: "Marka sitesi",
    title: "Atelier Nive",
    year: "2025",
    partner: "Atelier Nive",
    sector: "Seramik stüdyosu",
    description:
      "Malzeme hissini, koleksiyon akışını ve randevu yönünü daha sessiz bir site ritmine taşıyan tek sayfa lansman sistemi.",
    coverImage: "/work-atelier-nive.svg",
    coverAlt: "Atelier Nive için oluşturulmuş soyut editoryal proje görseli",
    ctaLabel: "Vaka sayfasını aç",
    intro:
      "Stüdyo; ürün sayfaları, atölye anlatısı ve sipariş akışı arasında dağılmadan çalışan daha sakin bir dijital giriş katı istiyordu. Hedef, seramiğin dokusunu bağırmadan hissettirmekti.",
    problem:
      "Eski yapı çok parçalıydı. Koleksiyon, süreç ve iletişim bilgisi aynı anda görünmeye çalışıyor; bu da ilk izlenimi yoruyordu.",
    approach:
      "İçerik mimarisini tek bir anlatı eksenine topladım. Tipografi ölçeği büyütüldü, bölümler seyrekleştirildi ve görseller yalnızca ritim kuracak kadar görünür bırakıldı.",
    outcome:
      "Ortaya daha yavaş okunan ama daha çabuk anlaşılan bir lansman sayfası çıktı. Stüdyo tonu ilk ekranda belirginleşti, koleksiyon akışı ise daha ikna edici hale geldi.",
    gallery: [
      {
        image: "/work-atelier-nive.svg",
        alt: "Atelier Nive için soyut editoryal lansman görseli"
      }
    ],
    services: ["Site mimarisi", "Görsel yön", "Inquiry flow"],
    deliverables: [
      "Tek sayfa lansman sitesi",
      "Koleksiyon akışı",
      "Randevu ve sipariş yönlendirmesi"
    ],
    aspectClassName: "aspect-[16/11]",
    testimonial: {
      quote:
        "İstediğimiz şey daha sessiz ama daha net bir siteydi. Sayfa ilk bakışta tam olarak o duyguyu kurdu.",
      name: "Selin Kaya",
      role: "Kurucu, Atelier Nive",
      avatar: "/avatar-selin-kaya.svg"
    }
  },
  {
    slug: "mira-residence",
    category: "Mimari portfolyo",
    title: "Mira Residence",
    year: "2025",
    partner: "Mira Residence",
    sector: "Mimarlık pratiği",
    description:
      "Projeleri geniş boşluk, uzun başlık ritmi ve daha sakin vaka geçişleriyle sunan portfolyo odaklı mimari anlatı.",
    coverImage: "/work-mira-residence.svg",
    coverAlt: "Mira Residence için oluşturulmuş soyut mimari portfolyo görseli",
    ctaLabel: "Vaka sayfasını aç",
    intro:
      "Stüdyo; projelerini daha seçici, daha uzun ömürlü ve daha rafine bir yüzeyde göstermek istiyordu. Öncelik çok iş göstermek değil, doğru işi doğru sırayla göstermekteydi.",
    problem:
      "Önceki portfolyo, tüm projeleri aynı yoğunlukta sunuyordu. Bu da güçlü işlerin etkisini azaltıyordu ve sayfayı katalog hissine itiyordu.",
    approach:
      "Portfolyo; seçili vaka mantığıyla yeniden kurgulandı. Her iş için giriş metni, proje ritmi ve görsel açıklık yeniden yazıldı. Sayfa akışı mimari dil kadar sakin tutuldu.",
    outcome:
      "Yeni düzen daha küratöryel bir his verdi. Ziyaretçi hangi projeye neden baktığını daha iyi anlıyor, stüdyo ise kendi tonunu daha kontrollü biçimde gösteriyor.",
    gallery: [
      {
        image: "/work-mira-residence.svg",
        alt: "Mira Residence için soyut mimari portfolyo kompozisyonu"
      }
    ],
    services: ["Portfolyo kurgusu", "Case study yapısı", "Mobil düzen"],
    deliverables: [
      "Portfolyo giriş sayfası",
      "Proje detay akışı",
      "Mobil okunurluk sistemi"
    ],
    aspectClassName: "aspect-[16/13]",
    testimonial: {
      quote:
        "Projelere ilk kez bu kadar net bir mesafe ve ağırlık kazandırabildik. Site portfolyomuzu sakinleştirdi.",
      name: "Ece Demir",
      role: "Direktör, Mira Residence",
      avatar: "/avatar-ece-demir.svg"
    }
  },
  {
    slug: "vale-house",
    category: "Editoryal commerce",
    title: "Vale House",
    year: "2024",
    partner: "Vale House",
    sector: "Mobilya markası",
    description:
      "Koleksiyon, malzeme notları ve talep akışını tek bir editoryal düzende buluşturan sakin commerce yaklaşımı.",
    coverImage: "/work-vale-house.svg",
    coverAlt: "Vale House için oluşturulmuş soyut editoryal commerce görseli",
    ctaLabel: "Vaka sayfasını aç",
    intro:
      "Marka, ürünlerini daha az kalabalık ve daha güven veren bir çerçevede göstermek istiyordu. Ticari yönün görünür olması gerekiyordu ama satış baskısı hissedilmemeliydi.",
    problem:
      "Ürün sayfaları çok şey anlatmaya çalışıyor, bu da hem okunurluğu hem de malzeme hissini zayıflatıyordu.",
    approach:
      "Koleksiyon yapısı sadeleştirildi, metinler kısaltıldı ve CTA noktaları daha doğal aralıklara taşındı. Görseller, dekor olmaktan çıkarılıp anlatının parçası haline getirildi.",
    outcome:
      "Site, satış arayüzü gibi değil seçili bir marka yayını gibi hissettirmeye başladı. Bu da hem ürün algısını hem de talep kalitesini yükseltti.",
    gallery: [
      {
        image: "/work-vale-house.svg",
        alt: "Vale House için soyut editoryal commerce kompozisyonu"
      }
    ],
    services: ["Editoryal commerce", "İçerik yönü", "Talep sistemi"],
    deliverables: [
      "Koleksiyon lansmanı",
      "Malzeme anlatısı",
      "Teklif toplama akışı"
    ],
    aspectClassName: "aspect-[16/11]",
    testimonial: {
      quote:
        "Yeni düzen daha az satış baskısı kuruyor ama ürünleri çok daha güçlü gösteriyor. İhtiyacımız tam olarak buydu.",
      name: "Emre Yalın",
      role: "Marka yöneticisi, Vale House",
      avatar: "/avatar-emre-yalin.svg"
    }
  },
  {
    slug: "deniz-arden",
    category: "Kişisel marka",
    title: "Deniz Arden",
    year: "2024",
    partner: "Deniz Arden",
    sector: "Yaratıcı yönetmen",
    description:
      "Metin ağırlıklı ama nefesli yapısıyla portfolyo, hizmet ve iletişim akışını aynı yüzeyde toplayan kişisel marka sitesi.",
    coverImage: "/work-deniz-arden.svg",
    coverAlt: "Deniz Arden için oluşturulmuş soyut kişisel marka portfolyo görseli",
    ctaLabel: "Vaka sayfasını aç",
    intro:
      "Site; yüksek hacimli bir kişisel marka vitrini değil, daha kontrollü ve karakterli bir dijital yüzey olarak düşünülmüştü.",
    problem:
      "İşler, hizmetler ve kişisel ton aynı anda görünmek istiyordu. Bunu yaparken sayfayı agency landing page gibi hissettirmemek gerekiyordu.",
    approach:
      "Tipografi ölçeği yükseltildi, bölüm sayısı azaltıldı ve sayfa daha çok bir yayın gibi kurgulandı. İletişim bölümü ise gösterişli CTA yerine daha net bir inquiry akışıyla çözüldü.",
    outcome:
      "Portfolyo; kişisel marka hissini korurken daha profesyonel ve kalıcı bir tona geçti. Ziyaretçi sayfada dolaşmıyor, sayfanın ritmi tarafından yönlendiriliyor.",
    gallery: [
      {
        image: "/work-deniz-arden.svg",
        alt: "Deniz Arden için soyut kişisel marka portfolyo kompozisyonu"
      }
    ],
    services: ["Kişisel marka sitesi", "Hizmet akışı", "İletişim tasarımı"],
    deliverables: [
      "Tek sayfa portfolyo",
      "Hizmet ve süreç anlatısı",
      "İletişim formu ve lead akışı"
    ],
    aspectClassName: "aspect-[16/13]",
    testimonial: {
      quote:
        "Sayfa artık bir hizmet listesi gibi değil, kendi tonuma ait bir yüzey gibi davranıyor. En güçlü fark bu oldu.",
      name: "Baran Işık",
      role: "Danışman, Deniz Arden Studio",
      avatar: "/avatar-baran-isik.svg"
    }
  }
];

export const featuredProjects = projects.slice(0, 4);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
