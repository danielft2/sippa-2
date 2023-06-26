'use client';

import { CheckCheck } from 'lucide-react';

import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

import ParticipantsList from '@/app/aplication/subject-details/components/Dashboard/ParticipantsList';
import NewsList from '@/app/aplication/subject-details/components/Dashboard/NewsList';
import { Header } from '@/app/aplication/subject-details/components/Header';

const DisciplineDetails = () => {
   const { classrooms } = useClassRoomRecents();

   return (
      <>
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
         <section
            className="grid grid-cols-2 lg_p:grid-cols-1 gap-6 mt-4"
            aria-label="Listagem de noticias e participantes da turma."
         >
            <NewsList />
            <ParticipantsList />
         </section>
      </>
   );
};

export default DisciplineDetails;
