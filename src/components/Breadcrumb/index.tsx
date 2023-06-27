'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { ChevronRight } from 'lucide-react';

import { useSidebar } from '@/hooks/useSidebar';

const Breadcrumb = ({ className }: Twmerge) => {
   const path = usePathname();
   const { general } = useSidebar();

   const itens = path
      .split('/')
      .map((item, index) => {
         const regex = /[0-9]/;
         if (regex.test(item) || item == 'application' || index == 0)
            return null;
         console.log(item);

         const href = path
            .split('/')
            .slice(0, index + 1)
            .join()
            .replace(/,/g, '/');
         const menu = general.find((menu) => menu.pathName.includes(item));

         return { ...menu, pathName: href };
      })
      .filter((item) => item != null);

   const lastItem = itens[itens.length - 1]?.name;

   return (
      <nav className={twMerge('flex items-center gap-1', className)}>
         {itens.map((item, index) => (
            <ul key={`${item?.pathName}${index}`}>
               <li>
                  <Link
                     href={item?.pathName ?? '/'}
                     className={clsx(
                        'text-[13px] text-gray-500 hover:text-green-400 transition-all flex items-center gap-1',
                        {
                           'text-green-400': item?.name == lastItem
                        }
                     )}
                  >
                     {item?.name}
                     {item?.name != lastItem && (
                        <ChevronRight className="w-3 h-3" />
                     )}
                  </Link>
               </li>
            </ul>
         ))}
      </nav>
   );
};

export default Breadcrumb;
