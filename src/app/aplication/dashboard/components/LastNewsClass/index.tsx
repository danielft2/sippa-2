'use client';

import { useQuery } from '@tanstack/react-query';
import { SwiperSlide } from 'swiper/react';

import AnimationLottie from '@/components/AnimationLottie';
import animationNotification from '@/assets/animations/notification.json';
import { Slide } from '@/components/Slide';
import { DashboardService } from '@/services/https/dashboard';

import { NewsClass } from '../NewsClass';
import { SkeletonNewsClass } from './SkeletonNewsClass';

import '@/styles/utils.css';

const LastNewsClass = () => {
   const { data, isLoading } = useQuery({
      queryKey: ['news'],
      queryFn: DashboardService.getAllNewsClass,
      staleTime: 1000 * 60 * 60 * 30 // As informações permancem válidas por 30min.
   });

   return (
      <>
         {isLoading ? (
            <SkeletonNewsClass />
         ) : !data ? (
            <div className="flex flex-col justify-center items-center mb-2">
               <AnimationLottie
                  animationData={animationNotification}
                  width={250}
                  loop={true}
               />
               <p className="-mt-3 text-sm text-center text-gray-400">
                  Ainda não existe nenhuma notícia nas suas turmas.
               </p>
            </div>
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
