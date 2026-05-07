import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Button } from './Button';
export const CTASection: React.FC = () => {
  return (
    <section className="py-40 bg-white relative overflow-hidden border-y-2 border-minder-black">
      {/* Memphis style background accents */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-minder-black rounded-full" />
      <div className="absolute top-20 right-20 w-6 h-6 border-2 border-minder-black rotate-45" />
      <div className="absolute bottom-20 left-1/4 w-8 h-2 bg-minder-yellow" />

      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black text-minder-black mb-10 leading-none">
            Want to be part <br /> of{' '}
            <span className="text-minder-yellow drop-shadow-[4px_4px_0px_#0A0A0A]">
              Minders?
            </span>
          </h2>
          <p className="font-inter text-xl text-minder-gray mb-12 max-w-2xl mx-auto">
            We are always looking for visionary writers, photographers, and
            designers to contribute to our next issue.
          </p>
          <div className="flex justify-center">
            <Button className="text-lg px-10 py-5">Become a Minder</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>);

};