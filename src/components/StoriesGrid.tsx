import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { stories } from '../data/stories';
import { StoryCard } from './StoryCard';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';

interface StoriesGridProps {
  limit?: number;
  showBackButton?: boolean;
}

export const StoriesGrid: React.FC<StoriesGridProps> = ({ limit, showBackButton = false }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Prepare stories: reverse to show newest first, then limit if provided
  const displayStories = useMemo(() => {
    const reversed = [...stories].reverse();
    return limit ? reversed.slice(0, limit) : reversed;
  }, [limit]);

  // Generate consistent random rotations for cards
  const rotations = useMemo(() => {
    return displayStories.map(() => Math.random() * 6 - 3); // -3 to +3 degrees
  }, [displayStories]);
  return (
    <section id="stories" className="py-32 bg-minder-yellow relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-minder-black rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-minder-black opacity-20 pointer-events-none rotate-12" />

      <div className="container mx-auto px-6 md:px-12">
        {showBackButton && (
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-minder-black hover:text-minder-black/70 transition-colors font-inter text-sm uppercase tracking-widest font-bold"
              data-cursor="hover"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        )}

        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-playfair text-5xl md:text-7xl font-black text-minder-black mb-6 uppercase tracking-tight">
              The Archive
            </h2>
            <p className="text-minder-black/80 font-inter max-w-xl text-lg font-medium">
              Explore our collection of immersive editorial stories. Hover to
              feel the mood, click to dive deep.
            </p>
          </div>
        </ScrollReveal>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${limit === 4 ? 'lg:grid-cols-2 max-w-5xl mx-auto' : 'lg:grid-cols-3'} gap-x-8 gap-y-16`}>
          {displayStories.map((story, idx) =>
          <ScrollReveal
            key={story.id}
            delay={idx * 0.1}
            className={idx % 2 !== 0 ? 'lg:mt-16' : ''} // Irregular collage layout
          >
              <StoryCard
              story={story}
              rotation={rotations[idx]}
              isHovered={hoveredIndex === idx}
              isSiblingHovered={hoveredIndex !== null && hoveredIndex !== idx}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)} />
            
            </ScrollReveal>
          )}
        </div>

        {limit && (
          <div className="mt-20 flex justify-center">
            <Link to="/archive">
              <Button className="gap-2 px-10 py-5 text-lg">
                Explore All Stories <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>);

};