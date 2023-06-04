'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Poppins } from 'next/font/google';
import { CheckCheck } from 'lucide-react';
import { clsx } from 'clsx';

import { Participants } from './Participants';
import { generateRandomColor } from '@/utils/generate-random-colors';
import { useDisciplineRecents } from '@/hooks/useDisciplinesRecents';

const poppins_semi = Poppins({ weight: ['600'], subsets: ['latin'] });
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface SubjectCardProps {
   id: string;
   code: string;
   name: string;
   teachName: string;
   frequency: number;
   participants: [];
   isDashboard?: boolean;
}

const DisciplineSummary = ({
   id,
   code,
   name,
   frequency,
   teachName,
   isDashboard = false
}: SubjectCardProps) => {
   const { handleSavedDiscipline } = useDisciplineRecents();

   return (
      <Link
         href={`aplication/subject-details/${id}`}
         className="hover:shadow-md transition-all"
         onClick={() =>
            handleSavedDiscipline({
               id,
               code,
               name,
               frequency,
               teachName,
               participants: [],
               credit: 0
            })
         }
      >
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
};

export default DisciplineSummary;
