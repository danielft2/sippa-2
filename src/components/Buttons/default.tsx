import { ButtonHTMLAttributes } from 'react';

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Default({ ...rest }: ButtonDefaultProps) {
   return (
      <button
         className="bg-green-400 h-10 rounded text-white text-sm hover:brightness-95 transition-all"
         {...rest}
      />
   );
}
