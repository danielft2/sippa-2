'use client';

import { useQuery } from '@tanstack/react-query';
import { SwiperSlide } from 'swiper/react';

import { Slide } from '@/components/Slide';
import { DashboardService } from '@/services/https/dashboard';

import { NewsClass } from '../NewsClass';
import { SkeletonNewsClass } from './SkeletonNewsClass';

import '@/styles/utils.css';
import NewsEmpty from '@/components/NewsEmpty';
import { ServerUnavailable } from '@/errors/ServerUnavailable';

const LastNewsClass = () => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ['news'],
      queryFn: DashboardService.getAllNewsClass,
      staleTime: 1000 * 60 * 60 * 30 // As informações permancem válidas por 30min.
   });

   return (
      <>
         {isLoading ? (
            <SkeletonNewsClass />
         ) : isError ? (
            <ServerUnavailable />
         ) : !data ? (
            <NewsEmpty />
         ) : (
            <Slide slidesPerView={'auto'} resizeObserver spaceBetween={16}>
               {data?.map((news) => (
                  <SwiperSlide key={news.id} className="swiper-slide-custom">
                     <NewsClass
                        code={'QXD3893X'}
                        name={news.title}
                        title={news.title}
                        date={new Intl.DateTimeFormat('pt-BR').format(
                           new Date(news.date_of_post)
                        )}
                     />
                  </SwiperSlide>
               ))}
            </Slide>
         )}
      </>
   );
};

export default LastNewsClass;
