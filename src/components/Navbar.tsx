import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isDarkNavbar = scrolled || mobileMenuOpen;
  const logoSrc = isDarkNavbar
    ? "/Minders%20Logos/White/Untitled-3.png"
    : "/Minders%20Logos/Black/Minders.png";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isDarkNavbar ? 'bg-minder-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="group flex items-center" data-cursor="hover">
          <motion.img
            key={logoSrc} // Add key to force re-render/animation if needed or just let it swap src
            src={logoSrc}
            alt="Minders Logo"
            className="h-10 md:h-16 w-auto object-contain transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium tracking-widest uppercase text-white">
          <a
            href="/#stories"
            className="relative group overflow-hidden"
            data-cursor="hover"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span>Stories</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-minder-yellow transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </a>
          <Link to="/about" className="relative group overflow-hidden" data-cursor="hover">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-minder-yellow transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-cursor="hover"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-minder-black border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6 font-inter text-sm font-medium tracking-widest uppercase text-white">
              <a
                href="/#stories"
                className="hover:text-minder-yellow transition-colors py-2 block"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Stories
              </a>
              <Link
                to="/about"
                className="hover:text-minder-yellow transition-colors py-2 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};