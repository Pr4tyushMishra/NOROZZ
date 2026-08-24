import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Card = ({
  children,
  className,
  hoverable = false,
  padded = true,
  onClick,
  ...props
}) => {
  const base = 'bg-white rounded-2xl border border-slate-200/80 transition-all duration-200';
  const padding = padded ? 'p-6' : '';
  const hoverStyles = hoverable ? 'hover:shadow-card-hover hover:border-teal-200 cursor-pointer hover:-translate-y-0.5' : 'shadow-subtle';

  return (
    <div
      className={twMerge(clsx(base, padding, hoverStyles, className))}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};
