import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      id,
      label,
      error,
      helperText,
      type = 'text',
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? `input-${generatedId.replace(/:/g, '')}`;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const describedBy = [
      ariaDescribedBy,
      helperText ? helperId : undefined,
      error ? errorId : undefined,
    ].filter(Boolean).join(' ') || undefined;

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-ink"
          >
            {label}
          </label>
        )}
        <input
          {...props}
          id={inputId}
          type={type}
          className={cn(
            'w-full border border-trace bg-canvas px-4 py-3 text-base text-ink transition-colors placeholder:text-slate hover:border-slate focus-visible:border-safety disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-safety',
            className
          )}
          aria-invalid={error ? true : ariaInvalid ?? false}
          aria-describedby={describedBy}
          ref={ref}
        />
        {helperText && (
          <p id={helperId} className="text-sm leading-5 text-slate">
            {helperText}
          </p>
        )}
        {error && (
          <p id={errorId} className="text-sm leading-5 text-safety">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 