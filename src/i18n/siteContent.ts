export const siteContent = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About / Contact",
      contact: "Contact Me",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      switchLanguage: "Switch language",
    },
    home: {
      title: "Maksym Sirenko",
      subtitle:
        "Junior Frontend Developer focused on React, TypeScript, and practical web interfaces.",
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
    about: {
      title: "About Me",
      intro:
        "I build responsive interfaces with React and TypeScript, and I enjoy turning clean layouts into clear, practical user flows.",
      summaryTitle: "What I focus on",
      summaryItems: [
        "Responsive frontend with attention to detail",
        "Reusable components and maintainable structure",
        "Practical experience with REST API integration and authentication",
      ],
      contactTitle: "Contact",
      contactText:
        "If you have an internship, junior role, or freelance task in mind, I am open to a conversation.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      telegram: "Telegram",
      projectsLink: "See Projects",
    },
    footer: {
      rights: "All rights reserved.",
    },
    ui: {
      closeModal: "Close modal",
      modalLabel: "Dialog window",
      navigationLabel: "Mobile navigation",
    },
  },
  ua: {
    nav: {
      home: "Головна",
      projects: "Проєкти",
      about: "Про мене / Контакти",
      contact: "Зв'язатися",
      openMenu: "Відкрити меню навігації",
      closeMenu: "Закрити меню навігації",
      switchLanguage: "Змінити мову",
    },
    home: {
      title: "Максим Сіренко",
      subtitle:
        "Junior Frontend Developer, зосереджений на React, TypeScript та практичних вебінтерфейсах.",
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
    about: {
      title: "Про мене",
      intro:
        "Я створюю адаптивні інтерфейси на React і TypeScript та люблю перетворювати охайні макети на зрозумілі й практичні сценарії для користувача.",
      summaryTitle: "На чому я фокусуюсь",
      summaryItems: [
        "Адаптивний frontend з увагою до деталей",
        "Повторно використовувані компоненти та підтримувана структура",
        "Практичний досвід з REST API та автентифікацією",
      ],
      contactTitle: "Контакти",
      contactText:
        "Якщо у вас є стажування, junior-позиція або невеликий freelance-запит, я відкритий до розмови.",
      email: "Пошта",
      github: "GitHub",
      linkedin: "LinkedIn",
      telegram: "Telegram",
      projectsLink: "Переглянути проєкти",
    },
    footer: {
      rights: "Усі права захищено.",
    },
    ui: {
      closeModal: "Закрити модальне вікно",
      modalLabel: "Діалогове вікно",
      navigationLabel: "Мобільна навігація",
    },
  },
} as const;

export type Language = keyof typeof siteContent;
