import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, label, error, helperText, type = 'text', 'aria-describedby': describedBy, 'aria-invalid': invalid, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const descriptionId = error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined;
    const descriptions = [describedBy, descriptionId].filter(Boolean).join(' ') || undefined;
    return (
      <div className="relative">
        <input
          type={type}
          id={inputId}
          aria-invalid={error ? true : invalid}
          aria-describedby={descriptions}
          className={cn(
            'peer w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent px-3 py-2 text-sm placeholder-transparent focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          placeholder={label || ''}
          ref={ref}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'absolute left-3 -top-2.5 bg-white dark:bg-gray-900 px-1 text-xs font-medium text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary-500',
              error && 'text-red-500 peer-focus:text-red-500'
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-help`} className="mt-1 text-xs text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 