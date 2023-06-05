'use client';

import { DashboardService } from '@/services/https/dashboard';
import { useQuery } from '@tanstack/react-query';
import { GeneralNewCard } from './NewsCampus';

const GeneralNews = () => {
   const { data } = useQuery({
      queryKey: ['general-news'],
      queryFn: DashboardService.getAllGeneralNews,
      staleTime: 1000 * 60 * 60 * 60 * 4 // the news is valid for 4 hours
   });

   return (
      <section className="grid grid-cols-3 gap-4">
         {data?.map((generalNew) => (
            <GeneralNewCard
               key={generalNew.generalNewsFind.id}
               title={generalNew.generalNewsFind.title}
               description={generalNew.generalNewsFind.description}
               linkUrlImage={generalNew.URL}
               linkUrlNews={generalNew.generalNewsFind.link}
            />
         ))}
      </section>
   );
};

export default GeneralNews;
