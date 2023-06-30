import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { CalendarDays } from 'lucide-react';

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
      <div
         className="w-[360px] h-[160px] bg-zinc-100 rounded-md shadow-sm px-6 pt-6 pb-5 flex flex-col 
         justify-between hover:brightness-95 transition-all"
      >
         <div>
            <span className={`${poppins_sm.className} text-sm text-green-600`}>
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
            <div className="text-gray-600 flex items-center gap-1">
               <CalendarDays size={18} />
               <span className={`${poppins_md.className} text-xs`}>{date}</span>
            </div>
            <Link href="/">
               <span
                  className={`${poppins_md.className} text-[13px] text-green-600`}
               >
                  Ver mais
               </span>
            </Link>
         </div>
      </div>
   );
}
