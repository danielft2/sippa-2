import { CheckCheck } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Participants } from './Participants';
const poppins_semi = Poppins({ weight: ['600'], subsets: ['latin'] });
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface SubjectCardProps {
   code: string;
   name: string;
   teachName: string;
   participants: [];
   variant: 'dashboard' | 'disciplines';
}

export function DisciplineSummary({
   code,
   name,
   teachName,
   variant
}: SubjectCardProps) {
   return (
      <Link href={'/'} className="hover:shadow-md transition-all">
         <div
            className={`bg-white min-w-[200px] max-w-[580px] overflow-hidden rounded-md shadow-sm ${
               variant === 'dashboard' ? 'h-[150px]' : ''
            }`}
         >
            <div
               className={`w-full ${
                  variant === 'dashboard' ? 'h-[30px]' : 'h-[50px]'
               } `}
            >
               <Image
                  className="relative max-h-full object-cover"
                  src={'/subject/subject-banner-md.jpg'}
                  alt="banner of subject"
                  width={580}
                  height={50}
               />
            </div>
            <div className="px-5 pt-5 pb-7 flex flex-col gap-1 justify-between">
               <div className="">
                  <span
                     className={`${poppins_semi.className} text-sm text-green-400 block -mb-1`}
                  >
                     {code}
                  </span>
                  <h1
                     className={`${poppins_md.className} text-[15px] text-gray-800 -mb-1`}
                  >
                     {name}
                  </h1>
                  <span className="text-sm text-gray-500">{teachName}</span>
               </div>
               <div className="flex items-center justify-between">
                  <div className="text-green-400 flex items-center gap-1">
                     <CheckCheck size={16} />
                     <span className={`${poppins_md.className} text-xs`}>
                        98% Freq
                     </span>
                  </div>
                  <Participants />
               </div>
            </div>
         </div>
      </Link>
   );
}
