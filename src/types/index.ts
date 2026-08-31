export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  tags: string[];
  features: string[];
  gradient: string;
  accentColor: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TechnicalSkill {
  name: string;
  level?: string;
  percentage: number;
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  shortTag?: string;
}

export interface ProfessionalSkill {
  name: string;
  percentage: number;
  color: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
  color: string;
}
