import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Story } from '../data/stories';
interface StoryCardProps {
  story: Story;
  isHovered: boolean;
  isSiblingHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  rotation: number;
}
export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  isHovered,
  isSiblingHovered,
  onHoverStart,
  onHoverEnd,
  rotation
}) => {
  const moodGlows = {
    warm: 'shadow-[10px_10px_0px_#f97316]',
    dark: 'shadow-[10px_10px_0px_#1e3a8a]',
    nostalgic: 'shadow-[10px_10px_0px_#b45309]'
  };
  const moodOverlays = {
    warm: 'bg-orange-500/30',
    dark: 'bg-blue-900/40',
    nostalgic: 'bg-amber-700/30'
  };
  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      initial={{
        rotate: rotation
      }}
      animate={{
        rotate: isHovered ? 0 : rotation,
        scale: isHovered ? 1.05 : isSiblingHovered ? 0.95 : 1,
        filter: isSiblingHovered ? 'blur(4px)' : 'blur(0px)',
        opacity: isSiblingHovered ? 0.6 : 1,
        zIndex: isHovered ? 10 : 1
      }}
      transition={{
        duration: 0.4,
        ease: 'easeOut'
      }}
      className="relative w-full">
      
      <Link to={`/story/${story.id}`} data-cursor="hover" className="block">
        <div
          className={`bg-white border-2 border-minder-black overflow-hidden transition-shadow duration-400 ${isHovered ? moodGlows[story.mood] : 'shadow-hard-black'}`}>
          
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden border-b-2 border-minder-black">
            <motion.img
              src={story.cover}
              alt={story.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1
              }}
              transition={{
                duration: 0.6
              }} />
            
            {/* Mood Overlay on Hover */}
            <div
              className={`absolute inset-0 transition-opacity duration-400 ${isHovered ? moodOverlays[story.mood] : 'opacity-0'}`} />
            
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-playfair text-2xl font-bold text-minder-black mb-4 line-clamp-2 leading-tight">
              {story.title}
            </h3>

            <div className="flex flex-col gap-1 text-xs font-inter font-semibold text-minder-gray uppercase tracking-wider">
              <span>Written by {story.author}</span>
              <span>Designed by {story.designer}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>);

};