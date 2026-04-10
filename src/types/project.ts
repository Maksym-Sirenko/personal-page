export type Language = "ua" | "en";

export type LocalizedText = {
  ua: string;
  en: string;
};

export type LocalizedList = {
  ua: string[];
  en: string[];
};

export type Project = {
  id: string;
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  coverImage?: string;
  galleryImages?: string[];
  stack: string[];
  responsibilities: LocalizedList;
  liveDemo: string;
  github: string;
};
