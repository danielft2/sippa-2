'use client';

import { useQuery } from '@tanstack/react-query';

import { SubjectService } from '@/services/https/subjects';
import DisciplineSummary from '@/components/ClassroomSummary';
import UserSummary from '@/components/UserSummary';

const Subjects = () => {
   const { data } = useQuery({
      queryKey: ['subjects'],
      queryFn: SubjectService.getAllDiciplines
   });

   return (
      <main>
         <section className="">
            <div>
               <UserSummary />
            </div>
            <div className="grid grid-cols-3 md_p:grid-cols-1 gap-3 mt-6">
               {data?.map((classroom) => (
                  <DisciplineSummary
                     key={classroom.discipline.id}
                     discipline={classroom}
                     isDashboard={false}
                     frequency={90}
                     participants={[]}
                  />
               ))}
            </div>
         </section>
      </main>
   );
};

export default Subjects;
