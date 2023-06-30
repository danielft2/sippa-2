'use client';

import { useQuery } from '@tanstack/react-query';

import { SubjectService } from '@/services/https/subjects';
import { Spinner } from '@/components/Spinner';
import { ClassroomCard } from '@/components/ClassroomCard';
import { UserSummary } from '@/components/UserSummary';

const Subjects = () => {
   const { data, isLoading } = useQuery({
      queryKey: ['subjects'],
      queryFn: SubjectService.getAllDiciplines
   });

   return (
      <main className="h-full">
         <UserSummary />
         {isLoading ? (
            <div className="flex justify-center mt-8 h-full items-center">
               <Spinner className="text-green-400 w-9 h-9 border-[3.5px]" />
            </div>
         ) : (
            <div className="grid grid-cols-3 md_p:grid-cols-1 gap-3 mt-6">
               {data?.map((classroom) => (
                  <ClassroomCard
                     key={classroom.discipline.id}
                     data={classroom}
                     isDashboard={false}
                     frequency={90}
                  />
               ))}
            </div>
         )}
      </main>
   );
};

export default Subjects;
