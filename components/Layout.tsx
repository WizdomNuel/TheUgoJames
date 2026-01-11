import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { Background3D } from './Background3D';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const Logo = ({ className = "text-xl" }: { className?: string }) => (
    <div className={`flex flex-col leading-[0.85] select-none ${className}`}>
        <div className="flex items-center gap-1.5">
            <span className="bg-white text-black text-[0.45em] font-extrabold px-[0.6em] py-[0.15em] rounded-full lowercase tracking-tight flex items-center justify-center h-fit translate-y-[0.1em]">the</span>
            <span className="font-bold tracking-tighter text-white lowercase">ugo</span>
        </div>
        <span className="font-bold tracking-tighter text-white lowercase">james</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-black text-white selection:bg-white selection:text-brand-black overflow-x-hidden relative">
      
      {/* Global Background Container */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-brand-black">
          {/* 3D Scene */}
          <Background3D />
          
          {/* Vignette for focus - reduced opacity to 40% to let the gradient shine through */}
          <div className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-40"></div>
      </div>

      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-expo-out ${
          isScrolled ? 'bg-brand-black/80 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <NavLink 
            to="/" 
            className="transition-opacity hover:opacity-80 group"
          >
            <Logo className="text-xl md:text-2xl" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white active' : 'text-gray-400 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="md:hidden text-white transition-transform active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-black border-b border-white/10 p-6 md:hidden flex flex-col space-y-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="text-lg font-medium text-gray-300 hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-0 min-h-screen relative z-10">
        {children}
      </main>

      <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="md:col-span-2">
              <div className="mb-6">
                 <Logo className="text-3xl" />
              </div>
              <p className="text-brand-light-gray max-w-sm text-lg leading-relaxed">
                Building systems, products, and people at the intersection of technology, entrepreneurship, and faith.
              </p>
            </div>
            
            <div>
              <h5 className="text-sm font-semibold tracking-widest text-gray-500 mb-6 uppercase">Explore</h5>
              <div className="flex flex-col space-y-4">
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors">About</NavLink>
                <NavLink to="/work" className="text-gray-400 hover:text-white transition-colors">Ventures</NavLink>
                <NavLink to="/ministry" className="text-gray-400 hover:text-white transition-colors">Ministry</NavLink>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold tracking-widest text-gray-500 mb-6 uppercase">Connect</h5>
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter / X</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-gray-600">
            <span className="mb-4 md:mb-0">© {new Date().getFullYear()} Ugo James. All rights reserved.</span>
            <span>Designed with Eazify Innovation</span>
          </div>
        </div>
      </footer>
    </div>
  );
};