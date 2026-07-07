import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { StoriesGrid } from '../components/StoriesGrid';

export const Favorites: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-minder-yellow min-h-screen pt-20"
    >
      <StoriesGrid showBackButton={true} likedOnly={true} />
    </motion.main>
  );
};
