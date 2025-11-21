import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartSidebar = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-stone-100">
              <h2 className="font-serif text-xl font-bold text-stone-900">购物车</h2>
              <button onClick={toggleCart} className="p-2 text-stone-400 hover:text-stone-900 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-stone-400">
                  <ShoppingBag className="h-12 w-12 mb-4 opacity-20" />
                  <p>您的购物车是空的</p>
                  <button 
                    onClick={toggleCart}
                    className="mt-4 text-coffee-600 font-medium hover:underline"
                  >
                    去选购商品
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-stone-100">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium text-stone-900">
                        <h3 className="line-clamp-2 pr-4"><a href="#">{item.name}</a></h3>
                        <p className="ml-4 whitespace-nowrap">¥{item.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-stone-500 capitalize">{item.category === 'beans' ? '咖啡豆' : item.category === 'machines' ? '机器' : '配件'}</p>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-stone-200 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-stone-100"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 text-stone-600">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-stone-100"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-red-500 hover:text-red-600"
                        >
                          移除
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-stone-100 p-6 bg-stone-50">
                <div className="flex justify-between text-base font-medium text-stone-900 mb-4">
                  <p>小计</p>
                  <p>¥{cartTotal.toLocaleString()}</p>
                </div>
                <p className="mt-0.5 text-sm text-stone-500 mb-6">
                  运费将在结算时计算。
                </p>
                <button
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-coffee-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-coffee-700 transition-colors"
                >
                  前往结算
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
