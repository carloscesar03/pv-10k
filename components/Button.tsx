import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  pulse?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  pulse = false, 
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`
        bg-brand-green text-black font-bold py-4 px-8 rounded-lg uppercase tracking-wider
        hover:bg-green-400 transition-all duration-300 transform hover:scale-105
        shadow-[0_0_20px_rgba(0,208,94,0.4)]
        ${fullWidth ? 'w-full' : ''}
        ${pulse ? 'animate-pulse' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};