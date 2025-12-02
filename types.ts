export interface Project {
  id: string;
  name: string;
  role: string;
  stack: string[];
  metric: string;
  description: string;
  company: string;
  year: string;
  url?: string;
  screenshots?: string[];
  fullDescription?: string;
  features?: string[];
}

export interface Service {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH';
  endpoint: string;
  description: string;
  tools: string[];
}

export interface Stat {
  label: string;
  value: string;
  subtext?: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}