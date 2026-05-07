import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isDarkBg =
  location.pathname === '/' || location.pathname.includes('/story/');
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-minder-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="/"
          className="group flex items-center gap-2"
          data-cursor="hover">
          
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1
            }}
            transition={{
              duration: 0.5
            }}
            className="text-minder-yellow">
            
            <Brain size={32} strokeWidth={2} />
          </motion.div>
          <span className="font-playfair text-2xl font-bold tracking-wider text-white">
            MINDERS
          </span>
        </Link>

        <div className="flex items-center gap-8">
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
            <Link
              to="/about"
              className="relative group overflow-hidden"
              data-cursor="hover">
              
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-minder-yellow transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>);

};