import React from 'react';

interface WaveformLogoProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const WaveformLogo: React.FC<WaveformLogoProps> = ({
  width = 26,
  height = 26,
  color = '#25D366',
  className = '',
}) => {
  const bars = [0.45, 0.8, 0.35, 1, 0.62, 0.25, 0.9, 0.5];
  const barWidth = 2.4;
  const gap = 1.8;
  const viewBoxHeight = 24;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 24"
      className={className}
      aria-hidden="true"
    >
      {bars.map((h, i) => {
        const barHeight = 4 + h * 18;
        return (
          <rect
            key={i}
            x={i * (barWidth + gap)}
            y={(viewBoxHeight - barHeight) / 2}
            width={barWidth}
            height={barHeight}
            rx={barWidth / 2}
            fill={color}
          />
        );
      })}
    </svg>
  );
};

export default WaveformLogo;