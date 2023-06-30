'use client';

import { useQuery } from '@tanstack/react-query';
import { CheckCheck, List } from 'lucide-react';

import { ActivityCard, Header } from '@/app/application/disciplinas/components';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { ActivitiesService } from '@/services/https/activities';
import ResponseState from '@/components/ResponseState';
import { EmptyList } from '@/components/EmptyList';
import useErrorsTratament from '@/hooks/useErrorsTratament';
import SearchData from '@/components/SearchData';

const DisciplineActivities = () => {
   const { classrooms } = useClassRoomRecents();

   const { data, isSuccess, isLoading, isError, error } = useQuery({
      queryKey: ['activities'],
      queryFn: ActivitiesService.getAll
   });

   const { getErrorComponent } = useErrorsTratament({ error });

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

         <section
            className="bg-white w-full p-6 space-y-4 shadow rounded-md"
            aria-label={`Lista de atividades`}
         >
            <header className="flex items-center gap-1">
               <span className="text-green-400">
                  <List size={20} />
               </span>
               <span className="text-sm text-gray-800">
                  Lista de Atividades
               </span>
            </header>
            <article className="flex items-center flex-wrap">
               {isSuccess && data && data.activities.length > 0 ? (
                  data.activities.map((activity) => (
                     <ActivityCard
                        key={activity.studentActivityData.id}
                        id={activity.studentActivityData.id}
                        title={activity.title}
                        status={
                           activity.studentActivityData.status
                              ? 'Pendente'
                              : 'Entregue'
                        }
                        points={activity.studentActivityData.activity_points}
                        date={'22/08/2002'}
                     />
                  ))
               ) : (
                  <ResponseState
                     loading={<SearchData />}
                     error={getErrorComponent()}
                     empty={<EmptyList />}
                     isLoading={isLoading}
                     isError={isError}
                     isEmpty={!data}
                  />
               )}
            </article>
         </section>
      </main>
   );
};

export default DisciplineActivities;
