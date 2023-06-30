import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { ClassroomSummarySkeleton } from './ClassroomSumarySkeleton';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

const poppins_semi = Poppins({ weight: ['600'], subsets: ['latin'] });
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface ClassroomSummaryProps {
   color?: string;
   isLoading?: boolean;
}

export function ClassroomSummary({
   color,
   isLoading = false
}: ClassroomSummaryProps) {
   const { classrooms } = useClassRoomRecents();

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
         <div className="flex-1 flex flex-col gap-4 justify-between px-7 py-6">
            {isLoading ? (
               <ClassroomSummarySkeleton />
            ) : (
               <>
                  <div className="">
                     <span
                        className={`${poppins_semi.className} text-sm block -mb-1 text-green-600`}
                        style={{ color: color ?? '' }}
                     >
                        {classrooms[0]?.discipline.code}
                     </span>
                     <h1
                        className={`${poppins_md.className} text-[15px] text-gray-800 -mb-1 truncate`}
                     >
                        {classrooms[0]?.discipline.name}
                     </h1>
                     <span className="text-sm text-gray-500 truncate">
                        {classrooms[0]?.teacherName}
                     </span>
                  </div>
               </>
            )}
         </div>
      </header>
   );
}
