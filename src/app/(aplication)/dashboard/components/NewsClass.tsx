import { generateRandomColor } from '@/utils/generate-random-colors';
import { CalendarDays } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins_sm = Poppins({ weight: ['600'], subsets: ['latin'] });
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface NewsClassProps {
   code: string;
   name: string;
   title: string;
   date: string;
}

export function NewsClass({ code, name, date, title }: NewsClassProps) {
   return (
      <div className="w-[360px] h-[160px] bg-zinc-100 rounded-md shadow-sm px-6 pt-6 pb-5 flex flex-col justify-between">
         <div>
            <span
               className={`${poppins_sm.className} text-sm`}
               style={{ color: generateRandomColor() }}
            >
               {code}
            </span>
            <h1
               className={`${poppins_md.className} text-[15px] text-gray-700 -mb-1 truncate`}
            >
               {name}
            </h1>
            <span className="text-[13px] text-gray-600 truncate">{title}</span>
         </div>
         <div className="flex items-center justify-between">
            <div className="text-gray-500 flex items-center gap-1">
               <CalendarDays size={20} />
               <span className={`${poppins_md.className} text-xs`}>{date}</span>
            </div>
            <Link href="/">
               <span
                  className={`${poppins_md.className} text-[13px] text-green-400`}
               >
                  Ver mais
               </span>
            </Link>
         </div>
      </div>
   );
}
