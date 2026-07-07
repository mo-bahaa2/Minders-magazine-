import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useStories } from '../hooks/useStories';
import { StoryCard } from './StoryCard';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';
import { LoadingSpinner } from './LoadingSpinner';
import { useLikes } from '../hooks/useLikes';

interface StoriesGridProps {
  limit?: number;
  showBackButton?: boolean;
  likedOnly?: boolean;
}

export const StoriesGrid: React.FC<StoriesGridProps> = ({ limit, showBackButton = false, likedOnly = false }) => {
  const { stories, loading } = useStories();
  const { likedIds } = useLikes();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Prepare stories: filter liked, reverse to show newest first, then limit if provided
  const displayStories = useMemo(() => {
    let filtered = stories;
    if (likedOnly) {
      filtered = stories.filter(s => likedIds.includes(s.id));
    }
    const reversed = [...filtered].reverse(); // Assuming we want to reverse if backend doesn't
    return limit ? reversed.slice(0, limit) : reversed;
  }, [limit, stories, likedOnly, likedIds]);

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
              {likedOnly ? 'Your Favorites' : 'The Archive'}
            </h2>
            <p className="text-minder-black/80 font-inter max-w-xl text-lg font-medium">
              {likedOnly 
                ? 'A collection of the editorial stories you loved the most.'
                : 'Explore our collection of immersive editorial stories. Hover to feel the mood, click to dive deep.'}
            </p>
          </div>
        </ScrollReveal>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${limit === 4 ? 'lg:grid-cols-2 max-w-5xl mx-auto' : 'lg:grid-cols-3'} gap-x-8 gap-y-16 min-h-[400px]`}>
          {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 bg-minder-black rounded-3xl mx-6">
              <LoadingSpinner size={64} />
            </div>
          ) : displayStories.length > 0 ? (
            displayStories.map((story, idx) =>
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
            )
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center text-minder-black py-20 font-inter">
              <h3 className="font-playfair text-3xl font-bold mb-4">
                {likedOnly ? "No Favorites Yet" : "No Stories Found"}
              </h3>
              <p className="text-minder-black/60 max-w-md mb-8">
                {likedOnly 
                  ? "You haven't liked any stories yet. Explore our archive and tap the heart icon on your favorite reads to save them here!"
                  : "We couldn't find any stories in the archive right now. Check back soon for new content."}
              </p>
              {likedOnly && (
                <Link to="/archive">
                  <Button className="gap-2 px-8 py-4">
                    Explore Stories <ArrowRight size={18} />
                  </Button>
                </Link>
              )}
            </div>
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