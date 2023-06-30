import { LabelHTMLAttributes } from 'react';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: '500', subsets: ['latin'] });

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ ...rest }: LabelProps) {
   return (
      <label
         {...rest}
         className={`${poppins.className} text-[13px] text-gray-600`}
      />
   );
}
