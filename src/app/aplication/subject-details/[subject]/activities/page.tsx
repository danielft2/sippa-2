'use client';

import { CheckCheck, List } from 'lucide-react';
import { ACTIVITIES_THEMES } from '@/mocks/activities';

import {
   ActivityCard,
   Header
} from '@/app/aplication/subject-details/components';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

const DisciplineActivities = () => {
   const { classrooms } = useClassRoomRecents();

   return (
      <main className="space-y-4">
         <Header
            key={classrooms[0]?.discipline.id}
            subtitle={classrooms[0]?.discipline.code}
            title={classrooms[0]?.discipline.name}
            description={classrooms[0]?.teacherName}
         >
            <div className="flex items-center gap-3">
               <div className="text-green-600 flex items-center gap-1">
                  <CheckCheck size={16} />
                  <span className="text-[13px]">{90}% de Frequência.</span>
               </div>
               <div className="text-orange-700 flex items-center gap-1">
                  <CheckCheck size={16} />
                  <span className="text-[13px]">{6} Faltas.</span>
               </div>
            </div>
         </Header>

         {ACTIVITIES_THEMES.map((theme) => (
            <section
               key={theme.title}
               className="bg-white w-full p-6 space-y-4 shadow rounded-md"
               aria-label={`Atividades do tópico ${theme.title}`}
            >
               <header className="flex items-center gap-1">
                  <span className="text-green-400">
                     <List size={20} />
                  </span>
                  <span className="text-sm text-gray-800">{theme.title}</span>
               </header>
               <article className="grid grid-cols-4 md_p:grid-cols-1 gap-4">
                  {theme.activities.map((activity) => (
                     <ActivityCard
                        key={activity.id}
                        id={activity.id}
                        title={activity.title}
                        status={
                           activity.status == 'Pendente'
                              ? 'Pendente'
                              : 'Entregue'
                        }
                        isFrequency={activity.isFrequency}
                        points={activity.points}
                        date={activity.date}
                     />
                  ))}
               </article>
            </section>
         ))}
      </main>
   );
};

export default DisciplineActivities;
