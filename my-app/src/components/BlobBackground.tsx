'use client';

import React from 'react';
import './blob.css';

const BlobBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div className="relative w-full h-full" style={{ filter: 'url(#goo)' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`blob-modern blob-${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default BlobBackground;
