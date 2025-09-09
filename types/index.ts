export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: 'Web Development' | 'Mobile Development' | 'System Development' | 'Game Development' | 'Other';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  additionalLinks?: {
    name: string;
    url: string;
  }[];
  startDate: string;
  endDate?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  imageUrl?: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Co-Founder';
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
  achievements: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
  gpa?: string;
  relevant_courses?: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Mobile' | 'DevOps' | 'Tools' | 'Language' | 'Other';
  proficiency: 1 | 2 | 3 | 4 | 5; // 1-5 scale
  yearsOfExperience: number;
  projects: string[]; // project IDs
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Contact {
  email: string;
  phone?: string;
  location: string;
  github: string;
  linkedin: string;
  website?: string;
  resume?: string;
}
