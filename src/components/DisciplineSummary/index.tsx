import Image from 'next/image';
import Link from 'next/link';

import { CheckCheck } from 'lucide-react';
import { Poppins } from 'next/font/google';
import { clsx } from 'clsx';

import { Participants } from './Participants';
import { generateRandomColor } from '@/utils/generate-random-colors';

const poppins_semi = Poppins({ weight: ['600'], subsets: ['latin'] });
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface SubjectCardProps {
   code: string;
   name: string;
   teachName: string;
   frequency: number;
   participants: [];
   isDashboard: boolean;
}

export function DisciplineSummary({
   code,
   name,
   frequency,
   teachName,
   isDashboard
}: SubjectCardProps) {
   return (
      <Link href={'/'} className="hover:shadow-md transition-all">
         <div
            className={`bg-white min-w-[200px] max-w-[580px] md_p:max-w-full overflow-hidden rounded-md 
            shadow-sm flex flex-col ${isDashboard ? 'h-[160px]' : ''}`}
         >
            <div
               className={`w-full relative ${
                  isDashboard ? 'h-[30px]' : 'h-[50px]'
               } `}
            >
               <Image
                  className="relative max-h-full object-cover"
                  src={'/subject/subject-banner-md.jpg'}
                  alt="banner of subject"
                  fill
               />
            </div>
            <div className="flex-1 flex flex-col gap-1 justify-between px-5 pb-2 pt-4">
               <div className="">
                  <span
                     className={`${poppins_semi.className} text-sm block -mb-1`}
                     style={{ color: generateRandomColor() }}
                  >
                     {code}
                  </span>
                  <h1
                     className={`${poppins_md.className} text-[15px] text-gray-800 -mb-1 truncate`}
                  >
                     {name}
                  </h1>
                  <span className="text-sm text-gray-500 truncate">
                     {teachName}
                  </span>
               </div>
               <div className="flex items-center justify-between">
                  <div
                     className={clsx('flex items-center gap-1', {
                        'text-green-400': frequency > 80,
                        'text-orange-500': frequency < 80
                     })}
                  >
                     <CheckCheck size={16} />
                     <span className={`${poppins_md.className} text-xs`}>
                        {frequency}%
                     </span>
                  </div>
                  <Participants />
               </div>
            </div>
         </div>
      </Link>
   );
}
