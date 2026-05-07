import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, User, PenTool } from 'lucide-react';
import { stories } from '../data/stories';
import { ScrollReveal } from '../components/ScrollReveal';
export const StoryDetail: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const navigate = useNavigate();
  const story = stories.find((s) => s.id === id);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-minder-black text-white">
        <div className="text-center">
          <h1 className="font-playfair text-4xl mb-6">Story not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-minder-yellow underline">
            
            Return Home
          </button>
        </div>
      </div>);

  }
  const moodOverlays = {
    warm: 'bg-orange-500/30',
    dark: 'bg-blue-900/40',
    nostalgic: 'bg-amber-700/30'
  };
  const nextStory = stories.find((s) => s.id !== id) || stories[0];
  return (
    <motion.article
      initial={{
        opacity: 0,
        scale: 0.98
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.6
      }}
      className="bg-minder-black min-h-screen pb-32">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-minder-yellow origin-left z-[60]"
        style={{
          scaleX
        }} />
      

      {/* Hero Banner */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.img
          initial={{
            scale: 1.1
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
          src={story.cover}
          alt={story.title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop';
          }}
          className="w-full h-full object-cover" />
        
        <div
          className={`absolute inset-0 ${moodOverlays[story.mood]} mix-blend-multiply`} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-minder-black via-minder-black/40 to-transparent" />

        <div className="absolute top-24 left-6 md:left-12 z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/80 hover:text-minder-yellow transition-colors font-inter text-sm uppercase tracking-widest"
            data-cursor="hover">
            
            <ArrowLeft size={16} /> Back to Archive
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 container mx-auto">
          <ScrollReveal direction="up">
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight drop-shadow-2xl max-w-5xl">
              {story.title}
            </h1>

            <div className="flex flex-wrap gap-6 md:gap-12 text-white/80 font-inter text-sm uppercase tracking-wider border-t border-white/20 pt-6">
              <div className="flex items-center gap-2">
                <User size={16} className="text-minder-yellow" />
                <span>{story.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <PenTool size={16} className="text-minder-yellow" />
                <span>{story.designer}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-minder-yellow" />
                <span>{story.readingTime}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 mt-20">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal delay={0.2}>
            <p className="text-2xl md:text-3xl font-playfair text-minder-yellow leading-snug mb-12 italic">
              "{story.excerpt}"
            </p>
          </ScrollReveal>

          <div className="space-y-8 text-lg md:text-xl text-gray-300 font-inter leading-relaxed">
            {story.content.map((paragraph, idx) =>
            <ScrollReveal key={idx} delay={0.1}>
                <p>{paragraph}</p>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>

      {/* Next Story Suggestion */}
      <div className="container mx-auto px-6 mt-40">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto border-t-2 border-minder-gray/20 pt-20">
            <h3 className="font-inter text-sm uppercase tracking-widest text-minder-gray mb-8">
              Keep Reading
            </h3>
            <Link
              to={`/story/${nextStory.id}`}
              className="group block relative overflow-hidden rounded-xl border-2 border-transparent hover:border-minder-yellow transition-colors duration-500"
              data-cursor="hover">
              
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img
                src={nextStory.cover}
                alt={nextStory.title}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop';
                }}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
                <h4 className="font-playfair text-3xl md:text-5xl text-white font-bold mb-4">
                  {nextStory.title}
                </h4>
                <span className="text-minder-yellow font-inter uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Read Story →
                </span>
              </div>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </motion.article>);

};