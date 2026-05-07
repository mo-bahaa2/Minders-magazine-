import React, { useMemo, useState } from 'react';
import { stories } from '../data/stories';
import { StoryCard } from './StoryCard';
import { ScrollReveal } from './ScrollReveal';
export const StoriesGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Generate consistent random rotations for cards
  const rotations = useMemo(() => {
    return stories.map(() => Math.random() * 6 - 3); // -3 to +3 degrees
  }, []);
  return (
    <section id="stories" className="py-32 bg-minder-yellow relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-minder-black rounded-full opacity-20 pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-40 h-40 border-4 border-minder-black opacity-20 pointer-events-none rotate-12" />

      <div className="container mx-auto px-6 md:px-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {stories.map((story, idx) =>
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
      </div>
    </section>);

};