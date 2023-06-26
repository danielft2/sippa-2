'use client';

import { DashboardService } from '@/services/https/dashboard';
import { useQuery } from '@tanstack/react-query';

import { Skeleton } from '@/components/Skeleton';
import { GeneralNewCard } from './GeneralNewCard';

const GeneralNews = () => {
   const { data, isLoading } = useQuery({
      queryKey: ['general-news'],
      queryFn: DashboardService.getAllGeneralNews,
      staleTime: 1000 * 60 * 60 * 60 * 4 // the news is valid for 4 hours
   });

   return (
      <section className="grid grid-cols-3 gap-4">
         {isLoading ? (
            <>
               <Skeleton className="max-w-[530px] h-[250px]" />
               <Skeleton className="max-w-[530px] h-[250px]" />
               <Skeleton className="max-w-[530px] h-[250px]" />
            </>
         ) : (
            data?.map((generalNew) => (
               <GeneralNewCard
                  key={`${generalNew.generalNewsFind.id} ${generalNew.URL}`}
                  title={generalNew.generalNewsFind.title}
                  description={generalNew.generalNewsFind.description}
                  linkUrlImage={generalNew.URL}
                  linkUrlNews={generalNew.generalNewsFind.link}
               />
            ))
         )}
      </section>
   );
};

export default GeneralNews;
