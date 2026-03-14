import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "travel-trucks",
    title: "Travel Trucks",
    category: "Individual Project",
    description:
      "Camper rental catalog with filtering, API integration and dynamic routing.",
    stack: ["React", "TypeScript", "REST API", "React Router", "CSS", "GitHub", "Figma"],
    responsibilities: [
      "Built camper rental catalog with filtering",
      "Integrated API data into the interface",
      "Implemented dynamic routing for project pages",
      "Created responsive UI components",
    ],
    liveDemo: "https://travel-trucks-mu-lovat.vercel.app/",
    github: "https://github.com/Maksym-Sirenko/travel-trucks",
  },
  {
    id: "artistshub",
    title: "ArtistsHub",
    category: "Team Project",
    description:
      "Team website with pagination and performers cards section implementation.",
    stack: ["HTML", "CSS", "JavaScript", "GitHub", "Figma"],
    responsibilities: [
      "Implemented pagination",
      "Developed performers cards section",
      "Worked in team collaboration flow",
    ],
    liveDemo: "https://zviacheslavv.github.io/developers-orchestra-project/",
    github: "https://github.com/ZviacheslavV/developers-orchestra-project",
  },
  {
    id: "webstudio",
    title: "WebStudio",
    category: "Individual Project",
    description:
      "Business landing page based on Figma design with responsive layout and semantic HTML.",
    stack: ["HTML", "CSS", "Responsive Design", "GitHub", "Figma"],
    responsibilities: [
      "Built responsive landing page from Figma",
      "Used semantic HTML structure",
      "Implemented adaptive layout for multiple screen sizes",
    ],
    liveDemo: "https://maksym-sirenko.github.io/goit-markup-hw-06/",
    github: "https://github.com/Maksym-Sirenko/goit-markup-hw-06",
  },
  {
    id: "yoga-studio",
    title: "Yoga Studio",
    category: "Team Project",
    description:
      "Adaptive landing page with implemented Team and Gallery sections.",
    stack: ["HTML", "CSS", "GitHub", "Figma"],
    responsibilities: [
      "Implemented Team section",
      "Implemented Gallery section",
      "Worked with collaborative GitHub Flow",
    ],
    liveDemo: "https://goit-team-projects.github.io/goit-markup-team-project/",
    github: "https://github.com/goit-team-projects/goit-markup-team-project",
  },
];