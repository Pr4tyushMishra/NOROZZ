import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Container = ({ children, className, size = 'default', ...props }) => {
  const sizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-[1280px]',
    wide: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={twMerge(clsx('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizes[size], className))}
      {...props}
    >
      {children}
    </div>
  );
};
