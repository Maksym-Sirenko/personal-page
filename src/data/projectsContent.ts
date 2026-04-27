import type { Project } from "../types/project";

export const projectsContent: Project[] = [
  {
    id: "travel-trucks",
    title: { ua: "TravelTrucks", en: "TravelTrucks" },
    category: { ua: "Індивідуальний проєкт", en: "Individual Project" },
    description: {
      ua: "Платформа оренди кемперів із фільтрацією, інтеграцією API, динамічною маршрутизацією та логікою бронювання.",
      en: "Camper rental platform with filtering, API integration, dynamic routing, and booking flow.",
    },
    coverImage: "/projects/travel-trucks/travel-trucks-cover.jpg",
    coverImageSize: { width: 1400, height: 498 },
    galleryImages: [
      "/projects/travel-trucks/travel-trucks-catalog.jpg",
      "/projects/travel-trucks/travel-trucks-details.jpg",
    ],
    stack: ["Next.js", "React", "TypeScript", "Zustand", "Axios", "CSS", "Figma"],
    responsibilities: {
      ua: [
        "Реалізував каталог кемперів із фільтрацією та детальними сторінками",
        "Інтегрував API-дані в інтерфейс",
        "Реалізував маршрутизацію та структуру сторінок проєкту",
        "Створив адаптивні UI-компоненти на основі Figma",
      ],
      en: [
        "Built camper catalog with filtering and detailed pages",
        "Integrated API data into the interface",
        "Implemented routing and project page structure",
        "Created responsive UI components based on Figma",
      ],
    },
    liveDemo: "https://travel-trucks-mu-lovat.vercel.app/",
    github: "https://github.com/Maksym-Sirenko/travel-trucks",
  },
  {
    id: "leleka-app",
    title: { ua: "Leleka App", en: "Leleka App" },
    category: { ua: "Командний проєкт", en: "Team Project" },
    description: {
      ua: "Повнофункціональний командний проєкт із повторно використовуваними UI-компонентами, модальною системою та адаптивним інтерфейсом, створеним на основі Figma.",
      en: "Fullstack team project with reusable UI components, modal system, and responsive interface built from Figma.",
    },
    coverImage: "/projects/leleka-app/leleka-app-cover.jpg",
    coverImageSize: { width: 1400, height: 498 },
    galleryImages: ["/projects/leleka-app/leleka-app-modal.jpg"],
    stack: ["Next.js", "React", "TypeScript", "Axios", "CSS", "Figma"],
    responsibilities: {
      ua: [
        "Розробив повторно використовувані UI-компоненти для всього застосунку",
        "Реалізував модальну систему для взаємодії з користувачем",
        "Працював над частиною розмітки сторінки та структурою UI",
        "Співпрацював із командою через GitHub workflow",
      ],
      en: [
        "Developed reusable UI components used across the application",
        "Implemented modal system for user interactions",
        "Worked on part of the page layout and UI structure",
        "Collaborated with team using GitHub workflow",
      ],
    },
    liveDemo: "https://fullstack-genesis-project.vercel.app/",
    github: "https://github.com/ZViacheslavV/fullstack-genesis-project-fs",
  },
  {
    id: "notehub",
    title: { ua: "NoteHub", en: "NoteHub" },
    category: { ua: "Індивідуальний проєкт", en: "Individual Project" },
    description: {
      ua: "Застосунок для нотаток з реєстрацією, входом, фільтрацією, пагінацією та інтеграцією з бекендом.",
      en: "Notes app with registration, login, filtering, pagination, and backend integration.",
    },
    coverImage: "/projects/notehub/notehub-cover.jpg",
    coverImageSize: { width: 1280, height: 459 },
    stack: ["Node.js", "Express", "MongoDB", "JWT", "REST API", "Render", "Vercel"],
    responsibilities: {
      ua: [
        "Реалізував реєстрацію та вхід користувача",
        "Створив інтерфейс для списку нотаток із пошуком і фільтрацією",
        "Додав пагінацію та захищені маршрути",
        "Інтегрував frontend і backend логіку через REST API",
      ],
      en: [
        "Implemented user registration and login flow",
        "Built notes list interface with search and filtering",
        "Added pagination and protected routes",
        "Integrated frontend and backend logic through REST API",
      ],
    },
    liveDemo: "https://09-auth-mu-ashen.vercel.app/",
    github: "https://github.com/Maksym-Sirenko/09-auth",
  },
  {
    id: "artistshub",
    title: { ua: "ArtistsHub", en: "ArtistsHub" },
    category: { ua: "Командний проєкт", en: "Team Project" },
    description: {
      ua: "Командний вебсайт з адаптивним макетом, пагінацією та розділом карток виконавців.",
      en: "Team website with responsive layout, pagination, and performers cards section.",
    },
    coverImage: "/projects/artistshub/artistshub-cover.jpg",
    coverImageSize: { width: 1280, height: 460 },
    galleryImages: ["/projects/artistshub/artistshub-artists.jpg"],
    stack: ["HTML", "CSS", "JavaScript", "GitHub", "Figma"],
    responsibilities: {
      ua: [
        "Реалізував логіку пагінації",
        "Розробив розділ карток виконавців",
        "Співпрацював у команді з використанням GitHub flow",
      ],
      en: [
        "Implemented pagination logic",
        "Developed performers cards section",
        "Collaborated in a team using GitHub flow",
      ],
    },
    liveDemo: "https://zviacheslavv.github.io/developers-orchestra-project/",
    github: "https://github.com/ZViacheslavV/developers-orchestra-project",
  },
  {
    id: "gallery-lightbox",
    title: { ua: "Галерея з Lightbox", en: "Gallery with Lightbox" },
    category: { ua: "Індивідуальний проєкт", en: "Individual Project" },
    description: {
      ua: "Інтерактивна галерея з модальним переглядом та інтеграцією зовнішньої бібліотеки.",
      en: "Interactive image gallery with modal preview and external library integration.",
    },
    coverImage: "/projects/gallery-lightbox/gallery-lightbox-cover.jpg",
    coverImageSize: { width: 1280, height: 458 },
    galleryImages: ["/projects/gallery-lightbox/gallery-lightbox-search.jpg"],
    stack: ["JavaScript", "SimpleLightbox", "HTML", "CSS", "GitHub"],
    responsibilities: {
      ua: [
        "Створив динамічну розмітку галереї",
        "Інтегрував бібліотеку SimpleLightbox",
        "Реалізував взаємодію з попереднім переглядом зображень",
        "Структурував чисту DOM-орієнтовану логіку",
      ],
      en: [
        "Created dynamic gallery markup",
        "Integrated SimpleLightbox library",
        "Implemented image preview interaction",
        "Structured clean DOM-based logic",
      ],
    },
    liveDemo: "https://maksym-sirenko.github.io/goit-js-hw-12/",
    github: "https://github.com/Maksym-Sirenko/goit-js-hw-12",
  },
  {
    id: "webstudio",
    title: { ua: "WebStudio", en: "WebStudio" },
    category: { ua: "Індивідуальний проєкт", en: "Individual Project" },
    description: {
      ua: "Адаптивна бізнес-сторінка на основі Figma з семантичною HTML-структурою.",
      en: "Responsive business landing page based on Figma design with semantic HTML structure.",
    },
    coverImage: "/projects/webstudio/webstudio-cover.jpg",
    coverImageSize: { width: 1280, height: 458 },
    galleryImages: ["/projects/webstudio/webstudio-portfolio.jpg"],
    stack: ["HTML", "CSS", "Responsive Design", "GitHub", "Figma"],
    responsibilities: {
      ua: [
        "Створив адаптивний лендинг на основі Figma",
        "Використав семантичну HTML-структуру",
        "Реалізував адаптивну верстку для різних розмірів екрана",
      ],
      en: [
        "Built responsive landing page from Figma",
        "Used semantic HTML structure",
        "Implemented adaptive layout for multiple screen sizes",
      ],
    },
    liveDemo: "https://maksym-sirenko.github.io/goit-markup-hw-06/",
    github: "https://github.com/Maksym-Sirenko/goit-markup-hw-06",
  },
  {
    id: "yoga-studio",
    title: { ua: "Yoga Studio", en: "Yoga Studio" },
    category: { ua: "Командний проєкт", en: "Team Project" },
    description: {
      ua: "Адаптивний лендинг із реалізованими секціями Team та Gallery.",
      en: "Adaptive landing page with implemented Team and Gallery sections.",
    },
    coverImage: "/projects/yoga-studio/yoga-studio-cover.jpg",
    coverImageSize: { width: 1280, height: 457 },
    stack: ["HTML", "CSS", "GitHub", "Figma"],
    responsibilities: {
      ua: [
        "Реалізував секцію Team",
        "Реалізував секцію Gallery",
        "Працював у команді з використанням GitHub Flow",
      ],
      en: [
        "Implemented Team section",
        "Implemented Gallery section",
        "Worked with collaborative GitHub Flow",
      ],
    },
    liveDemo: "https://zviacheslavv.github.io/yoga-grp-project-alpha25-refined/",
    github: "https://github.com/ZViacheslavV/yoga-grp-project-alpha25-refined",
  },
];
