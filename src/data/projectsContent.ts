import type { Project } from "../types/project";

export const projectsContent: Project[] = [
  {
    id: "travel-trucks",
    title: { ua: "TravelTrucks", en: "TravelTrucks" },
    category: { ua: "Р†РЅРґРёРІС–РґСѓР°Р»СЊРЅРёР№ РїСЂРѕС”РєС‚", en: "Individual Project" },
    description: {
      ua: "РџР»Р°С‚С„РѕСЂРјР° РѕСЂРµРЅРґРё РєРµРјРїРµСЂС–РІ С–Р· С„С–Р»СЊС‚СЂР°С†С–С”СЋ, С–РЅС‚РµРіСЂР°С†С–С”СЋ API, РґРёРЅР°РјС–С‡РЅРѕСЋ РјР°СЂС€СЂСѓС‚РёР·Р°С†С–С”СЋ С‚Р° Р»РѕРіС–РєРѕСЋ Р±СЂРѕРЅСЋРІР°РЅРЅСЏ.",
      en: "Camper rental platform with filtering, API integration, dynamic routing, and booking flow.",
    },
    coverImage: "/projects/travel-trucks/travel-trucks-cover.jpg",
    stack: ["Next.js", "React", "TypeScript", "Zustand", "Axios", "CSS", "Figma"],
    responsibilities: {
      ua: [
        "Р РµР°Р»С–Р·СѓРІР°РІ РєР°С‚Р°Р»РѕРі РєРµРјРїРµСЂС–РІ С–Р· С„С–Р»СЊС‚СЂР°С†С–С”СЋ С‚Р° РґРµС‚Р°Р»СЊРЅРёРјРё СЃС‚РѕСЂС–РЅРєР°РјРё",
        "Р†РЅС‚РµРіСЂСѓРІР°РІ API-РґР°РЅС– РІ С–РЅС‚РµСЂС„РµР№СЃ",
        "Р РµР°Р»С–Р·СѓРІР°РІ РјР°СЂС€СЂСѓС‚РёР·Р°С†С–СЋ С‚Р° СЃС‚СЂСѓРєС‚СѓСЂСѓ СЃС‚РѕСЂС–РЅРѕРє РїСЂРѕС”РєС‚Сѓ",
        "РЎС‚РІРѕСЂРёРІ Р°РґР°РїС‚РёРІРЅС– UI-РєРѕРјРїРѕРЅРµРЅС‚Рё РЅР° РѕСЃРЅРѕРІС– Figma",
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
    category: { ua: "РљРѕРјР°РЅРґРЅРёР№ РїСЂРѕС”РєС‚", en: "Team Project" },
    description: {
      ua: "РџРѕРІРЅРѕС„СѓРЅРєС†С–РѕРЅР°Р»СЊРЅРёР№ РєРѕРјР°РЅРґРЅРёР№ РїСЂРѕС”РєС‚ С–Р· РїРѕРІС‚РѕСЂРЅРѕ РІРёРєРѕСЂРёСЃС‚РѕРІСѓРІР°РЅРёРјРё UI-РєРѕРјРїРѕРЅРµРЅС‚Р°РјРё, РјРѕРґР°Р»СЊРЅРѕСЋ СЃРёСЃС‚РµРјРѕСЋ С‚Р° Р°РґР°РїС‚РёРІРЅРёРј С–РЅС‚РµСЂС„РµР№СЃРѕРј, СЃС‚РІРѕСЂРµРЅРёРј РЅР° РѕСЃРЅРѕРІС– Figma.",
      en: "Fullstack team project with reusable UI components, modal system, and responsive interface built from Figma.",
    },
    coverImage: "/projects/leleka-app/leleka-app-cover.jpg",
    stack: ["Next.js", "React", "TypeScript", "Axios", "CSS", "Figma"],
    responsibilities: {
      ua: [
        "Р РѕР·СЂРѕР±РёРІ РїРѕРІС‚РѕСЂРЅРѕ РІРёРєРѕСЂРёСЃС‚РѕРІСѓРІР°РЅС– UI-РєРѕРјРїРѕРЅРµРЅС‚Рё РґР»СЏ РІСЃСЊРѕРіРѕ Р·Р°СЃС‚РѕСЃСѓРЅРєСѓ",
        "Р РµР°Р»С–Р·СѓРІР°РІ РјРѕРґР°Р»СЊРЅСѓ СЃРёСЃС‚РµРјСѓ РґР»СЏ РІР·Р°С”РјРѕРґС–С— Р· РєРѕСЂРёСЃС‚СѓРІР°С‡РµРј",
        "РџСЂР°С†СЋРІР°РІ РЅР°Рґ С‡Р°СЃС‚РёРЅРѕСЋ СЂРѕР·РјС–С‚РєРё СЃС‚РѕСЂС–РЅРєРё С‚Р° СЃС‚СЂСѓРєС‚СѓСЂРѕСЋ UI",
        "РЎРїС–РІРїСЂР°С†СЋРІР°РІ С–Р· РєРѕРјР°РЅРґРѕСЋ С‡РµСЂРµР· GitHub workflow",
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
    category: { ua: "РљРѕРјР°РЅРґРЅРёР№ РїСЂРѕС”РєС‚", en: "Team Project" },
    description: {
      ua: "РљРѕРјР°РЅРґРЅРёР№ РІРµР±СЃР°Р№С‚ Р· Р°РґР°РїС‚РёРІРЅРёРј РјР°РєРµС‚РѕРј, РїР°РіС–РЅР°С†С–С”СЋ С‚Р° СЂРѕР·РґС–Р»РѕРј РєР°СЂС‚РѕРє РІРёРєРѕРЅР°РІС†С–РІ.",
      en: "Team website with responsive layout, pagination, and performers cards section.",
    },
    coverImage: "/projects/artistshub/artistshub-cover.jpg",
    stack: ["HTML", "CSS", "JavaScript", "GitHub", "Figma"],
    responsibilities: {
      ua: [
        "Р РµР°Р»С–Р·СѓРІР°РІ Р»РѕРіС–РєСѓ РїР°РіС–РЅР°С†С–С—",
        "Р РѕР·СЂРѕР±РёРІ СЂРѕР·РґС–Р» РєР°СЂС‚РѕРє РІРёРєРѕРЅР°РІС†С–РІ",
        "РЎРїС–РІРїСЂР°С†СЋРІР°РІ Сѓ РєРѕРјР°РЅРґС– Р· РІРёРєРѕСЂРёСЃС‚Р°РЅРЅСЏРј GitHub flow",
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
    title: { ua: "Р“Р°Р»РµСЂРµСЏ Р· Lightbox", en: "Gallery with Lightbox" },
    category: { ua: "Р†РЅРґРёРІС–РґСѓР°Р»СЊРЅРёР№ РїСЂРѕС”РєС‚", en: "Individual Project" },
    description: {
      ua: "Р†РЅС‚РµСЂР°РєС‚РёРІРЅР° РіР°Р»РµСЂРµСЏ Р· РјРѕРґР°Р»СЊРЅРёРј РїРµСЂРµРіР»СЏРґРѕРј С‚Р° С–РЅС‚РµРіСЂР°С†С–С”СЋ Р·РѕРІРЅС–С€РЅСЊРѕС— Р±С–Р±Р»С–РѕС‚РµРєРё.",
      en: "Interactive image gallery with modal preview and external library integration.",
    },
    coverImage: "/projects/gallery-lightbox/gallery-lightbox-cover.jpg",
    stack: ["JavaScript", "SimpleLightbox", "HTML", "CSS", "GitHub"],
    responsibilities: {
      ua: [
        "РЎС‚РІРѕСЂРёРІ РґРёРЅР°РјС–С‡РЅСѓ СЂРѕР·РјС–С‚РєСѓ РіР°Р»РµСЂРµС—",
        "Р†РЅС‚РµРіСЂСѓРІР°РІ Р±С–Р±Р»С–РѕС‚РµРєСѓ SimpleLightbox",
        "Р РµР°Р»С–Р·СѓРІР°РІ РІР·Р°С”РјРѕРґС–СЋ Р· РїРѕРїРµСЂРµРґРЅС–Рј РїРµСЂРµРіР»СЏРґРѕРј Р·РѕР±СЂР°Р¶РµРЅСЊ",
        "РЎС‚СЂСѓРєС‚СѓСЂСѓРІР°РІ С‡РёСЃС‚Сѓ DOM-РѕСЂС–С”РЅС‚РѕРІР°РЅСѓ Р»РѕРіС–РєСѓ",
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
    category: { ua: "Р†РЅРґРёРІС–РґСѓР°Р»СЊРЅРёР№ РїСЂРѕС”РєС‚", en: "Individual Project" },
    description: {
      ua: "РђРґР°РїС‚РёРІРЅР° Р±С–Р·РЅРµСЃ-СЃС‚РѕСЂС–РЅРєР° РЅР° РѕСЃРЅРѕРІС– Figma Р· СЃРµРјР°РЅС‚РёС‡РЅРѕСЋ HTML-СЃС‚СЂСѓРєС‚СѓСЂРѕСЋ.",
      en: "Responsive business landing page based on Figma design with semantic HTML structure.",
    },
    coverImage: "/projects/webstudio/webstudio-cover.jpg",
    stack: ["HTML", "CSS", "Responsive Design", "GitHub", "Figma"],
    responsibilities: {
      ua: [
        "РЎС‚РІРѕСЂРёРІ Р°РґР°РїС‚РёРІРЅРёР№ Р»РµРЅРґРёРЅРі РЅР° РѕСЃРЅРѕРІС– Figma",
        "Р’РёРєРѕСЂРёСЃС‚Р°РІ СЃРµРјР°РЅС‚РёС‡РЅСѓ HTML-СЃС‚СЂСѓРєС‚СѓСЂСѓ",
        "Р РµР°Р»С–Р·СѓРІР°РІ Р°РґР°РїС‚РёРІРЅСѓ РІРµСЂСЃС‚РєСѓ РґР»СЏ СЂС–Р·РЅРёС… СЂРѕР·РјС–СЂС–РІ РµРєСЂР°РЅР°",
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
    category: { ua: "РљРѕРјР°РЅРґРЅРёР№ РїСЂРѕС”РєС‚", en: "Team Project" },
    description: {
      ua: "РђРґР°РїС‚РёРІРЅРёР№ Р»РµРЅРґРёРЅРі С–Р· СЂРµР°Р»С–Р·РѕРІР°РЅРёРјРё СЃРµРєС†С–СЏРјРё Team С‚Р° Gallery.",
      en: "Adaptive landing page with implemented Team and Gallery sections.",
    },
    coverImage: "/projects/yoga-studio/yoga-studio-cover.jpg",
    stack: ["HTML", "CSS", "GitHub", "Figma"],
    responsibilities: {
      ua: [
        "Р РµР°Р»С–Р·СѓРІР°РІ СЃРµРєС†С–СЋ Team",
        "Р РµР°Р»С–Р·СѓРІР°РІ СЃРµРєС†С–СЋ Gallery",
        "РџСЂР°С†СЋРІР°РІ Сѓ РєРѕРјР°РЅРґС– Р· РІРёРєРѕСЂРёСЃС‚Р°РЅРЅСЏРј GitHub Flow",
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
