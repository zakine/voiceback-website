import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'price' | 'featured-price' | 'tool' | 'step';
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = [
    'backdrop-blur-md',
    'border',
    'transition-all',
    'duration-300',
    'ease-[cubic-bezier(0.22,1,0.36,1)]',
  ];

  const variantClasses = {
    default: [
      'bg-glass',
      'border-border',
      'rounded-vb-xl',
      'p-7',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
    ],
    feature: [
      'bg-glass',
      'border-border',
      'rounded-vb-xl',
      'p-7',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
    ],
    price: [
      'bg-glass',
      'border-border',
      'rounded-vb-xl',
      'p-8',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]',
    ],
    'featured-price': [
      'bg-gradient-to-b',
      'from-[rgba(37,211,102,0.08)]',
      'to-glass',
      'border-[rgba(37,211,102,0.4)]',
      'rounded-vb-xl',
      'p-8',
      'shadow-[0_0_40px_-10px_rgba(37,211,102,0.3),inset_0_1px_0_rgba(255,255,255,0.04)]',
    ],
    tool: [
      'bg-glass',
      'border-border',
      'rounded-vb-lg',
      'p-[18px]',
      'flex',
      'items-center',
      'gap-[14px]',
    ],
    step: [
      'bg-glass',
      'border-border',
      'rounded-vb-xl',
      'p-7',
      'relative',
    ],
  };

  const hoverClasses = hover
    ? variant === 'default' || variant === 'feature'
      ? ['hover:border-border-strong', 'hover:bg-glass-strong']
      : variant === 'tool'
      ? ['hover:border-border-strong']
      : []
    : [];

  const allClasses = [
    ...baseClasses,
    ...variantClasses[variant],
    ...(hover ? hoverClasses : []),
    className,
  ];

  return <div className={cn(allClasses)}>{children}</div>;
};

export default GlassCard;