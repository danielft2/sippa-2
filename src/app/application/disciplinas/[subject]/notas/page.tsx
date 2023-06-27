'use client';

import { useParams } from 'next/navigation';
import { CheckCheck } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import { Header, ResumeNotes } from '@/app/application/disciplinas/components';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { SubjectService } from '@/services/https/subjects';

const Notes = () => {
   const { subject } = useParams();

   const { data } = useQuery({
      queryKey: ['notes', subject],
      queryFn: () => SubjectService.getAllNotesByClassroom(subject)
   });

   const { classrooms } = useClassRoomRecents();

   return (
      <main className="space-y-4">
         <Header
            subtitle={classrooms[0]?.discipline.code}
            title={classrooms[0]?.discipline.name}
            description={classrooms[0]?.teacherName}
            color="#017863"
         >
            <div className="text-green-600 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <section className="grid grid-cols-2 lg_p:grid-cols-1 gap-4">
            <ResumeNotes
               body={data?.exams ? data.exams : []}
               type="Avaliações"
            />
            <ResumeNotes
               body={data?.activities ? data.activities : []}
               type="Atividades"
            />
         </section>
      </main>
   );
};

export default Notes;
