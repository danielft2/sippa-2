'use client';

import { CheckCheck } from 'lucide-react';
import {
   Header,
   ResumeNotes
} from '@/app/aplication/subject-details/components';
import { ACTIVITIES_NOTES_MOCKUP } from '@/mocks/activities-notes.mock';
import { AVALIATIONS_NOTES_MOCKUP } from '@/mocks/avaliation-notes.mock';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

const Notes = () => {
   const { classrooms } = useClassRoomRecents();
   const { discipline, teacherName } = classrooms[0];

   return (
      <main className="space-y-4">
         <Header
            subtitle={discipline.code}
            title={discipline.name}
            description={teacherName}
            color="#00AF8F"
         >
            <div className="text-green-400 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <section className="grid grid-cols-2 lg_p:grid-cols-1 gap-4">
            <ResumeNotes body={ACTIVITIES_NOTES_MOCKUP} />
            <ResumeNotes body={AVALIATIONS_NOTES_MOCKUP} />
         </section>
      </main>
   );
};

export default Notes;
