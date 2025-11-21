import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { useState } from 'react';

export const Navbar = () => {
  const { toggleCart, cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '所有商品', path: '/shop' },
    { name: '意式咖啡机', path: '/shop?category=machines' },
    { name: '磨豆机', path: '/shop?category=grinders' },
    { name: '手冲器具', path: '/shop?category=accessories' },
  ];

  const isActive = (path: string) => {
    if (path === '/shop' && location.search === '') return location.pathname === '/shop';
    if (path.includes('?')) return location.search.includes(path.split('?')[1]);
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-stone-900 tracking-tight">
            <Coffee className="h-6 w-6 text-coffee-600" />
            Brew Haven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-coffee-600",
                  isActive(link.path) ? "text-coffee-600" : "text-stone-600"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-stone-600 hover:text-coffee-600 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-coffee-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-100 bg-white">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-coffee-600 hover:bg-stone-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
