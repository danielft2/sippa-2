'use client';

import { DisciplineSummary } from '@/components/DisciplineSummary';
import UserSummary from '@/components/UserSummary';
import { ClassroomService } from '@/services/https/disciplines/classrooms';
import { useQuery } from '@tanstack/react-query';

const Subjects = () => {
   // const { data } = useQuery({
   //    queryKey: ['classroom'],
   //    queryFn: ClassroomService.getAll
   // });

   return (
      <main>
         <section className="grid grid-cols-dashboard gap-3 lg_p:grid-cols-1">
            <div>
               <UserSummary />
            </div>
            <div className="grid grid-cols-3 md_p:grid-cols-1 gap-3">
               {/* {data?.map((classroom) => (
                  <DisciplineSummary
                     key={classroom.classroom.classroom_id}
                     isDashboard={false}
                     code={classroom.discipline.code}
                     name={classroom.discipline.name}
                     teachName={classroom.teacherName}
                     frequency={90}
                     participants={[]}
                  />
               ))} */}
            </div>
         </section>
      </main>
   );
};

export default Subjects;
