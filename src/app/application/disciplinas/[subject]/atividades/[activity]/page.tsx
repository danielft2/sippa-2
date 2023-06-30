'use client';

import { useParams } from 'next/navigation';
import { CheckCheck } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import { ActivitiesService } from '@/services/https/activities';
import {
   Header,
   InformationsActivity,
   ShippingDetails
} from '@/app/application/disciplinas/components';

const ActivityDetails = () => {
   const { activity } = useParams();

   const { data, isSuccess, isLoading, isError, error } = useQuery({
      queryKey: ['activityDetails', activity],
      queryFn: () => ActivitiesService.getActivityDetails(activity)
   });

   return (
      <main className="space-y-4">
         <Header
            subtitle={data?.status ? 'Concluida' : 'Pendente'}
            title={data?.title ?? ''}
            description="Segunda, 09 de Abril 2023, 00:00h"
            color={!data?.status ? '#E87912' : ''}
            isLoading={isLoading}
         >
            <div className="flex items-center gap-3">
               <div className="text-gray-500 flex items-center gap-1">
                  <CheckCheck size={16} />
                  <span className="text-[13px]">
                     {data?.activity_points} Pontos.
                  </span>
               </div>
            </div>
         </Header>

         <section className="grid grid-cols-activity lg_p:grid-cols-1 gap-4">
            <InformationsActivity
               description={data?.description ?? ''}
               files={[]}
               isLoading={isLoading}
               isError={isError}
            />
            <ShippingDetails
               id_activity={data?.id ?? ''}
               fileUrl={data?.fileUrl ?? ''}
            />
         </section>
      </main>
   );
};

export default ActivityDetails;
