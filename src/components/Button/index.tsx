import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Spinner';

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   isLoading?: boolean;
}

interface ButtonProps {
   children: React.ReactNode;
}

function ButtonRoot({ children, isLoading, ...rest }: ButtonRootProps) {
   return (
      <button
         className={clsx(
            'bg-green-600 w-full h-10 rounded text-sm hover:brightness-90 transition-all flex justify-center items-center px-4',
            {
               'opacity-50': isLoading,
               'opacity-100': !isLoading
            }
         )}
         disabled={isLoading}
         {...rest}
      >
         {isLoading ? <Spinner /> : children}
      </button>
   );
}

function ButtonText({ children }: ButtonProps) {
   return <span className="text-white text-[13px]">{children}</span>;
}

function ButtonIcon({ children }: ButtonProps) {
   return <span>{children}</span>;
}

export const Button = {
   Root: ButtonRoot,
   Text: ButtonText,
   Icon: ButtonIcon
};
