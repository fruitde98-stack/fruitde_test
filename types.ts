
export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  image: string;
  description: string;
  isFeatured?: boolean;
}

export type CategoryId = 'all' | 'sugar-free' | 'fruit-cup' | 'gift-set' | 'kong-pearl' | 'dried-fruit' | 'beverage';

export interface Category {
  id: CategoryId;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface ThemeSettings {
  primaryColor: string;
  fontScale: number;
}
