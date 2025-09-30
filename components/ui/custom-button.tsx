import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function CustomButton({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  disabled = false,
}: CustomButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-block';

  const variantStyles = {
    primary: 'bg-red-primary text-white hover:bg-red-dark hover:scale-105 hover:shadow-lg hover:shadow-red-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 ease-out',
    secondary: 'border-2 border-red-primary text-red-primary hover:bg-red-primary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-red-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 ease-out',
  };

  const combinedClassName = cn(baseStyles, variantStyles[variant], className);

  if (href && !disabled) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClassName}>
      {children}
    </button>
  );
}