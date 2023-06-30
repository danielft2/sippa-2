import { twMerge } from 'tailwind-merge';

interface SpinnerProps {
   className?: string;
}

export function Spinner({ className }: SpinnerProps) {
   return (
      <div
         className={twMerge(
            'inline-block h-5 w-5 text-white animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
            className
         )}
         role="status"
      ></div>
   );
}
