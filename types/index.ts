export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon: string;
  image: string;
  features: {
    title: string;
    description: string;
  }[];
  category: 'monitoring' | 'mapping' | 'analysis' | 'documentation';
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  location: string;
  farmType: string;
  crop: string;
  service: string;
  date: string;
  shortDescription: string;
  description: string;
  challenge: string;
  monitoring: string;
  results: string;
  hero: string;
  images: string[];
  insights: {
    title: string;
    value: string;
    description: string;
  }[];
  metrics: {
    fieldArea: string;
    cropCondition: string;
    monitoringDate: string;
    attentionAreas: number;
    fieldCoverage: number;
  };
  tags: string[];
  isDemo: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  isDemo: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormData {
  fullName: string;
  farmName: string;
  email: string;
  phone: string;
  farmLocation: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  farmSize: string;
  additionalInfo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  isCTA?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface TechNode {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TrustValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}
