import React from 'react';

interface ZoharLogoProps {
  className?: string;
  showBadge?: boolean;
}

export const ZoharLogo: React.FC<ZoharLogoProps> = ({
  className = 'w-9 h-9',
  showBadge = true,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
      >
        <defs>
          {/* Badge gradient */}
          <linearGradient id="zoharBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF0F5" />
            <stop offset="100%" stopColor="#FCE7F3" />
          </linearGradient>

          {/* Z Letter Gradient */}
          <linearGradient id="zoharLetterGrad" x1="15%" y1="15%" x2="85%" y2="85%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="45%" stopColor="#DB2777" />
            <stop offset="100%" stopColor="#9D174D" />
          </linearGradient>

          {/* Heart Gradient */}
          <linearGradient id="zoharHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>

          {/* Sparkles Gradient */}
          <linearGradient id="zoharSparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDA4AF" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>

          {/* Soft Shadow */}
          <filter id="zoharGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#DB2777" floodOpacity="0.25" />
          </filter>
        </defs>

        {showBadge && (
          <rect
            x="2"
            y="2"
            width="96"
            height="96"
            rx="24"
            fill="url(#zoharBgGrad)"
            stroke="#FBCFE8"
            strokeWidth="3"
            className="transition-colors"
          />
        )}

        {/* Central Stylized "Z" */}
        <path
          d="M26 31 C26 29 27.5 28 30 28 L70 28 C72.5 28 74 29 74 31 C74 32.5 73 34 71.5 35.5 L40.5 67 L70 67 C72.5 67 74 68.5 74 71 C74 73.5 72.5 75 70 75 L28 75 C25.5 75 24 73.5 24 71 C24 69.5 25 68 26.5 66.5 L57.5 35 L30 35 C27.5 35 26 33.5 26 31 Z"
          fill="url(#zoharLetterGrad)"
          filter="url(#zoharGlow)"
        />

        {/* Floating Heart at top-right of Z */}
        <path
          d="M74 19 C74 15.5 76.5 13 80 13 C82.5 13 84.5 14.5 85.5 16.5 C86.5 14.5 88.5 13 91 13 C94.5 13 97 15.5 97 19 C97 24 90.5 28.5 85.5 32 C80.5 28.5 74 24 74 19 Z"
          fill="url(#zoharHeartGrad)"
        />

        {/* Destello / Sparkle 1 (Top-Left) */}
        <path
          d="M20 13 L22 19 L28 21 L22 23 L20 29 L18 23 L12 21 L18 19 Z"
          fill="url(#zoharSparkleGrad)"
        />

        {/* Destello / Sparkle 2 (Bottom-Right) */}
        <path
          d="M81 65 L82.5 70.5 L88 72 L82.5 73.5 L81 79 L79.5 73.5 L74 72 L79.5 70.5 Z"
          fill="url(#zoharSparkleGrad)"
        />

        {/* Tiny Sparkle (Top-Center) */}
        <path
          d="M50 14 L51 16.5 L53.5 17.5 L51 18.5 L50 21 L49 18.5 L46.5 17.5 L49 16.5 Z"
          fill="#F472B6"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};
