import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles =
  'px-8 py-4 font-inter font-bold tracking-wide uppercase text-sm transition-all duration-300 border-2 flex items-center justify-center';
  const variants = {
    primary:
    'bg-minder-yellow text-minder-black border-minder-black shadow-hard-black hover:shadow-hard-black-hover hover:-translate-y-1 hover:-translate-x-1',
    secondary:
    'bg-transparent text-white border-white shadow-[6px_6px_0px_#FFFFFF] hover:shadow-[10px_10px_0px_#FFFFFF] hover:-translate-y-1 hover:-translate-x-1'
  };
  return (
    <motion.button
      whileTap={{
        scale: 0.98,
        translateX: 0,
        translateY: 0,
        boxShadow: '2px 2px 0px currentColor'
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      data-cursor="hover"
      {...props}>
      
      {children}
    </motion.button>);

};