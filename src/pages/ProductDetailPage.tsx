import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-stone-900 mb-4">未找到商品</h2>
        <button 
          onClick={() => navigate('/shop')}
          className="text-coffee-600 hover:underline"
        >
          返回商店
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Optional: Show toast notification
  };

  return (
    <div className="bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-500 hover:text-stone-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-stone-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {/* Mock thumbnails - reusing same image for demo */}
               {[1, 2, 3, 4].map((i) => (
                 <button key={i} className="aspect-square rounded-md overflow-hidden border border-transparent hover:border-coffee-600">
                   <img 
                    src={product.image} 
                    alt="" 
                    className="h-full w-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                   />
                 </button>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">{product.name}</h1>
            <div className="mt-4 flex items-end gap-4">
              <p className="text-2xl font-medium text-stone-900">¥{product.price}</p>
            </div>

            <div className="mt-8 prose prose-stone">
              <p className="text-stone-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="mt-8 border-t border-b border-stone-100 py-6 space-y-4">
              <h3 className="font-medium text-stone-900">产品特点</h3>
              <ul className="list-disc list-inside space-y-2 text-stone-600">
                {product.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-stone-900">数量</span>
                <div className="flex items-center border border-stone-200 rounded-md">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-stone-100 text-stone-600"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 text-stone-900 font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-stone-100 text-stone-600"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-coffee-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-coffee-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                加入购物车 - ¥{(product.price * quantity).toLocaleString()}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                <span>全场包邮</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                <span>2年质保</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
