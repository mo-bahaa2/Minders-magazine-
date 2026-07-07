import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  className?: string;
  size?: number;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = '', size = 64 }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.img
        src="/Minders%20Logos/White/Untitled-3.png"
        alt="Loading..."
        className="object-contain"
        style={{ width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear"
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="text-white/60 font-inter text-xs tracking-[0.2em] uppercase mt-6"
      >
        Loading
      </motion.p>
    </div>
  );
};
