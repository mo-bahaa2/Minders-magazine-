import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { stories } from '../data/stories';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const featuredStories = stories.slice(0, 3);
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, featuredStories.length]);
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.05
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8
      }
    }
  };
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }
    }
  };
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-minder-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0">
          
          {/* Background Image with Parallax feel */}
          <motion.img
            src={featuredStories[currentIndex].cover}
            alt={featuredStories[currentIndex].title}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop';
            }}
            className="w-full h-full object-cover"
            animate={{
              scale: 1.05
            }}
            transition={{
              duration: 10,
              ease: 'linear'
            }} />
          

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-minder-black via-minder-black/60 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-32 px-6 md:px-20 container mx-auto z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={textVariants}
            className="max-w-4xl pointer-events-auto">
            
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 border border-minder-yellow text-minder-yellow text-xs font-bold tracking-widest uppercase rounded-full">
                Featured
              </span>
              <span className="text-minder-gray text-sm font-inter">
                {featuredStories[currentIndex].readingTime}
              </span>
            </div>

            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight drop-shadow-2xl">
              {featuredStories[currentIndex].title}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-inter leading-relaxed">
              {featuredStories[currentIndex].excerpt}
            </p>

            <Link to={`/story/${featuredStories[currentIndex].id}`}>
              <Button variant="primary" className="gap-2">
                Explore Story <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-10 left-6 md:left-20 flex gap-3 z-20">
        {featuredStories.map((_, idx) =>
        <button
          key={idx}
          onClick={() => setCurrentIndex(idx)}
          className="h-1 rounded-full transition-all duration-300"
          style={{
            width: idx === currentIndex ? '40px' : '16px',
            backgroundColor: idx === currentIndex ? '#FFC300' : '#777777'
          }}
          data-cursor="hover"
          aria-label={`Go to slide ${idx + 1}`} />

        )}
      </div>
    </div>);

};