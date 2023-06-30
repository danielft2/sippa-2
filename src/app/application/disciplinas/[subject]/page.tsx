'use client';

import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

import ParticipantsList from '@/app/application/disciplinas/components/Dashboard/ParticipantsList';
import NewsList from '@/app/application/disciplinas/components/Dashboard/NewsList';
import { Header } from '@/app/application/disciplinas/components/Header';

const DisciplineDetails = () => {
   const { classrooms } = useClassRoomRecents();

   return (
      <>
         <Header
            subtitle={classrooms[0]?.discipline.code}
            title={classrooms[0]?.discipline.name}
            description={classrooms[0]?.teacherName}
         ></Header>
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
