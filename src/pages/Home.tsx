import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { HeroCarousel } from '../components/HeroCarousel';
import { StoriesGrid } from '../components/StoriesGrid';
import { CTASection } from '../components/CTASection';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#stories') {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.6
      }}
      className="bg-minder-black">
      
      <HeroCarousel />
      <StoriesGrid />
      <CTASection />
    </motion.main>);

};