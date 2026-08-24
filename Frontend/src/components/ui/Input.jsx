import React, { useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Eye, EyeOff } from 'lucide-react';

export const Input = React.forwardRef(({
  label,
  error,
  helperText,
  type = 'text',
  className,
  icon: Icon,
  placeholder,
  value,
  onChange,
  id,
  required,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || `input_${Math.random().toString(36).substr(2, 9)}`;
  const isPassword = type === 'password';

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-semibold text-navy">
          {label} {required && <span className="text-brandDanger">*</span>}
        </label>
      )}
      <div className="relative rounded-xl shadow-xs">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-muted">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={twMerge(
            clsx(
              'w-full px-4 py-3 text-sm text-navy bg-white border border-slate-200 rounded-xl transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-muted/70',
              Icon && 'pl-10',
              isPassword && 'pr-11',
              error && 'border-brandDanger focus:ring-brandDanger',
              className
            )
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-muted hover:text-navy focus:outline-none"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
      {error && <p className="text-xs text-brandDanger font-medium">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-muted">{helperText}</p>}
    </div>
  );
});

Input.displayName = 'Input';
