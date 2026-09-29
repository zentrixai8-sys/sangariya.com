export type MenuCategory = 'sangrias' | 'tapas' | 'pizzas' | 'cocktails' | 'royal_mains' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  subtitle?: string;
  category: MenuCategory;
  price: number; // Glass or single portion price
  pitcherPrice?: number; // 1-Litre Pitcher price (for Sangrias)
  towerPrice?: number; // 3-Litre Grand Tower price
  description: string;
  tasteNotes?: string[];
  tags: ('Chef Special' | 'Royal Heritage' | 'Smoked' | 'Signature' | 'Vegetarian' | 'Non-Vegetarian' | 'Gluten-Free' | 'House Special')[];
  image: string;
  alcoholByVolume?: string;
  pairing?: string;
  isPopular?: boolean;
}

export interface WeeklyEvent {
  day: string;
  title: string;
  timing: string;
  highlight: string;
  offer: string;
  vibe: string;
  genre: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Reservations' | 'Bar & Drinks' | 'Dress Code' | 'Events';
}

export interface ReservationDetails {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'The Velvet Sangria Lounge' | 'The Starlight Rooftop & Cabana' | 'The Vintage Wine Cellar' | 'The Golden Brass Bar';
  occasion?: string;
  specialRequests?: string;
  preSelectedPlan?: string;
  createdAt: string;
}

export interface GoogleAIPrompt {
  id: string;
  title: string;
  category: 'Website Development' | 'Luxury Marketing' | 'Menu Engineering' | 'Customer AI Agent' | 'Visual Prompt';
  targetAI: 'Google AI Studio / Gemini 1.5 & 2.5 Pro' | 'Imagen 3' | 'Gemini Live';
  description: string;
  promptText: string;
  suggestedVariables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}
