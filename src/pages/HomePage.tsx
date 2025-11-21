import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop" 
            alt="Coffee brewing" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl space-y-6">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              探索完美的咖啡冲煮艺术
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto"
            >
              从精选豆种到顶级器具，Brew Haven 为您提供居家咖啡师所需的一切。
            </motion.p>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="pt-4"
            >
              <Link 
                to="/shop" 
                className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-100 transition-colors"
              >
                开始探索 <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-stone-900">精选类别</h2>
            <p className="mt-4 text-stone-600">满足您不同冲煮需求的一站式选择</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: '意式浓缩', 
                image: 'https://images.unsplash.com/photo-1612631352488-f337b1a0798f?q=80&w=800&auto=format&fit=crop',
                link: '/shop?category=machines'
              },
              { 
                title: '手冲咖啡', 
                image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
                link: '/shop?category=accessories'
              },
              { 
                title: '新鲜烘焙', 
                image: 'https://images.unsplash.com/photo-1511537632536-b74c2769373f?q=80&w=800&auto=format&fit=crop',
                link: '/shop?category=beans'
              }
            ].map((cat) => (
              <Link key={cat.title} to={cat.link} className="group relative h-96 overflow-hidden rounded-lg">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-serif text-3xl font-bold text-white">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-stone-900">当季热销</h2>
              <p className="mt-2 text-stone-600">咖啡爱好者们的共同选择</p>
            </div>
            <Link to="/shop" className="text-coffee-600 hover:text-coffee-700 font-medium flex items-center gap-1">
              查看全部 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Story/Benefits Section */}
      <section className="py-24 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl font-bold">不仅仅是一杯咖啡</h2>
              <div className="space-y-6 text-stone-300">
                <p>
                  在 Brew Haven，我们相信每一杯咖啡都是一次旅程。从原产地的精选豆种，到精密的冲煮器具，每一个环节都值得被认真对待。
                </p>
                <p>
                  我们的使命是让每个人都能在家中享受到专业级别的咖啡体验。无论你是刚入门的新手，还是经验丰富的咖啡师，这里都有适合你的装备。
                </p>
              </div>
              <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-300">
                了解我们的故事
              </button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1442512595367-42732509d3a4?q=80&w=800&auto=format&fit=crop" 
                alt="Coffee story" 
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
