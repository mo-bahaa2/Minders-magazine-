import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
export const Footer: React.FC = () => {
  const socials = [
  {
    icon: Facebook,
    name: 'Facebook'
  },
  {
    icon: Instagram,
    name: 'Instagram'
  },
  {
    icon: Twitter,
    name: 'Twitter'
  },
  {
    icon: Youtube,
    name: 'YouTube'
  }];

  return (
    <footer className="bg-minder-black text-white py-20 border-t-2 border-minder-gray/20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h3 className="font-playfair text-4xl md:text-5xl font-bold mb-12">
          Stay Curious.
        </h3>

        <div className="flex gap-6 mb-16">
          {socials.map((social, idx) =>
          <motion.a
            key={idx}
            href="#"
            data-cursor="hover"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              y: -5
            }}
            whileTap={{
              scale: 0.95
            }}
            className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center hover:bg-minder-yellow hover:border-minder-yellow hover:text-minder-black transition-colors duration-300">
            
              <social.icon size={24} strokeWidth={1.5} />
            </motion.a>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-minder-gray/30 text-minder-gray text-sm font-inter">
          <p>
            © {new Date().getFullYear()} Minders Magazine. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-minder-yellow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-minder-yellow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

};