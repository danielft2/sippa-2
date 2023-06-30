'use client';

import { useQuery } from '@tanstack/react-query';
import { List } from 'lucide-react';

import { EmptyList } from '@/components/EmptyList';
import { ResponseState } from '@/components/ResponseState';
import { SearchData } from '@/components/SearchData';
import { ClassroomSummary } from '@/components/ClassroomSummary';
import { useErrorsTratament } from '@/hooks/useErrorsTratament';
import { ActivitiesService } from '@/services/https/activities';

import {
   ActivityCard,
   TitleCard
} from '@/app/application/disciplinas/components';

const DisciplineActivities = () => {
   const { data, isSuccess, isLoading, isError, error } = useQuery({
      queryKey: ['activities'],
      queryFn: ActivitiesService.getAll
   });

   const { getErrorComponent } = useErrorsTratament({ error });

   return (
      <main className="space-y-4">
         <ClassroomSummary isLoading={isLoading} />
         <section
            className="bg-white w-full p-6 space-y-4 shadow rounded-md"
            aria-label={`Lista de atividades`}
         >
            <TitleCard title="Lista de Atividades" type="background">
               <List className="text-green-600" size={20} />
            </TitleCard>
            <article className="flex items-center flex-wrap">
               {isSuccess && data && data.activities.length > 0 ? (
                  data.activities.map((activity) => {
                     if (activity.classroom_id) {
                        return (
                           <ActivityCard
                              key={activity.studentActivityData.id}
                              id={activity.studentActivityData.id}
                              title={activity.title}
                              status={
                                 activity.studentActivityData.status
                                    ? 'Entregue'
                                    : 'Pendente'
                              }
                              points={
                                 activity.studentActivityData.activity_points
                              }
                              date={'22/08/2002'}
                           />
                        );
                     }
                  })
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
