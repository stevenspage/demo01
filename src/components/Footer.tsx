import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-white">
              <Coffee className="h-6 w-6 text-coffee-400" />
              Brew Haven
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              致力于为您提供最优质的咖啡器具和精选豆种，让每一次冲煮都成为享受。
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">选购</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#" className="hover:text-coffee-400 transition-colors">意式咖啡机</a></li>
              <li><a href="#" className="hover:text-coffee-400 transition-colors">磨豆机</a></li>
              <li><a href="#" className="hover:text-coffee-400 transition-colors">手冲器具</a></li>
              <li><a href="#" className="hover:text-coffee-400 transition-colors">精品咖啡豆</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">关于</h3>
            <ul className="space-y-2 text-sm text-stone-400">
              <li><a href="#" className="hover:text-coffee-400 transition-colors">品牌故事</a></li>
              <li><a href="#" className="hover:text-coffee-400 transition-colors">冲煮指南</a></li>
              <li><a href="#" className="hover:text-coffee-400 transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-coffee-400 transition-colors">配送政策</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg text-white mb-4">关注我们</h3>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-coffee-400 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-coffee-400 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-stone-400 hover:text-coffee-400 transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-medium text-white mb-2">订阅通讯</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="您的邮箱地址" 
                  className="bg-stone-800 border-none text-sm px-4 py-2 rounded-md w-full focus:ring-1 focus:ring-coffee-500"
                />
                <button className="bg-coffee-600 text-white px-4 py-2 rounded-md text-sm hover:bg-coffee-700 transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Brew Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
