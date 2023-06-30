import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { HeaderSkeleton } from './HeaderSkeleton';

const poppins_semi = Poppins({ weight: ['600'], subsets: ['latin'] });
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface DisicplineHeaderProps {
   subtitle: string;
   title: string;
   description: string;
   color?: string;
   isLoading?: boolean;
   children?: ReactNode;
}

export function Header({
   title,
   subtitle,
   description,
   color,
   isLoading = false,
   children
}: DisicplineHeaderProps) {
   return (
      <header className={`bg-white overflow-hidden rounded-md shadow`}>
         <div className="w-full relative h-[60px]">
            <Image
               className="relative max-h-full object-cover"
               src="/subject/subject-banner-md.jpg"
               alt="banner of subject"
               fill
               priority
            />
         </div>
         <div className="flex-1 flex flex-col gap-4 justify-between px-7 py-7 pb-3 pt-4">
            {isLoading ? (
               <HeaderSkeleton />
            ) : (
               <>
                  <div className="">
                     <span
                        className={`${poppins_semi.className} text-sm block -mb-1 text-green-600`}
                        style={{ color: color ?? '' }}
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
               </>
            )}
         </div>
      </header>
   );
}
