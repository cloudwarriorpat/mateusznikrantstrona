import React from 'react';
import { cn } from '@/lib/utils';

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function CustomCard({ children, className, hover = true }: CustomCardProps) {
  return (
    <div
      className={cn(
        'bg-bg-medium border border-border rounded-lg p-6',
        hover && 'transition-all duration-300 hover:border-red-primary hover:scale-105',
        className
      )}
    >
      {children}
    </div>
  );
}