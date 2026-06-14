import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        WebkitMaskImage: 'radial-gradient(circle at 50% 30%, #000, transparent 75%)',
        maskImage: 'radial-gradient(circle at 50% 30%, #000, transparent 75%)',
      }}
    />
  );
};

export default BackgroundGrid;