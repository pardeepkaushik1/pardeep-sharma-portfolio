import { Project, Service, TechnicalSkill, ProfessionalSkill, SocialLink } from '../types';

export const personalInfo = {
  name: "Pardeep Sharma",
  logoLetter: "P",
  role: "Frontend Developer",
  titles: [
    "Frontend Developer",
    "Web Developer",
    "Software Developer"
  ],
  tagline: "I build clean, responsive and interactive website using modern Web technologies. Currently learning, building projects, and growing as a developer.",
  about: {
    heading: "Frontend Developer",
    p1: "I am a beginner Frontend Developer who enjoys creating clean, responsive and user-friendly websites.",
    p2: "I have been learning HTML, CSS and Javascript and building small projects to improve my skills and understand how modern websites work.",
    p3: "I love turning ideas into interactive web experiences and continuously learning new technologies.",
    p4: "My goal is to become a skilled Full Stack Developer while creating simple, beautiful and meaningful digital experiences."
  },
  contact: {
    email: "pardeepkaushik80776@gmail.com",
    phone: "+91 8930880776",
    phoneDisplay: "+91 8930880776",
    location: "Cheeka, Haryana, India",
    availability: "Available for Projects & Full-time Roles"
  }
};

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "Facebook",
    username: "Pardeep Sharma",
    color: "#1877F2"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/pardeepkaushik_1",
    icon: "Instagram",
    username: "@pardeepkaushik_1",
    color: "#E1306C"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/918930880776?text=Hi,%20pardeep!",
    icon: "WhatsApp",
    username: "+91 8930880776",
    color: "#25D366"
  },
  {
    name: "Telegram",
    url: "https://t.me/pardeepkaushik_1",
    icon: "Send",
    username: "@pardeepkaushik_1",
    color: "#229ED9"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/pardeep-sharma",
    icon: "Linkedin",
    username: "Pardeep Sharma",
    color: "#0077B5"
  }
];

export const servicesData: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "I build responsive and functional websites using HTML, CSS and Javascript. From API integration to dynamic content, I focus on writing clean code that delivers a smooth web experience.",
    icon: "Code",
    features: [
      "Dynamic & interactive UI components",
      "API integrations & data fetching",
      "Clean, modular, and maintainable code",
      "Fast page load & performance optimization"
    ]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "I design clean, user-friendly interfaces with a strong focus on layout color, and usability - creating experiences that feel intuitive across every screen.",
    icon: "Palette",
    features: [
      "Human-centered modern layouts",
      "Consistent color palettes & typography",
      "Accessible & high-contrast themes",
      "Wireframing & interactive prototypes"
    ]
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description: "I make sure every website works seamlessly across mobile, tablet and desktop, so users get a consistent experience no matter what device they're on.",
    icon: "Smartphone",
    features: [
      "Mobile-first adaptable architecture",
      "Cross-browser & cross-device compatibility",
      "Fluid typography & elastic spacing",
      "Touch-friendly gestures & navigation"
    ]
  }
];

export const technicalSkills: TechnicalSkill[] = [
  // Frontend
  {
    name: "HTML5",
    level: "Expert",
    percentage: 90,
    icon: "FileCode",
    color: "#e34c26",
    category: "frontend",
    shortTag: "HTML"
  },
  {
    name: "CSS3",
    level: "Expert",
    percentage: 85,
    icon: "Palette",
    color: "#264de4",
    category: "frontend",
    shortTag: "CSS"
  },
  {
    name: "JavaScript",
    level: "Advanced",
    percentage: 75,
    icon: "Code2",
    color: "#f7df1e",
    category: "frontend",
    shortTag: "JS"
  },
  {
    name: "React.js",
    level: "Advanced",
    percentage: 75,
    icon: "Atom",
    color: "#00d8ff",
    category: "frontend",
    shortTag: "React"
  },
  {
    name: "Tailwind CSS",
    level: "Expert",
    percentage: 88,
    icon: "Layers",
    color: "#38bdf8",
    category: "frontend",
    shortTag: "Tailwind"
  },

  // Backend
  {
    name: "Node.js & Express",
    level: "Advanced",
    percentage: 78,
    icon: "Server",
    color: "#68a063",
    category: "backend",
    shortTag: "Node"
  },
  {
    name: "REST APIs",
    level: "Advanced",
    percentage: 80,
    icon: "Globe",
    color: "#10b981",
    category: "backend",
    shortTag: "API"
  },

  // Tools
  {
    name: "Git & GitHub",
    level: "Advanced",
    percentage: 82,
    icon: "GitBranch",
    color: "#f43f5e",
    category: "tools",
    shortTag: "Git"
  },
  {
    name: "Vite Build Tool",
    level: "Advanced",
    percentage: 80,
    icon: "Flame",
    color: "#a855f7",
    category: "tools",
    shortTag: "Vite"
  },
  {
    name: "Postman / DevTools",
    level: "Advanced",
    percentage: 84,
    icon: "Wrench",
    color: "#f97316",
    category: "tools",
    shortTag: "Tools"
  }
];

export const professionalSkills: ProfessionalSkill[] = [
  {
    name: "Creativity",
    percentage: 75,
    color: "#06b6d4",
    description: "Translating innovative ideas into functional visual components"
  },
  {
    name: "Communication",
    percentage: 65,
    color: "#3b82f6",
    description: "Active listener with clear conceptual explanations"
  },
  {
    name: "Problem Solving",
    percentage: 70,
    color: "#10b981",
    description: "Debugging logic hurdles and refining algorithmic flows"
  },
  {
    name: "Team Work",
    percentage: 80,
    color: "#8b5cf6",
    description: "Cooperative, receptive to feedback, and collaborative"
  }
];

export const projectsData: Project[] = [
  {
    id: "geocountrypedia",
    title: "Geocountrypedia",
    category: "UI/UX Design",
    description: "A responsive country information website built to help users explore countries, view important details. It focuses on a smooth user experience, easy navigation, and visually appealing layouts that make discovering global information simple and enjoyable.",
    liveUrl: "https://geocountrypedia.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "REST Countries API", "UI/UX"],
    features: [
      "Explore comprehensive data for all global countries",
      "Interactive search, region filters, and instant sorting",
      "Detailed modal insights with flags, currencies, and maps",
      "Fully responsive mobile and desktop layout"
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4",
    iconName: "Globe"
  },
  {
    id: "indianholidays",
    title: "Indian Holidays Calendar",
    category: "UI/UX Design",
    description: "This project is a modern holiday and event calendar designed to organize important dates in a clear and attractive interface. It helps users track upcoming events, and enjoy a simple planning experience through clean design,and easy accessibility.",
    liveUrl: "https://indianholidays.netlify.app/",
    tags: ["JavaScript", "Calendar System", "CSS Grid", "Event Filters"],
    features: [
      "National, cultural, and regional Indian holiday list",
      "Monthly & annual interactive view with date picker",
      "Countdown timer to upcoming gazetted festivals",
      "Clean visual cards with color-coded categories"
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#f59e0b",
    iconName: "Calendar"
  },
  {
    id: "muviztv",
    title: "MuvizTV Movie App",
    category: "UI/UX Design",
    description: "A stylish movie discovery platform that lets users browse trending films, explore details, and enjoy a cinematic browsing experience. The interface is designed to feel modern and intuitive, making it easy to discover movies.",
    liveUrl: "https://muviztv.netlify.app",
    tags: ["React / JS", "TMDB API", "Cinematic UI", "Search & Filters"],
    features: [
      "Live trending movies and top-rated TV series feed",
      "Rich movie overviews with ratings, cast, and trailers",
      "Instant keyword search with poster carousels",
      "Cinematic dark-mode aesthetic with smooth hover animations"
    ],
    gradient: "from-rose-500/20 via-purple-500/10 to-transparent",
    accentColor: "#f43f5e",
    iconName: "Film"
  },
  {
    id: "todaysweathersky",
    title: "Todays Weather Sky",
    category: "UI/UX Design",
    description: "This weather application provides real-time updates and simple forecasts in a clean dashboard format. It helps users quickly understand current weather conditions, and plan their day better.",
    liveUrl: "https://todaysweathersky.netlify.app/",
    tags: ["Weather API", "Live Forecast", "Geolocation", "Dynamic Cards"],
    features: [
      "Real-time temperature, humidity, wind, and UV index",
      "5-day forecast with intuitive weather condition icons",
      "Search any city worldwide with automatic suggestions",
      "Visual backdrop shifting based on day/night weather conditions"
    ],
    gradient: "from-sky-500/20 via-emerald-500/10 to-transparent",
    accentColor: "#0ea5e9",
    iconName: "CloudSun"
  },
  {
    id: "amazonclone",
    title: "Amazon Clone",
    category: "E-Commerce UI",
    description: "A responsive e-commerce storefront inspired by Amazon. Features interactive product catalogs, real-time shopping cart management, price calculations, customer reviews, and intuitive multi-category browsing.",
    liveUrl: "https://amazon-clone-live.netlify.app",
    tags: ["React", "JavaScript", "CSS Grid", "Cart State", "E-Commerce UI"],
    features: [
      "Dynamic product showcase with search, filters, and star ratings",
      "Interactive shopping cart with live subtotal calculation",
      "Category navigation and featured deal banners",
      "Fully responsive mobile and desktop layout"
    ],
    gradient: "from-amber-500/25 via-yellow-500/10 to-transparent",
    accentColor: "#f59e0b",
    iconName: "ShoppingCart"
  },
  {
    id: "noteapp",
    title: "Note App",
    category: "Web Utility",
    description: "A clean, modern note-taking application designed for quick ideas, reminders, and daily task management. Features instant note creation, tag categorization, search filtering, and local data persistence.",
    liveUrl: "https://quick-notes-app.netlify.app",
    tags: ["JavaScript", "Local Storage", "Tailwind CSS", "CRUD Operations", "Productivity"],
    features: [
      "Instant note creation, editing, and pinned priority notes",
      "Live search and tag-based filtering across all saved entries",
      "Auto-save with persistent local storage support",
      "Minimalist card grid layout with custom color tags"
    ],
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    accentColor: "#10b981",
    iconName: "NotebookPen"
  }
];
