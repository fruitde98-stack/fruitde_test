import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import { CATEGORIES } from '../constants';
import { CategoryId } from '../types';

const Shop: React.FC = () => {
  const { products, themeSettings } = useStore();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">Shop</h1>
          <p className="text-gray-500">건강한 디저트의 새로운 기준, 프룻디</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as CategoryId)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-brand-teal text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              style={selectedCategory === category.id ? { backgroundColor: themeSettings.primaryColor } : {}}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            해당 카테고리에 상품이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;