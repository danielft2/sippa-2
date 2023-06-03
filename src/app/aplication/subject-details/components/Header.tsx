import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';

import { generateRandomColor } from '@/utils/generate-random-colors';

const poppins_semi = Poppins({ weight: ['600'], subsets: ['latin'] });
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface DisicplineHeaderProps {
   subtitle: string;
   title: string;
   description: string;
   color?: string;
   children: ReactNode;
}

export function Header({
   title,
   subtitle,
   description,
   color,
   children
}: DisicplineHeaderProps) {
   return (
      <div className={`bg-white overflow-hidden rounded-md `}>
         <div className="w-full relative h-[60px]">
            <Image
               className="relative max-h-full object-cover"
               src="/subject/subject-banner-md.jpg"
               alt="banner of subject"
               fill
            />
         </div>
         <div className="flex-1 flex flex-col gap-4 justify-between px-7 py-7 pb-3 pt-4">
            <div className="">
               <span
                  className={`${poppins_semi.className} text-sm block -mb-1`}
                  style={{ color: color || generateRandomColor() }}
               >
                  {subtitle}
               </span>
               <h1
                  className={`${poppins_md.className} text-[15px] text-gray-800 -mb-1 truncate`}
               >
                  {title}
               </h1>
               <span className="text-sm text-gray-500 truncate">
                  {description}
               </span>
            </div>
            <div className="flex items-center gap-4">{children}</div>
         </div>
      </div>
   );
}
