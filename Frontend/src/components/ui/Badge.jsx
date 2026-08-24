import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Badge = ({
  children,
  tone = 'teal', // teal | mint | navy | gray | success | warning
  size = 'sm',   // sm | md
  className,
  ...props
}) => {
  const base = 'inline-flex items-center font-semibold rounded-full tracking-wide';

  const tones = {
    teal: 'bg-primary-tint text-primary border border-teal-200/50',
    mint: 'bg-emerald-50 text-emerald-700 border border-emerald-200/50',
    navy: 'bg-navy text-white',
    gray: 'bg-slate-100 text-slate-text border border-slate-200',
    success: 'bg-green-50 text-brandSuccess border border-green-200/60',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200/60',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 leading-4',
    md: 'text-xs px-3 py-1 leading-4',
  };

  return (
    <span className={twMerge(clsx(base, tones[tone], sizes[size], className))} {...props}>
      {children}
    </span>
  );
};
