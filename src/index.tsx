import React from "react";
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '../utils/cn';

import './styles.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    className?: string;
}

// shadcn's magic button variants 🙈
const buttonVariants = cva("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-gray-900 text-white hover:bg-primary/90",
            outline:
              "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
        },
        defaultVariant: {
            variant: "default",
            size: "md",
        }
    }
})

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Btn = asChild ? Slot : 'button'
        return (
            <Btn
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'

export { Button };