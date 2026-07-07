import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Story } from '../data/stories';
import { useLikes } from '../hooks/useLikes';
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
  
  const { isLiked, toggleLike } = useLikes();
  const liked = isLiked(story.id);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLike(story.id, story._id || story.id);
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
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop';
              }}
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
          <div className="p-6" dir={story.language === 'ar' ? 'rtl' : 'ltr'}>
            <h3 className={`text-2xl font-bold mb-4 line-clamp-2 leading-tight ${story.language === 'ar' ? 'font-cairo text-right' : 'font-playfair text-left'} text-minder-black`}>
              {story.title}
            </h3>

            <div className={`flex flex-col gap-1 text-xs font-semibold uppercase tracking-wider ${story.language === 'ar' ? 'font-cairo text-right text-minder-gray' : 'font-inter text-left text-minder-gray'}`}>
              <span>{story.language === 'ar' ? `بِقَلَم ${story.author}` : `Written by ${story.author}`}</span>
              <span>{story.language === 'ar' ? `تَصْمِيم ${story.designer}` : `Designed by ${story.designer}`}</span>
              {story.createdAt && (
                <span className="mt-2 normal-case text-[10px] text-minder-gray/80 tracking-normal">{story.createdAt}</span>
              )}
            </div>
            
            {/* Like Button */}
            <button
              onClick={handleLike}
              className={`absolute ${story.language === 'ar' ? 'left-6' : 'right-6'} bottom-6 flex items-center justify-center p-2 rounded-full transition-all duration-300 z-20 ${liked ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-400'}`}
              aria-label={liked ? "Unlike story" : "Like story"}
            >
              <Heart size={20} fill={liked ? 'currentColor' : 'none'} className={liked ? 'scale-110 transition-transform' : ''} />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>);

};