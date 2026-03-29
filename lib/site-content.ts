import { featuredProjects, projects } from "@/lib/projects";

export const navigation = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" }
] as const;

export const topNavCta = {
  href: "/#contact",
  label: "Contact"
} as const;

export const heroContent = {
  eyebrow: "Studio Coşgun / independent digital direction",
  wordmark: "Studio Coşgun",
  secondaryWordmark: "Portfolio Systems",
  portrait: {
    src: "/studio-portrait.svg",
    alt: "Studio Coşgun için hazırlanmış koyu tonlu editoryal portre illüstrasyonu"
  },
  portraitTag: "Independent studio",
  portraitNote: "Since 2020",
  title: "Portfolyoları sahneye taşıyan daha derin dijital yüzeyler.",
  description:
    "Studio Coşgun; mimarlık, obje, moda ve kişisel marka alanlarında çalışan ekipler için merkezinde imaj, ritim ve hareket olan koyu portfolyolar, lansman sayfaları ve vaka sistemleri tasarlar.",
  primaryCta: {
    href: "/#work",
    label: "Selected work"
  },
  secondaryCta: {
    href: "/#contact",
    label: "Start inquiry"
  },
  ambientLine:
    "Istanbul based / portfolio systems / digital launches / inquiry flows",
  details: [
    {
      label: "Now booking",
      value: "Mayıs 2026 başlangıçları için yeni eşleşmeler alınıyor."
    },
    {
      label: "Focus",
      value:
        "Mimarlık, obje, moda ve kişisel marka alanlarında çalışan daha seçici ekipler."
    },
    {
      label: "Format",
      value:
        "Tek sayfa showcase yapıları, vaka detayları ve premium inquiry akışları."
    }
  ]
} as const;

export const servicesContent = {
  eyebrow: "Services",
  title: "Katmanlı yüzeyler, net yön ve daha güçlü ilk temas.",
  intro:
    "Amaç yalnızca şık bir ilk ekran değil; markayı daha sinematik, daha derin ve daha kontrollü bir dijital akış içinde sahneye taşımak.",
  items: [
    {
      title: "Marka siteleri",
      description:
        "İlk ekranın ne söylediğini netleştiren, metin ritmine ve görsel sessizliğe dayanan tek sayfa ya da küçük ölçekli marka siteleri.",
      detail: "İçerik hiyerarşisi, tipografi ölçeği, responsive düzen"
    },
    {
      title: "Portfolyo sistemleri",
      description:
        "Seçili işlerin galeri gibi değil küratöryel bir sıra içinde görünmesini sağlayan vaka ve portfolyo yapıları.",
      detail: "Slug yapısı, vaka detayları, ana sayfa akışı"
    },
    {
      title: "Görsel yön",
      description:
        "Renk, görsel dil, başlık davranışı ve boşluk kullanımını aynı tona getiren daha sakin bir arayüz yönü.",
      detail: "Arayüz tonu, görsel referans, tasarım sistemi"
    },
    {
      title: "İnquiry akışı",
      description:
        "İletişim bölümünü sonradan eklenen bir CTA kutusu olmaktan çıkarıp, gerçek bir proje başlangıç alanına dönüştüren form ve süreç kurgusu.",
      detail: "Form yapısı, bilgi alanları, yanıt akışı"
    }
  ]
} as const;

export const workContent = {
  eyebrow: "Selected work",
  title: "Her proje, daha büyük bir atmosfer içinde sahne almalı.",
  intro:
    "Buradaki yapı galeri mantığıyla değil, seçilmiş showcase ritmiyle çalışıyor. Her iş kendi ağırlığını korurken bütün sayfa aynı karanlık, parlak ve kontrollü dile bağlı kalıyor.",
  projects: featuredProjects
} as const;

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Yoğun sprint ya da daha uzun soluklu partnerlik.",
  intro:
    "İki yapı da aynı premium yön duygusunu korur. Fark, çalışmanın ne kadar hızlı başlayacağı ve yıl içine ne kadar yayılacağıdır.",
  toggle: {
    monthly: "Monthly",
    yearly: "Yearly"
  },
  plans: [
    {
      label: "Tek sayfa veya küçük site",
      title: "Studio Edit",
      description:
        "Marka tonunu, giriş ekranını ve iletişim akışını yeniden kuran odaklı tasarım partnerliği.",
      pricing: {
        monthly: "₺42.000 / ay",
        yearly: "₺420.000 / yıl"
      },
      cadence: {
        monthly: "4 haftalık yoğun düzenleme ve teslim döngüsü",
        yearly: "12 ay boyunca çeyreksel büyük revizyonlar ve ritim güncellemeleri"
      },
      features: [
        "Site mimarisi ve içerik yönü",
        "Responsive tasarım sistemi",
        "İletişim akışı ve form mantığı",
        "Lansman veya güncelleme desteği"
      ],
      href: "/#contact",
      ctaLabel: "Kapsam sor",
      featured: false
    },
    {
      label: "Portfolyo ve vaka yapısı",
      title: "Editorial Partner",
      description:
        "Ana sayfa, vaka detayları ve uzun ömürlü tasarım sistemini birlikte ele alan daha derin partnerlik.",
      pricing: {
        monthly: "₺68.000 / ay",
        yearly: "₺680.000 / yıl"
      },
      cadence: {
        monthly: "Aylık tasarım sprintleri ve içerik güncellemeleri",
        yearly: "Yıl boyunca vaka sayfaları, sayfa evrimi ve yeni lansman modülleri"
      },
      features: [
        "Ana sayfa ve slug temelli vaka yapısı",
        "Küratöryel proje sıralaması",
        "Hareket sistemi ve detay iyileştirmeleri",
        "Yıl içi sayfa ekleme / revizyon planı"
      ],
      href: "/#contact",
      ctaLabel: "Partnerlik konuş",
      featured: true
    }
  ],
  note:
    "Yıllık yapı, düzenli içerik güncellemeleri ve iki ek strateji oturumuyla birlikte düşünülür."
} as const;

export const testimonialsContent = {
  eyebrow: "Testimonials",
  title: "Parlak görünen değil, doğru hissettiren yüzeyler.",
  intro:
    "Alıntılar burada sosyal kanıt listesi gibi değil; birlikte çalışmanın bıraktığı yoğunluk, sakinlik ve netlik duygusunu göstermek için duruyor.",
  items: projects.map((project) => project.testimonial)
};

export const faqContent = {
  eyebrow: "FAQ",
  title: "Kararı hızlandıran, ama hissi bozmayan yanıtlar.",
  intro:
    "Kapsam, teslim süresi ve yayın sonrası devam biçimi hakkında en çok sorulan başlıklar.",
  items: [
    {
      question: "Bu çalışma kimler için doğru eşleşme?",
      answer:
        "Daha sakin ama daha seçici bir dijital yüzey arayan küçük ekipler, tasarım odaklı markalar ve kişisel pratiklerle iyi sonuç alıyorum. Çok sayıda sayfa yerine güçlü bir giriş ve temiz bir akış önceliğim."
    },
    {
      question: "İçerik tamamen hazır mı olmalı?",
      answer:
        "Hayır. Başlangıç için kaba metinler, proje listesi ve kısa bir yön duygusu yeterli. İçerik yoğunluğunu süreç içinde birlikte temizliyoruz."
    },
    {
      question: "Vaka sayfaları veya yeni işler sonradan eklenebilir mi?",
      answer:
        "Evet. Yapı, yeni projelerin slug temelli sayfalara dönüşebileceği şekilde hazırlanıyor. Bu yüzden ana sayfa tek başına kapanmış bir mock gibi davranmıyor."
    },
    {
      question: "Aylık ve yıllık çalışma arasındaki temel fark ne?",
      answer:
        "Aylık yapı daha odaklı ve yoğun bir düzenleme ritmi sunar. Yıllık partnerlik ise tasarımın yaşayan bir yayın gibi evrilmesini ve yeni sayfaların zaman içinde eklenmesini kapsar."
    },
    {
      question: "Mobil uyum ve performans yaklaşımı nasıl ele alınıyor?",
      answer:
        "Mobil görünüm baştan düşünülür; tipografi küçülse bile karakterini kaybetmez. Hareketler düşük yoğunlukta tutulur, sayfa ağırlığı ise gereksiz süslerden arındırılır."
    },
    {
      question: "Yayın sonrası destek devam ediyor mu?",
      answer:
        "Evet. Teslim sonrası küçük düzeltmeler ve kısa bir stabilizasyon dönemi dahil. Daha uzun süreli güncelleme ihtiyacı varsa bunu aylık ya da yıllık yapı içinde ele alıyoruz."
    }
  ]
} as const;

export const contactContent = {
  eyebrow: "Inquiry",
  title: "Bir sonraki lansmanı, portfolyoyu ya da vaka sistemini birlikte çerçeveleyebiliriz.",
  intro:
    "Projeyi birkaç alanla paylaşın. Uygun eşleşmeler için ilk yanıtta kapsam, ritim ve önerilen çalışma modeli net biçimde geri döner.",
  details: [
    {
      label: "Email",
      value: "hello@busracosgun.com",
      href: "mailto:hello@busracosgun.com"
    },
    {
      label: "Uygun ritim",
      value: "Yeni lansmanlar, portfolyo revizyonları, vaka sayfaları"
    },
    {
      label: "Takvim",
      value: "Yeni iş başlangıcı için sonraki pencere: Mayıs 2026"
    }
  ],
  helper:
    "Form gönderildikten sonra kapsam uygun görünüyorsa kısa bir keşif görüşmesi bağlantısı paylaşıyorum.",
  subjectOptions: [
    "New site launch",
    "Portfolio refresh",
    "Case-study system",
    "Monthly design partner",
    "Yearly partnership"
  ],
  projectTypes: [
    "One-page launch",
    "Portfolio system",
    "Case-study pages",
    "Personal brand site",
    "Ongoing partnership"
  ],
  budgetOptions: ["₺40K - ₺80K", "₺80K - ₺140K", "₺140K+"],
  consentLabel:
    "Bilgilerimin proje değerlendirmesi amacıyla kullanılmasını kabul ediyorum."
} as const;

export const footerContent = {
  statement:
    "Tek sayfa showcase’ler, portfolyo sistemleri ve vaka sayfaları için koyu tonlu bağımsız dijital yön pratiği.",
  links: [
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Work" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#contact", label: "Contact" }
  ],
  socials: [
    { href: "mailto:hello@busracosgun.com", label: "Email" },
    { href: "https://www.instagram.com", label: "Instagram" },
    { href: "https://www.linkedin.com", label: "LinkedIn" }
  ]
} as const;
