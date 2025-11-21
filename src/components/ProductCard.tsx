import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col h-full">
      <div className="aspect-[4/5] w-full overflow-hidden bg-stone-100 rounded-lg relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-white shadow-lg text-stone-900 hover:bg-coffee-600 hover:text-white transition-colors"
            title="加入购物车"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-base font-medium text-stone-900">
            <Link to={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-stone-500 capitalize">
            {product.category === 'machines' && '咖啡机'}
            {product.category === 'grinders' && '磨豆机'}
            {product.category === 'accessories' && '配件'}
            {product.category === 'beans' && '咖啡豆'}
          </p>
        </div>
        <p className="text-base font-medium text-stone-900">¥{product.price}</p>
      </div>
    </div>
  );
};
