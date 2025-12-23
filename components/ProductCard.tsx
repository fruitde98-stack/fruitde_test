import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white h-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        {product.isFeatured && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-teal text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
            Best
          </span>
        )}
        
        {/* Add to cart overlay */}
        <button 
          className="absolute bottom-4 right-4 bg-brand-teal text-white p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-brand-darkTeal"
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col text-center px-2">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">FRUITDE COLLECTION</div>
        <h3 className="text-lg font-serif font-medium text-gray-900 mb-2 group-hover:text-brand-teal transition-colors line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 font-light line-clamp-2 mb-3 min-h-[40px] leading-relaxed">{product.description}</p>
        <div className="mt-auto pt-2 border-t border-gray-100">
          <span className="text-base font-bold text-brand-teal tracking-wide">
            {product.price.toLocaleString()} KRW
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;