import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Shield Background */}
        <path
          d="M20 2L34 8V18C34 26.5 28.5 34.5 20 38C11.5 34.5 6 26.5 6 18V8L20 2Z"
          fill="url(#gradient1)"
          stroke="url(#gradient2)"
          strokeWidth="1"
        />
        
        {/* Police Badge Star */}
        <path
          d="M20 10L22.5 15H28L23.75 18.5L25.5 24L20 20.5L14.5 24L16.25 18.5L12 15H17.5L20 10Z"
          fill="white"
          stroke="#1E40AF"
          strokeWidth="0.5"
        />
        
        {/* Structure Lines */}
        <path
          d="M14 26H26M16 28H24M18 30H22"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
