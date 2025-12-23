import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, Post, ThemeSettings } from '../types';
import { INITIAL_PRODUCTS, INITIAL_POSTS } from '../constants';

interface StoreContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  posts: Post[];
  themeSettings: ThemeSettings;
  updateTheme: (settings: Partial<ThemeSettings>) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
    primaryColor: '#004D40',
    fontScale: 1,
  });

  const addProduct = (product: Product) => {
    setProducts((prev) => [...prev, product]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  };

  const updateTheme = (settings: Partial<ThemeSettings>) => {
    setThemeSettings((prev) => ({ ...prev, ...settings }));
  };

  return (
    <StoreContext.Provider value={{ products, addProduct, updateProduct, posts, themeSettings, updateTheme }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
