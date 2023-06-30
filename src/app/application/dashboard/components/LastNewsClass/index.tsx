'use client';

import { useQuery } from '@tanstack/react-query';
import { SwiperSlide } from 'swiper/react';

import { DashboardService } from '@/services/https/dashboard';
import { Slide } from '@/components/Slide';
import { EmptyList } from '@/components/EmptyList';
import { ResponseState } from '@/components/ResponseState';
import { useErrorsTratament } from '@/hooks/useErrorsTratament';

import { NewsClass } from './NewsClass';
import { SkeletonNewsClass } from './SkeletonNewsClass';

import '@/styles/utils.css';

const LastNewsClass = () => {
   const { data, isLoading, isError, isSuccess, error } = useQuery({
      queryKey: ['news'],
      queryFn: DashboardService.getAllNewsClass,
      staleTime: 1000 * 60 * 60 * 60 * 4 // As informações permancem válidas por 30min.
   });

   const { getErrorComponent } = useErrorsTratament({ error });

   return (
      <>
         {isSuccess && data.length ? (
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
         ) : (
            <ResponseState
               loading={<SkeletonNewsClass />}
               error={getErrorComponent()}
               empty={<EmptyList />}
               isLoading={isLoading}
               isError={isError}
               isEmpty={!data}
            />
         )}
      </>
   );
};

export default LastNewsClass;
