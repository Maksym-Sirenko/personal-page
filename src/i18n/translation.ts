export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About / Contact",
      contact: "Contact Me",
    },

    home: {
      title: "Maksym Sirenko",
      subtitle:
        "Junior Fullstack Developer focused on clean UI, responsive layouts, and practical web solutions.",
      viewProjects: "View Projects",
      contact: "Contact Me",
    },

    projects: {
      title: "Projects",
      subtitle:
        "Selected projects that reflect my frontend and fullstack growth.",
      viewDetails: "View Details",
      liveDemo: "Live Demo",
      github: "GitHub",
      techStack: "Tech stack",
      responsibilities: "Responsibilities",
    },
  },

  ua: {
    nav: {
      home: "Головна",
      projects: "Проєкти",
      about: "Про мене / Контакти",
      contact: "Зв'язатися",
    },

    home: {
      title: "Максим Сіренко",
      subtitle:
        "Junior Fullstack Developer, зосереджений на чистому UI, адаптивній верстці та практичних вебрішеннях.",
      viewProjects: "Переглянути проєкти",
      contact: "Зв'язатися",
    },

    projects: {
      title: "Проєкти",
      subtitle:
        "Вибрані проєкти, які відображають мій розвиток у frontend та fullstack.",
      viewDetails: "Детальніше",
      liveDemo: "Live Demo",
      github: "GitHub",
      techStack: "Технології",
      responsibilities: "Що я робив",
    },
  },
} as const;

export type Language = keyof typeof translations;