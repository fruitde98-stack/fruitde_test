import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Instagram, Facebook } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { themeSettings } = useStore();
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Dynamic style for theme customization simulation
  const navbarStyle = {
    backgroundColor: themeSettings.primaryColor,
  };

  const isActive = (path: string) => location.pathname === path ? 'text-brand-gold font-bold' : 'text-white hover:text-brand-cream';

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800" style={{ fontSize: `${themeSettings.fontScale}rem` }}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 shadow-lg transition-colors duration-300" style={navbarStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-serif text-white tracking-widest font-bold">FRUITDE</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/" className={`${isActive('/')} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>홈</Link>
                <Link to="/shop" className={`${isActive('/shop')} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>스토어</Link>
                <Link to="/about" className={`${isActive('/about')} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>브랜드 소개</Link>
                <Link to="/contact" className={`${isActive('/contact')} px-3 py-2 rounded-md text-sm font-medium transition-colors`}>문의하기</Link>
              </div>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4">
               <button className="text-white hover:text-brand-gold transition-colors">
                 <ShoppingCart className="w-6 h-6" />
               </button>
               {/* Admin Link for Demo Purposes */}
               <Link to="/admin" className="text-xs text-white/50 hover:text-white border border-white/20 px-2 py-1 rounded">
                 관리자
               </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white hover:text-brand-gold p-2">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-teal border-t border-brand-green">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={toggleMenu} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-green">홈</Link>
              <Link to="/shop" onClick={toggleMenu} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-green">스토어</Link>
              <Link to="/about" onClick={toggleMenu} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-green">브랜드 소개</Link>
              <Link to="/contact" onClick={toggleMenu} className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-green">문의하기</Link>
              <Link to="/admin" onClick={toggleMenu} className="text-gray-300 block px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-green mt-4">관리자 페이지</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">FRUITDE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                자연이 주는 가장 달콤한 선물.<br/>
                건강한 무설탕 디저트와 프리미엄 과일을<br/>
                여러분의 식탁으로 전해드립니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">고객 센터</h4>
              <p className="text-gray-400 text-sm">
                전화: 02-1234-5678<br/>
                이메일: hello@fruitde.com<br/>
                운영시간: 평일 09:00 - 18:00
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">팔로우</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} FRUITDE. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;