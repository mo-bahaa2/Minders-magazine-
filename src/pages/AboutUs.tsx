import React from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

export const AboutUs: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-minder-black min-h-screen pt-40 pb-20 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-40 right-10 w-64 h-64 border-[1px] border-minder-yellow rounded-full opacity-10 pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 border-[1px] border-white rounded-full opacity-5 pointer-events-none" />

      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h1 className="text-center font-playfair text-5xl md:text-7xl lg:text-8xl font-black text-minder-yellow mb-24 tracking-wider uppercase drop-shadow-[4px_4px_0px_#fff]">
            About Minders
          </h1>
        </ScrollReveal>

        <div className="bg-[#151515] border-2 border-white/5 rounded-[2rem] p-8 md:p-16 lg:p-24 shadow-2xl relative">
          <div className="space-y-24 md:space-y-32 relative z-10">
            
            {/* Vision */}
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/3 flex justify-start md:justify-end">
                  <div className="bg-minder-yellow text-minder-black font-inter font-black text-xl py-3 px-8 rounded uppercase tracking-widest shadow-hard-yellow hover:translate-y-1 hover:shadow-none transition-all cursor-default transform -rotate-2 border-2 border-minder-black">
                    Our Vision
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    We envision a future driven by young entrepreneurs who contribute to a thriving economy and a brighter tomorrow. By empowering the next generation of innovators, we aim to pave the way for sustainable growth and prosperity.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/3 flex justify-start">
                  <div className="bg-minder-yellow text-minder-black font-inter font-black text-xl py-3 px-8 rounded uppercase tracking-widest shadow-hard-yellow hover:translate-y-1 hover:shadow-none transition-all cursor-default transform rotate-2 border-2 border-minder-black">
                    Our Mission
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-left md:text-right">
                  <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    Our mission is to educate, inspire, and support young individuals, enabling them to transform their ideas into reality through entrepreneurship. We strive to provide them with the tools and knowledge needed to share their vision with the world and achieve their dreams.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Values */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-1/3 flex justify-start md:justify-end">
                  <div className="bg-minder-yellow text-minder-black font-inter font-black text-xl py-3 px-8 rounded uppercase tracking-widest shadow-hard-yellow hover:translate-y-1 hover:shadow-none transition-all cursor-default transform -rotate-1 border-2 border-minder-black">
                    Our Values
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-inter text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    At Minders, we are guided by four core values: creativity, which fuels innovation; passion, which drives excellence; collaboration, which fosters teamwork and inclusivity; and commitment, which ensures dedication to our goals and purpose.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </motion.main>
  );
};
