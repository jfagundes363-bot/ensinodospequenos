export interface PricingPlan {
  id: 'basic' | 'complete' | 'upgrade_18' | string;
  name: string;
  badge?: string;
  badgeType?: 'subtle' | 'highlight';
  price: string;
  priceValue: number;
  originalPrice?: string;
  discountBadge?: string;
  periodText: string;
  subheadline?: string;
  description: string;
  features: { text: string; included: boolean; highlight?: boolean }[];
  ctaText: string;
  checkoutUrl: string;
  isPopular?: boolean;
}

export interface ActivitySlide {
  id: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  colorTheme: 'blue' | 'rose' | 'amber' | 'emerald' | 'purple';
  previewDetails: {
    skill: string;
    targetAge: string;
    instructions: string;
    elements: {
      type: 'letter' | 'word' | 'drawing' | 'association' | 'matching' | 'syllable';
      label: string;
      hint?: string;
    }[];
  };
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  format: string;
  valueTag?: string;
  category: string;
  themeColor: string;
  iconName: string;
  imageUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface RelatoImageItem {
  id: string;
  author: string;
  role: string;
  tag: string;
  imageUrl: string;
  previewSnippet: string;
  rating?: number;
}

