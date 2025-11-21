import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartSidebar } from './CartSidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <CartSidebar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
