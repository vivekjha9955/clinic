// ===== NAVIGATION DATA =====
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Hearing Care Solution in Ranchi", href: "#services" },
      { label: "Hearing Test in Ranchi", href: "#services" },
      { label: "Hearing Aid Center in Ranchi", href: "#services" },
      { label: "Speech Therapy in Ranchi", href: "#services" },
      { label: "ENT Services in Ranchi", href: "#services" },
      { label: "Pure Tone Audiometry Test", href: "#services" },
      { label: "BERA Test in Ranchi", href: "#services" },
      { label: "OAE Test in Ranchi", href: "#services" },
    ],
  },
  { label: "Hearing Devices", href: "#brands" },
  // { label: "Blog", href: "#blogs" },
  { label: "FAQ", href: "#" },
];

// ===== HERO SLIDES =====
// ===== HERO SLIDES =====
export const HERO_SLIDES = [
  {
    id: 1,
    tag: "Trusted Hearing Care Experts",
    gradient: "linear-gradient(135deg, #7a0000 0%, #9f0712 45%, #c1121f 100%)",
    title: "Hear Better. Live Better.",
    subtitle:
      "Comprehensive hearing care solutions with expert audiologists, advanced testing, and personalised support for every age group.",
    btnText: "Book Appointment",
    btnIcon: "fas fa-calendar-check",
    btnHref: "#contact",
    secondaryText: "Explore Services",
    secondaryIcon: "fas fa-stethoscope",
    secondaryHref: "#services",
    icon: "fas fa-ear-listen",
  },
  {
    id: 2,
    tag: "Modern Digital Hearing Aids",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 45%, #38bdf8 100%)",
    title: "Advanced Hearing Aids for Every Lifestyle",
    subtitle:
      "Discover discreet, rechargeable, Bluetooth-enabled hearing devices from leading global brands — expertly fitted for comfort and clarity.",
    btnText: "View Hearing Devices",
    btnIcon: "fas fa-headphones",
    btnHref: "#brands",
    secondaryText: "Hearing Aid Types",
    secondaryIcon: "fas fa-wave-square",
    secondaryHref: "#hearing-types",
    icon: "fas fa-headphones-simple",
  },
  {
    id: 3,
    tag: "17+ Years of Trusted Experience",
    gradient: "linear-gradient(135deg, #0f766e 0%, #0ea5a4 45%, #22c55e 100%)",
    title: "Personalised Hearing Solutions You Can Trust",
    subtitle:
      "From diagnosis to fitting and after-care, we help you regain confidence with reliable hearing solutions tailored to your unique needs.",
    btnText: "Get Free Consultation",
    btnIcon: "fas fa-user-doctor",
    btnHref: "#contact",
    secondaryText: "Why Choose Us",
    secondaryIcon: "fas fa-circle-info",
    secondaryHref: "#about",
    icon: "fas fa-user-doctor",
  },
];

// ===== SERVICES DATA =====
export const SERVICES = [
  { id: 1, icon: "fas fa-microscope", title: "Hearing Test", description: "Conducting precise, state-of-the-art hearing tests to evaluate auditory function and determine the best solutions for any degree of hearing loss.", href: "#" },
  { id: 2, icon: "fas fa-headphones", title: "Hearing Aid", description: "Offering advanced, customizable hearing aids designed to enhance sound quality and ensure comfort, empowering individuals with hearing loss to live confidently.", href: "#" },
  { id: 3, icon: "fas fa-comments", title: "Speech Therapy", description: "Delivering tailored speech therapy sessions to address speech and language disorders, fostering clearer communication and boosting confidence in everyday interactions.", href: "#" },
  { id: 4, icon: "fas fa-heart-pulse", title: "Hearing Care", description: "Providing personalized hearing care solutions, from consultation to ongoing support, aimed at preserving auditory health and improving overall quality of life.", href: "#" },
];

// ===== STATS DATA =====
export const STATS = [
  { id: 1, icon: "fas fa-calendar-days", target: 17, suffix: "+", label: "Years of Experience" },
  { id: 2, icon: "fas fa-face-smile", target: 9000, suffix: "+", label: "Happy Customers" },
  { id: 3, icon: "fas fa-headphones", target: 13000, suffix: "+", label: "Hearing Aids Sold" },
  { id: 4, icon: "fas fa-stethoscope", target: 11000, suffix: "+", label: "Hearing Tests Done" },
];

// ===== WHY TRUST DATA =====
export const TRUST_ITEMS = [
  { id: 1, icon: "fas fa-certificate", label: "Signia Certified Center" },
  { id: 2, icon: "fas fa-user-doctor", label: "Team of Professional Audiologists" },
  { id: 3, icon: "fas fa-microscope", label: "World Class Equipments" },
  { id: 4, icon: "fas fa-clock", label: "17+ Years of Experience" },
  { id: 5, icon: "fas fa-house-medical", label: "Home Visit Facility" },
  { id: 6, icon: "fas fa-comments", label: "Speech Therapy Available" },
];

// ===== TESTIMONIALS DATA =====
export const TESTIMONIALS = [
  { id: 1, avatar: "R", name: "Ritik Mehta", text: "I recently bought a hearing aid from here. People were very friendly and helpful and explained it very calmly and reasonably how to use it. Their service was very good.", rating: 4 },
  { id: 2, avatar: "S", name: "Suman Kumar Mishra", text: "Got new machine feeling better and balanced. Most important that they understand the need of person who visits. Good experience doctor with expertise and staff well mannered. Thank you.", rating: 4.5 },
  { id: 3, avatar: "P", name: "Prakash Sharma", text: "I am a repeat customer of Hearing Hope and bought my new Hearing Aids from them. The whole team is very customer-friendly and gives service with a smile. All the very best!", rating: 5 },
  { id: 4, avatar: "S", name: "Srishti Banzal", text: "The staff was very professional and friendly. They gave my grandmother a very good audiometry and hearing aid trial at home. I would recommend Hearing Hope for your needs.", rating: 5 },
  { id: 5, avatar: "G", name: "Gaurav Vij", text: "Happy with service. The staff is very co-operative. They provide the best services to their patients and provided a good hearing aid for my brother. Thanks.", rating: 4.2 },
];

// ===== CERTIFICATIONS =====
export const CERTIFICATIONS = [
  { id: 1, icon: "fas fa-award" }, { id: 2, icon: "fas fa-medal" },
  { id: 3, icon: "fas fa-certificate" }, { id: 4, icon: "fas fa-shield-halved" },
  { id: 5, icon: "fas fa-ribbon" }, { id: 6, icon: "fas fa-star" },
  { id: 7, icon: "fas fa-trophy" }, { id: 8, icon: "fas fa-check-circle" },
];

// ===== BLOGS DATA =====
export const BLOGS = [
  { id: 1, icon: "fas fa-ear-listen", date: "January 2026", title: "Top Features of Signia 5IX Hearing Aid You Need to Know", excerpt: "If you are looking for a hearing solution that delivers exceptional sound clarity, the Signia 5IX might be right for you...", href: "#" },
  { id: 2, icon: "fas fa-headphones-simple", date: "January 2026", title: "Why the Signia 3IX Hearing Aid Is a Game-Changer for Hearing Loss", excerpt: "Hearing loss can affect anyone, and it often comes gradually. The Signia 3IX is designed to address this effectively...", href: "#" },
  { id: 3, icon: "fas fa-stethoscope", date: "September 2025", title: "What Is the Best Signia Hearing Aid? Complete 2025 Guide", excerpt: "If you're wondering what is the best Signia hearing aid, this comprehensive guide covers all models and use cases...", href: "#" },
];

// ===== CONTACT INFO =====
export const CONTACT_INFO = {
  email: "indian.speechhearingclinic@gmail.com",
  phone1: "+91 6367667306",
  phone2: "+91 6367667306",
  whatsapp: "6367667306",
  mapUrl: "https://www.google.com/maps?q=23.38892,85.33644",
  locations: [
    {
      id: 1,
      label: "Indian Speech & Hearing Clinic",
      address: "1st floor, Arctic Mall, Bariatu Road, Ranchi - 834009, Jharkhand, India",
      mapUrl: "https://www.google.com/maps?q=23.38892,85.33644",
    },
  ],
};

// ===== FOOTER LINKS =====
export const FOOTER_COMPANY_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Hearing Devices Types", href: "#brands" },
  { label: "Hearing Devices Models", href: "#brands" },
  { label: "Blog", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export const FOOTER_SERVICE_LINKS = [
  { label: "Hearing Test", href: "#services" },
  { label: "Hearing Aid", href: "#services" },
  { label: "Hearing Care", href: "#services" },
  { label: "Speech Therapy", href: "#services" },
  { label: "ENT Services", href: "#services" },
  { label: "BERA Test", href: "#services" },
];

// ===== HEARING BRANDS =====
// image: filename inside src/assets/ (imported in Brands.jsx)
export const HEARING_BRANDS = [
  {
    id: 1,
    brand: "Phonak",
    brandImage: "phonak.png",
    icon: "fas fa-headphones",
    tagline: "Excellent speech clarity & powerful Bluetooth connectivity",
    models: [
      { name: "Audeo Lumity",   type: "RIC",          image: "AudioParadise.jpg",  icon: "fas fa-headphones", desc: "Latest generation with stellar speech clarity in noise. Features AutoSense OS 5.0 that automatically adapts to any sound environment." },
      { name: "Audeo Paradise", type: "RIC",          image: "AudioParadise.jpg",  icon: "fas fa-wifi",       desc: "Universal connectivity to any Bluetooth device. Crystal-clear sound with motion sensor hearing that adapts dynamically." },
      { name: "Naída Paradise", type: "BTE Power",    image: "NaidaParadise.jpg",  icon: "fas fa-bolt",       desc: "Designed for severe to profound hearing loss. Ultra-powerful amplification without compromising on sound quality." },
      { name: "Virto Paradise", type: "Custom IIC",   image: "VirtoParadise.jpg",  icon: "fas fa-eye-slash",  desc: "Virtually invisible custom-fit aid built into the ear canal. Personalized fit with premium Paradise sound quality." },
      { name: "Sky Marvel",     type: "BTE (Children)",image: "SkyMarvel.jpg",     icon: "fas fa-child",      desc: "Specially designed for children with hearing loss. Durable, colorful, and built for active kids — supports speech development." },
      { name: "Bolero Marvel",  type: "BTE (Family)", image: "BoleroMarvel.jpg",   icon: "fas fa-people-group",desc: "A robust BTE hearing aid ideal for the whole family. Reliable performance with excellent speech understanding." },
    ],
  },
  {
    id: 2,
    brand: "Signia",
    brandImage: "signia.jpg",
    icon: "fas fa-ear-listen",
    tagline: "Stylish design & AI-powered sound processing",
    models: [
      { name: "Pure Charge & Go IX", type: "RIC Rechargeable", image: "SigniaPureCharge&GoIX.jpg", icon: "fas fa-battery-full",   desc: "AI-powered with Own Voice Processing technology. Rechargeable all-day battery with seamless Bluetooth streaming." },
      { name: "Styletto IX",         type: "Slim RIC",          image: "SigniaStyllettoIX.jpg",     icon: "fas fa-gem",            desc: "Fashion-forward slim design. Recharges like a smartphone — charging case provides 3 full charges on the go." },
      { name: "Insio AX",            type: "Custom ITC",        image: "SigniaInsioAX.jpg",         icon: "fas fa-microchip",      desc: "Custom-crafted invisible aid with Augmented Xperience platform. Splits sound processing for razor-sharp speech clarity." },
      { name: "Silk Charge & Go",    type: "Instant Fit CIC",   image: "SigniaSilkCharge_Go.jpg",   icon: "fas fa-circle-dot",     desc: "Ready-to-wear invisible aid — no custom fitting needed. The smallest rechargeable hearing aid available." },
      { name: "Active Pro",          type: "Ear-level (Family)",image: "Signia-Active-Pro-768x768.png", icon: "fas fa-people-group", desc: "Designed for active lifestyles — ideal for working adults and elderly. Natural sound with a modern design." },
      { name: "Fun SP",              type: "BTE (Children)",    image: "SigniaFunSP.png",            icon: "fas fa-child",          desc: "Powerful BTE hearing aid for children with moderate to profound hearing loss. Supports speech and language development." },
    ],
  },
  {
    id: 3,
    brand: "Widex",
    brandImage: "widex.jpg",
    icon: "fas fa-music",
    tagline: "Natural sound quality & exceptional music performance",
    models: [
      { name: "Widex Moment",   type: "RIC",          image: "widex.jpg",          icon: "fas fa-wave-square", desc: "PureSound technology eliminates the artificial sound effect. Most natural sound experience, indistinguishable from normal hearing." },
      { name: "Widex SmartRIC", type: "RIC",          image: "WidexSmartRIC.jpg",  icon: "fas fa-sliders",     desc: "Unique ergonomic design with long-lasting rechargeable battery. Smart controls and excellent directional microphone system." },
      { name: "Widex Evoke",    type: "RIC",          image: "WidexEvoke.png",     icon: "fas fa-brain",       desc: "Machine learning adapts to your personal preferences over time. SoundSense Learn creates a truly personalized hearing experience." },
      { name: "Widex Easywear", type: "BTE (Family)", image: "WidexEasywear.jpg",  icon: "fas fa-people-group",desc: "Straightforward and reliable, ideal for elderly family members or first-time hearing aid users. Simple controls." },
      { name: "Widex Moment Sheer", type: "RIC",      image: "WidexWideMoment.jpg",icon: "fas fa-music",       desc: "Groundbreaking sound with the lowest input-to-output delay of any hearing aid. Pure, natural sound in every environment." },
    ],
  },
  {
    id: 4,
    brand: "Oticon",
    brandImage: "Oticon-Hearing-Aids.jpg",
    icon: "fas fa-brain",
    tagline: "BrainHearing technology for better speech in noise",
    models: [
      { name: "Oticon Real",    type: "RIC",              image: "OticonReal.png",         icon: "fas fa-wind",          desc: "Handles sudden disturbing sounds in real time. Delivers a balanced, real-life sound experience with BrainHearing technology." },
      { name: "Oticon More",    type: "RIC",              image: "OticonMore.jpg",         icon: "fas fa-network-wired", desc: "Deep Neural Network trained on 12 million real-life sounds. Gives the brain more sound detail for effortless understanding." },
      { name: "Oticon Own",     type: "Custom IIC/CIC",   image: "OticonOwn.jpg",          icon: "fas fa-eye-slash",     desc: "Invisible custom hearing aid with the full BrainHearing chip inside. Personalized fit for all-day comfort." },
      { name: "Oticon Play PX", type: "BTE (Children)",   image: "OticonPlayPX.jpg",       icon: "fas fa-child",         desc: "Purpose-built for children. Rugged, water-resistant, packed with features to help kids hear and learn better." },
      { name: "Oticon Xceed",   type: "BTE Power (Family)",image: "OticonXceed.jpg",       icon: "fas fa-people-group",  desc: "The world's most powerful hearing aid for severe to profound hearing loss. Ideal for elderly family members." },
    ],
  },
  {
    id: 5,
    brand: "Starkey",
    brandImage: "starkey.jpg",
    icon: "fas fa-star",
    tagline: "AI features, health tracking & fall detection",
    models: [
      { name: "Evolv AI",    type: "RIC",           image: "starkey-evolv-ai-2000-digital-hearing-aids-1000x1000.jpg", icon: "fas fa-robot",     desc: "Advanced AI processes sound 55 million times per second. Built-in health sensors track activity and detect falls." },
      { name: "Genesis AI",  type: "RIC",           image: "starkey-bte-13-m-use-iq-1200-.jpg",                        icon: "fas fa-dna",       desc: "Most advanced Starkey platform yet. Edge Mode+ provides instant sound optimization with a single tap." },
      { name: "Livio AI",    type: "RIC",           image: "Starkey-Livio-AI.jpg",                                     icon: "fas fa-heartbeat", desc: "World's first hearing aid to track both hearing and body health. Monitors physical activity and cognitive engagement." },
      { name: "SoundLens",   type: "Invisible IIC", image: "Starkey-SoundLens-iQ-IIC.jpg",                             icon: "fas fa-low-vision",desc: "Completely invisible sitting deep in the ear canal. Custom-fit for comfortable all-day wear." },
      { name: "Muse iQ",     type: "BTE (Family)",  image: "starkey-genesis-ai-16-cic-hearing-aids.jpg",               icon: "fas fa-people-group",desc: "A dependable, full-featured BTE hearing aid suited to the whole family. Clear speech with easy volume controls." },
    ],
  },
  {
    id: 6,
    brand: "ReSound",
    brandImage: "resound.png",
    icon: "fas fa-signal",
    tagline: "Strong connectivity, clear sound & great app control",
    models: [
      { name: "ReSound Nexia", type: "RIC",          image: "ReSoundNexia.jpg",  icon: "fas fa-rss",         desc: "Auracast broadcast technology ready. Connects directly to more devices than any other hearing aid." },
      { name: "ReSound Omnia", type: "RIC",          image: "ReSoundOmnia.jpg",  icon: "fas fa-globe",       desc: "Full surround sound with 150% better speech understanding in noise. Organic Hearing philosophy." },
      { name: "ReSound ONE",   type: "RIC",          image: "ReSoundONE.jpg",    icon: "fas fa-fingerprint", desc: "Unique microphone inside the ear canal. M&RIE design delivers unmatched spatial awareness." },
      { name: "ENZO Q",        type: "BTE Power",    image: "ENZOQ.jpg",         icon: "fas fa-volume-up",   desc: "Made for severe to profound hearing loss. Superpower performance with direct iPhone streaming." },
      { name: "ReSound Key",   type: "BTE (Family)", image: "ReSoundKey.jpg",    icon: "fas fa-people-group",desc: "An accessible and affordable hearing aid for the whole family. Reliable sound with simple controls." },
      {
  name: "ReSound Nexia ITC",
  type: "ITC",
  image: "ResoundNexiaITC.jpg",
  icon: "fas fa-ear-listen",
  desc: "A custom In-the-Canal hearing aid from the ReSound Nexia family designed for users who want a discreet fit with clear speech understanding, natural sound quality, and all-day wearing comfort. Ideal for mild to moderately-severe hearing loss."
}
    ],
  },
  {
    id: 7,
    brand: "Unitron",
    brandImage: "unitron.jpg",
    icon: "fas fa-sliders",
    tagline: "Flexible upgrade options & great mid-range performance",
    models: [
      { name: "Moxi Blu",   type: "RIC",          image: "UnitronMoxiBlu.jpg",  icon: "fas fa-tint",        desc: "Rechargeable RIC with Bluetooth streaming. Excellent mid-range performance with flexible upgrade options." },
      { name: "Moxi Jump",  type: "RIC",          image: "UnitronMoxiBlu.jpg",  icon: "fas fa-arrow-up",    desc: "Compact and discreet RIC hearing aid. Easy to use with smart controls and reliable performance." },
      { name: "Insera",     type: "Custom ITC",   image: "UnitronInsera.jpg",   icon: "fas fa-circle",      desc: "Custom in-the-ear hearing aid with a natural fit. Discreet design for mild to moderately-severe loss." },
      { name: "Stride P",   type: "BTE (Family)", image: "UnitronStrideP.jpg",  icon: "fas fa-people-group",desc: "A powerful BTE hearing aid suited to the whole family. Handles moderate to severe hearing loss comfortably." },
    ],
  },
];