import { HtmlHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const SkeletonVariants = cva('l shadow-sm animate-pulse', {
   variants: {
      variant: {
         default: 'bg-zinc-300 h-9 rounded',
         text: 'bg-zinc-300 w-full h-2 rounded',
         circle: 'bg-zinc-300 w-9 h-9 rounded-full'
      }
   },
   defaultVariants: {
      variant: 'default'
   }
});

interface SkeletonProps
   extends HtmlHTMLAttributes<HTMLDivElement>,
      VariantProps<typeof SkeletonVariants> {}

export function Skeleton({ className, variant, ...rest }: SkeletonProps) {
   return (
      <div
         className={cn(SkeletonVariants({ className, variant }))}
         {...rest}
      ></div>
   );
}
