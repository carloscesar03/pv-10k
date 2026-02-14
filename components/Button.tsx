import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  pulse?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  showIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  pulse = false, 
  variant = 'primary',
  className = '',
  showIcon = false,
  ...props 
}) => {
  const baseStyles = "relative font-display font-black py-5 px-8 rounded-lg uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-green text-black hover:bg-[#33FF88] shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:shadow-[0_0_50px_rgba(0,255,102,0.5)] border border-transparent",
    secondary: "bg-transparent text-white border-2 border-brand-green/30 hover:border-brand-green hover:bg-brand-green/10"
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${pulse ? 'animate-pulse-fast' : ''}
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showIcon && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
      </span>
      
      {/* Brilho interno animado no hover */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
      )}
    </button>
  );
};