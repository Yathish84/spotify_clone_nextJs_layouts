import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      type={type}
      className={twMerge(
        `w-full rounded-full bg-green-500 border border-transparent p-3 text-black 
        disabled:cursor-not-allowed disabled:opacity-50 
        hover:opacity-75 font-bold transition`,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button'; // It's a good practice to set a displayName when wrapping a component in forwardRef

export default Button;
