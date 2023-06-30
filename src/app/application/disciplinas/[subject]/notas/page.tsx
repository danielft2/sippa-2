'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { Header, ResumeNotes } from '@/app/application/disciplinas/components';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { SubjectService } from '@/services/https/subjects';

const Notes = () => {
   const { subject } = useParams();

   const { data } = useQuery({
      queryKey: ['notes'],
      queryFn: () => SubjectService.getAllNotesByClassroom()
   });

   const { classrooms } = useClassRoomRecents();

   return (
      <main className="space-y-4">
         <Header
            subtitle={classrooms[0]?.discipline.code}
            title={classrooms[0]?.discipline.name}
            description={classrooms[0]?.teacherName}
         />
         <section className="grid grid-cols-2 lg_p:grid-cols-1 gap-4">
            <ResumeNotes
               body={
                  data?.activities
                     ? data.activities.filter(
                          (item) => item.classroom_id === subject
                       )
                     : []
               }
               type="Atividades"
            />
            <ResumeNotes
               body={
                  data?.exams
                     ? data.exams.filter(
                          (item) => item.classroom_id === subject
                       )
                     : []
               }
               type="Avaliações"
            />
         </section>
      </main>
   );
};

export default Notes;
