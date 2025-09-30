import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CustomTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const CustomTextarea = forwardRef<HTMLTextAreaElement, CustomTextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-bg-medium border border-border rounded-lg',
            'text-text-primary placeholder:text-text-muted',
            'focus:outline-none focus:border-red-primary focus:ring-2 focus:ring-red-primary/20',
            'transition-all duration-200 min-h-[150px] resize-y',
            error && 'border-destructive focus:border-destructive focus:ring-destructive/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);

CustomTextarea.displayName = 'CustomTextarea';