'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
        outline: 'glass border-white/20 text-white hover:bg-white/10 hover:border-white/30',
        secondary: 'bg-slate-800 text-white hover:bg-slate-700',
        ghost: 'text-white hover:bg-white/10',
        link: 'text-purple-400 underline-offset-4 hover:underline hover:text-purple-300',
        gradient: 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 animate-gradient text-white shadow-2xl hover:shadow-purple-500/50',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-4 py-2 text-xs',
        lg: 'h-14 px-8 py-4 text-base',
        xl: 'h-16 px-10 py-5 text-lg',
        icon: 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <motion.div
        whileHover={{ scale: variant === 'ghost' || variant === 'link' ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      </motion.div>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };