import { useBreadcrumb } from '@/hooks/useBreadcrumb';
import clsx from 'clsx';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export function Breadcrumb({ className }: Twmerge) {
   const { links } = useBreadcrumb();

   return (
      <div className={twMerge('flex items-center gap-2', className)}>
         {links.map((item) => (
            <Link
               key={item.name}
               href={item.link}
               className={clsx(
                  'text-[13px] text-gray-500 hover:text-gray-600',
                  {
                     'text-gray-500': !item.isActive,
                     'text-green-400': item.isActive
                  }
               )}
            >
               {item.name}
            </Link>
         ))}
      </div>
   );
}
