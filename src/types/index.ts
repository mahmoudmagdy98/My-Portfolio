export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string; // Made optional with ?
  createdAt: number;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
