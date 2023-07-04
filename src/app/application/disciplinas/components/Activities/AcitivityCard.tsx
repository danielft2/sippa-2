import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Poppins } from 'next/font/google';
import { Calculator } from 'lucide-react';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface ActivityCardProps {
   id: string;
   activity_id: string;
   title: string;
   date: string;
   points: number;
   status: boolean;
}

export function ActivityCard({
   id,
   activity_id,
   title,
   status,
   points,
   date
}: ActivityCardProps) {
   return (
      <Link href={`atividades/${id}/${activity_id}`} className="h-[140px] ">
         <div
            className="bg-zinc-100 p-6 pb-3 flex flex-col justify-between gap-4 
            shadow rounded-md hover:scale-105 transition-all"
         >
            <div className="flex flex-col">
               <span
                  className={`text-[13px] ${poppins_md.className} ${
                     status ? 'text-green-600' : 'text-orange-700'
                  }`}
               >
                  {status ? 'Entregue' : 'Pendente'}
               </span>
               <span
                  className={`text-sm text-gray-600 truncate ${poppins_md.className}`}
               >
                  {title}
               </span>
               <span className="text-[13px] text-gray-600">{date}</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
               {(points || points == 0) && (
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
