import Link from 'next/link';
import { Poppins } from 'next/font/google';

import { ActivityModel } from '@/domain/models/activity-model';
import { Calculator, CheckCheck } from 'lucide-react';
import { useParams } from 'next/navigation';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

export function ActivityCard({
   id,
   title,
   isFrequency,
   status,
   points,
   date
}: ActivityModel) {
   const { subject } = useParams();

   return (
      <Link href={`/aplication/subject-details/${subject}/activities/${id}`}>
         <div className="bg-zinc-100 p-6 pb-3 flex flex-col justify-between gap-4 shadow rounded-md h-[140px]">
            <div className="flex flex-col">
               <span
                  className={`text-[13px] ${poppins_md.className} ${
                     status == 'Pendente' ? 'text-orange-700' : 'text-green-400'
                  }`}
               >
                  {status}
               </span>
               <span
                  className={`text-sm text-gray-600 truncate ${poppins_md.className}`}
               >
                  {title}
               </span>
               <span className="text-[13px] text-gray-600">{date}</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
               {isFrequency && (
                  <div className="text-green-600 flex items-center gap-1">
                     <CheckCheck size={12} />
                     <span className="text-xs ">Freq.</span>
                  </div>
               )}
               {points && (
                  <div className="text-gray-600 flex items-center gap-1">
                     <Calculator size={12} />
                     <span className="text-xs">{points} pontos</span>
                  </div>
               )}
            </div>
         </div>
      </Link>
   );
}
