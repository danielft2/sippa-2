'use client';

import { CheckCheck } from 'lucide-react';
import {
   Header,
   ResumeNotes
} from '@/app/aplication/subject-details/components';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
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
            color="#00AF8F"
         >
            <div className="text-green-400 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <section className="grid grid-cols-2 lg_p:grid-cols-1 gap-4">
            <ResumeNotes body={data?.exams ? data.exams : []} />
            <ResumeNotes body={data?.activities ? data.activities : []} />
         </section>
      </main>
   );
};

export default Notes;
