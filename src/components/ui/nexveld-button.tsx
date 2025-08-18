import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const nexveldButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-primary text-primary-foreground shadow-elevation hover:shadow-glow hover:scale-105 active:scale-95",
        hero: "bg-primary text-primary-foreground shadow-elevation hover:bg-primary-glow hover:shadow-glow hover:scale-105 active:scale-95",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground hover:scale-105 active:scale-95",
        ghost: "text-primary hover:bg-primary/10 hover:scale-105 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface NexveldButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof nexveldButtonVariants> {
  asChild?: boolean
}

const NexveldButton = React.forwardRef<HTMLButtonElement, NexveldButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(nexveldButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NexveldButton.displayName = "NexveldButton"

export { NexveldButton, nexveldButtonVariants }