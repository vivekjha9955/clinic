// ===== NAVIGATION DATA =====
import FirstCaraousel from "../assets/FirstCaraousel.png";
import SecondCarousel from "../assets/SecondCaraousel.png";
import ThirdCaraousel from "../assets/ThirdCaraousel.png";
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
    image: FirstCaraousel,
    alt: "Hearing care awareness banner",
  },
  {
    id: 2,
    image: SecondCarousel,
    alt: "Sensorineural hearing loss banner",
  },
  {
    id: 3,
    image: ThirdCaraousel,
    alt: "Advanced hearing aids banner",
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
  // { id: 1, icon: "fas fa-certificate", label: "Signia Certified Center" },
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
  phone1: "+91 8210394248",
  phone2: "+91 8210394248",
  whatsapp: "8210394248",
  mapUrl: "https://maps.app.goo.gl/jHTSBgvu6ddwRuwh8",
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
    overview:
      "Phonak is one of the world’s most trusted hearing aid brands, known for premium speech clarity, universal Bluetooth connectivity, and solutions for every degree of hearing loss. It is especially recommended for users who want reliable performance in conversations, noisy environments, TV streaming, and daily smartphone use.",
    bestFor:
      "Ideal for users looking for premium sound quality, strong Bluetooth support, rechargeable convenience, and hearing solutions from mild to profound hearing loss.",
    highlights: [
      "Excellent speech clarity in noisy environments",
      "Universal Bluetooth connectivity with smartphones and TVs",
      "Rechargeable and custom-fit styles available",
      "Suitable for mild to profound hearing loss",
    ],
    models: [
      { name: "Audeo Lumity", type: "RIC", image: "AudioParadise.jpg", icon: "fas fa-headphones", desc: "Latest generation with stellar speech clarity in noise. Features AutoSense OS 5.0 that automatically adapts to any sound environment." },
      { name: "Audeo Paradise", type: "RIC", image: "AudioParadise.jpg", icon: "fas fa-wifi", desc: "Universal connectivity to any Bluetooth device. Crystal-clear sound with motion sensor hearing that adapts dynamically." },
      { name: "Naída Paradise", type: "BTE Power", image: "NaidaParadise.jpg", icon: "fas fa-bolt", desc: "Designed for severe to profound hearing loss. Ultra-powerful amplification without compromising on sound quality." },
      { name: "Virto Paradise", type: "Custom IIC", image: "VirtoParadise.jpg", icon: "fas fa-eye-slash", desc: "Virtually invisible custom-fit aid built into the ear canal. Personalized fit with premium Paradise sound quality." },
      { name: "Sky Marvel", type: "BTE (Children)", image: "SkyMarvel.jpg", icon: "fas fa-child", desc: "Specially designed for children with hearing loss. Durable, colorful, and built for active kids — supports speech development." },
      { name: "Bolero Marvel", type: "BTE (Family)", image: "BoleroMarvel.jpg", icon: "fas fa-people-group", desc: "Reliable BTE hearing aid ideal for elderly family members. Easy handling, strong amplification, and comfortable fit." },
    ],
  },

  {
    id: 2,
    brand: "Signia",
    brandImage: "signia.jpg",
    icon: "fas fa-microchip",
    tagline: "Stylish design & AI-powered sound processing",
    overview:
      "Signia is a premium German hearing aid brand known for stylish modern designs, AI-powered sound processing, and advanced speech enhancement. It is an excellent choice for users who want fashionable hearing aids that also deliver smart performance in everyday life.",
    bestFor:
      "Best for users who want sleek rechargeable hearing aids, smart app control, advanced speech enhancement, and premium design with comfort.",
    highlights: [
      "AI-powered sound processing",
      "Stylish and discreet premium designs",
      "Rechargeable options with portable charging cases",
      "Great for social conversations and daily use",
    ],
    models: [
      { name: "Pure Charge & Go IX", type: "RIC Rechargeable", image: "SigniaPureCharge&GoIX.jpg", icon: "fas fa-battery-full", desc: "AI-powered with Own Voice Processing and all-day rechargeable battery. Great for active users who want seamless Bluetooth streaming." },
      { name: "Styletto IX", type: "Slim RIC", image: "SigniaStylettoIX.jpg", icon: "fas fa-mobile-alt", desc: "Slim, stylish design with premium charging case. Excellent for users wanting elegance and performance together." },
      { name: "Insio AX", type: "Custom ITC/CIC", image: "SigniaInsioAX.jpg", icon: "fas fa-eye-slash", desc: "Custom-crafted discreet hearing aid with split sound processing for sharper speech clarity in noisy settings." },
      { name: "Silk Charge & Go", type: "CIC Rechargeable", image: "SigniaSilkCharge_Go.jpg", icon: "fas fa-bolt", desc: "Instant-fit rechargeable CIC hearing aid that offers invisible comfort and quick fitting without waiting for custom molds." },
      { name: "Active Pro", type: "Earbud Style", image: "Signia-Active-Pro-768x768.png", icon: "fas fa-headphones-alt", desc: "Looks like premium earbuds while delivering advanced hearing support. Great for younger and style-conscious users." },
      { name: "Fun SP", type: "BTE Power", image: "SigniaFunSP.png", icon: "fas fa-volume-up", desc: "Powerful and simple hearing aid for users who need stronger amplification and easy everyday handling." },
    ],
  },

  {
    id: 3,
    brand: "Widex",
    brandImage: "widex.jpg",
    icon: "fas fa-music",
    tagline: "Natural sound quality & exceptional music performance",
    overview:
      "Widex is highly respected for delivering one of the most natural and comfortable listening experiences in hearing aids. It is especially loved by users who value music quality, smooth sound transitions, and tinnitus management support.",
    bestFor:
      "Best for users who prefer natural sound, music lovers, professionals, and those looking for hearing aids with tinnitus relief features.",
    highlights: [
      "Natural and comfortable sound quality",
      "Excellent performance for music listening",
      "Advanced tinnitus management options",
      "Premium long-wearing comfort and clarity",
    ],
    models: [
      { name: "Widex Moment", type: "RIC", image: "widex.jpg", icon: "fas fa-wave-square", desc: "PureSound technology eliminates the artificial sound effect. Delivers one of the most natural hearing experiences available." },
      { name: "Widex SmartRIC", type: "RIC", image: "WidexSmartRIC.jpg", icon: "fas fa-sliders", desc: "Modern ergonomic design with rechargeable convenience, directional microphones, and easy smart controls." },
      { name: "Widex Evoke", type: "RIC", image: "WidexEvoke.png", icon: "fas fa-brain", desc: "Machine learning adapts to your listening preferences over time, creating a more personalized hearing experience." },
      { name: "Widex Easywear", type: "BTE (Family)", image: "WidexEasywear.jpg", icon: "fas fa-people-group", desc: "Simple and dependable option for elderly family members or first-time users who want easy controls and comfort." },
      { name: "Widex Moment Sheer", type: "RIC", image: "WidexWideMoment.jpg", icon: "fas fa-music", desc: "Advanced PureSound performance with ultra-low delay for a rich, realistic, and comfortable listening experience." },
    ],
  },

  {
    id: 4,
    brand: "Oticon",
    brandImage: "Oticon-Hearing-Aids.jpg",
    icon: "fas fa-brain",
    tagline: "BrainHearing technology for better speech in noise",
    overview:
      "Oticon is a leading Danish hearing aid brand famous for BrainHearing technology, designed to help the brain process sound more naturally instead of simply making sounds louder. It is ideal for users who want balanced listening, better focus, and reduced listening fatigue.",
    bestFor:
      "Best for users who want natural listening, improved focus during conversations, and reduced strain during long listening hours.",
    highlights: [
      "BrainHearing technology for natural listening",
      "Better focus and less listening fatigue",
      "Excellent speech understanding in daily environments",
      "Strong options for adults, children, and severe loss",
    ],
    models: [
      { name: "Oticon Real", type: "RIC", image: "OticonReal.png", icon: "fas fa-wind", desc: "Handles sudden disturbing sounds in real time for a more balanced and comfortable real-life listening experience." },
      { name: "Oticon More", type: "RIC", image: "OticonMore.jpg", icon: "fas fa-network-wired", desc: "Powered by a deep neural network trained on millions of sounds for effortless speech understanding." },
      { name: "Oticon Own", type: "Custom IIC/CIC", image: "OticonOwn.jpg", icon: "fas fa-eye-slash", desc: "Invisible custom hearing aid with powerful processing inside a discreet and comfortable shell." },
      { name: "Oticon Play PX", type: "BTE (Children)", image: "OticonPlayPX.jpg", icon: "fas fa-child", desc: "Built especially for children with hearing loss. Durable, water-resistant, and designed to support learning." },
      { name: "Oticon Xceed", type: "BTE Power (Family)", image: "OticonXceed.jpg", icon: "fas fa-people-group", desc: "One of the most powerful hearing aids for severe to profound hearing loss with excellent speech access." },
    ],
  },

  {
    id: 5,
    brand: "Starkey",
    brandImage: "starkey.jpg",
    icon: "fas fa-heartbeat",
    tagline: "Smart hearing aids with wellness & health tracking",
    overview:
      "Starkey is a leading American hearing aid brand known for combining advanced hearing technology with health and wellness features. Many Starkey devices include AI-driven sound optimization, rechargeable performance, and even lifestyle tracking features for active users.",
    bestFor:
      "Best for users who want hearing aids with smart features, health-focused technology, rechargeable options, and advanced AI sound adjustments.",
    highlights: [
      "AI-powered smart hearing technology",
      "Health and wellness tracking features",
      "Rechargeable and modern discreet designs",
      "Great for active and tech-savvy users",
    ],
    models: [
      { name: "Evolv AI", type: "RIC", image: "starkey-evolv-ai-2000-digital-hearing-aids-1000x1000.jpg", icon: "fas fa-microchip", desc: "AI-driven sound adjustments that automatically adapt to your surroundings for smoother listening." },
      { name: "Genesis AI", type: "CIC / BTE", image: "starkey-genesis-ai-16-cic-hearing-aids.jpg", icon: "fas fa-robot", desc: "New-generation Starkey platform offering exceptional speech clarity, comfort, and advanced battery efficiency." },
      { name: "Livio AI", type: "RIC", image: "Starkey-Livio-AI.jpg", icon: "fas fa-mobile-screen", desc: "Hearing aid plus wellness assistant — supports better hearing along with lifestyle-focused smart features." },
      { name: "SoundLens", type: "IIC", image: "Starkey-SoundLens-iQ-IIC.jpg", icon: "fas fa-eye-slash", desc: "Invisible-in-canal hearing aid for users who want discreet design without sacrificing daily performance." },
      { name: "Muse iQ", type: "BTE Power", image: "starkey-bte-13-muse-iq-1200-.jpg", icon: "fas fa-volume-high", desc: "Powerful BTE option for stronger amplification with reliable clarity and easy handling." },
    ],
  },

  {
    id: 6,
    brand: "ReSound",
    brandImage: "resound.png",
    icon: "fas fa-wave-square",
    tagline: "Natural sound experience with advanced connectivity",
    overview:
      "ReSound is a globally respected hearing aid brand known for natural sound delivery, strong speech clarity, and advanced wireless connectivity. It is especially valued by users who want a realistic listening experience, intuitive smartphone control, and dependable performance in everyday environments.",
    bestFor:
      "Best for users who want natural sound, strong app connectivity, comfortable daily listening, and reliable performance from mild to severe hearing loss.",
    highlights: [
      "Natural sound and spatial awareness",
      "Advanced smartphone app connectivity",
      "Comfortable listening in daily environments",
      "Reliable options for mild to severe hearing loss",
    ],
    models: [
      { name: "ReSound Nexia", type: "RIC", image: "ReSoundNexia.jpg", icon: "fas fa-headphones", desc: "Premium rechargeable hearing aid with excellent speech clarity, Bluetooth LE Audio readiness, and smart connectivity." },
      { name: "ReSound Omnia", type: "RIC", image: "ReSoundOmnia.jpg", icon: "fas fa-volume-high", desc: "Built for better hearing in noisy places with improved speech understanding and environmental awareness." },
      { name: "ReSound ONE", type: "RIC", image: "ReSoundONE.jpg", icon: "fas fa-ear-listen", desc: "Innovative M&RIE design helps deliver a more natural hearing experience with personalized sound direction." },
      { name: "ENZO Q", type: "BTE Power", image: "ENZOQ.jpg", icon: "fas fa-bolt", desc: "Powerful solution for severe to profound hearing loss with strong amplification and robust wireless features." },
      { name: "ReSound Key", type: "RIC", image: "ReSoundKey.jpg", icon: "fas fa-key", desc: "Dependable hearing support with simple controls and natural sound for everyday use." },
      { name: "ReSound Nexia ITC", type: "ITC", image: "ResoundNexiaITC.jpg", icon: "fas fa-ear-listen", desc: "Custom in-the-canal hearing aid offering discreet fit, clear speech understanding, and natural sound comfort for daily use." },
    ],
  },

  {
    id: 7,
    brand: "Unitron",
    brandImage: "unitron.jpg",
    icon: "fas fa-sliders-h",
    tagline: "Flexible hearing technology with comfort-focused innovation",
    overview:
      "Unitron is a trusted hearing aid brand known for user-friendly hearing solutions, flexible technology levels, and long-term wearing comfort. It is a great choice for first-time users and experienced users alike because it focuses on speech clarity, easy adaptation, and practical upgrade options over time.",
    bestFor:
      "Best for users who want comfortable hearing aids, flexible technology options, dependable everyday sound performance, and easy adaptation for changing hearing needs.",
    highlights: [
      "Comfortable and easy-to-use hearing aids",
      "Flexible technology levels and upgrade options",
      "Reliable speech clarity in daily listening",
      "Great for first-time and long-term users",
    ],
    models: [
      { name: "Moxi Blu", type: "RIC Rechargeable", image: "UnitronMoxiBlu.jpg", icon: "fas fa-bluetooth", desc: "Modern rechargeable hearing aid with universal connectivity and excellent comfort for all-day wear." },
      { name: "Moxi Jump", type: "RIC", image: "UnitronMoxiBlu.jpg", icon: "fas fa-volume-up", desc: "Balanced performance and dependable speech clarity for users who want practical day-to-day hearing support." },
      { name: "Insera", type: "Custom ITC/CIC", image: "UnitronInsera.jpg", icon: "fas fa-eye-slash", desc: "Custom-made hearing aid designed for discreet wear, comfort, and easy everyday handling." },
      { name: "Stride P", type: "BTE Power", image: "UnitronStrideP.jpg", icon: "fas fa-bolt", desc: "Strong amplification for users who need more power while maintaining comfort and stable performance." },
    ],
  },
];