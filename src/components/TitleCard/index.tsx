import clsx from 'clsx';
import { Poppins } from 'next/font/google';
import { ReactNode } from 'react';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface TitleCardProps {
   title: string;
   children?: ReactNode;
   icon?: ReactNode;
   type: 'simple' | 'background';
}

export function TitleCard({
   type,
   title,
   icon,
   children = null
}: TitleCardProps) {
   return (
      <header
         className={clsx('', {
            'bg-slate-100 rounded-md': type === 'background',
            'border-b-2 border-gray-100': type === 'simple'
         })}
      >
         <div className="flex items-center gap-1 px-7 py-4 pb-4">
            <span className="text-green-400">{children}</span>
            <h1 className={`${poppins_md.className} text-sm text-gray-600`}>
               {title}
            </h1>
         </div>
      </header>
   );
}
