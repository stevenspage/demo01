import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import type { Category } from '../types';
import { cn } from '../lib/utils';

export const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(
    (categoryParam as Category) || 'all'
  );
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam as Category);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryParam]);

  const handleCategoryChange = (category: Category | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
    setIsMobileFiltersOpen(false);
  };

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  const categories: { id: Category | 'all', label: string }[] = [
    { id: 'all', label: '全部商品' },
    { id: 'machines', label: '咖啡机' },
    { id: 'grinders', label: '磨豆机' },
    { id: 'accessories', label: '器具配件' },
    { id: 'beans', label: '咖啡豆' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-stone-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-stone-900">选购商品</h1>
          <p className="mt-4 text-stone-600 max-w-2xl">
            精选全球顶级咖啡器具与豆种，为您打造极致的居家咖啡体验。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters (Desktop) */}
          <div className="hidden md:block w-64 flex-shrink-0 space-y-8">
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">分类</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={cn(
                        "text-base transition-colors hover:text-coffee-600",
                        selectedCategory === cat.id ? "text-coffee-600 font-medium" : "text-stone-600"
                      )}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Filter & Sort Controls */}
          <div className="md:hidden flex justify-between items-center mb-6">
            <button 
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="flex items-center gap-2 text-stone-900 font-medium"
            >
              <SlidersHorizontal className="h-5 w-5" />
              筛选
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="border-none bg-transparent text-stone-900 font-medium focus:ring-0"
            >
              <option value="default">默认排序</option>
              <option value="price-asc">价格: 低到高</option>
              <option value="price-desc">价格: 高到低</option>
            </select>
          </div>

          {/* Mobile Filters Menu */}
          {isMobileFiltersOpen && (
            <div className="md:hidden mb-8 space-y-4 border-t border-b border-stone-100 py-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={cn(
                    "block w-full text-left py-2",
                    selectedCategory === cat.id ? "text-coffee-600 font-medium" : "text-stone-600"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-stone-500">{filteredProducts.length} 件商品</p>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-stone-500 text-sm">排序：</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="border-none text-sm font-medium text-stone-900 focus:ring-0 cursor-pointer"
                >
                  <option value="default">默认推荐</option>
                  <option value="price-asc">价格: 低到高</option>
                  <option value="price-desc">价格: 高到低</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-24">
                <p className="text-stone-500 text-lg">该分类下暂无商品。</p>
                <button 
                  onClick={() => handleCategoryChange('all')}
                  className="mt-4 text-coffee-600 font-medium hover:underline"
                >
                  查看所有商品
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
