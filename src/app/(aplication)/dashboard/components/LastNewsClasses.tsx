'use client';

import AnimationLottie from '@/components/AnimationLottie';
import animationNotification from '@/assets/animations/notification.json';

import { Poppins } from 'next/font/google';
import { NEWS } from '@/mocks/news.mock';
import { Slide } from '@/components/Slide';
import { SwiperSlide } from 'swiper/react';
import { BellRing } from 'lucide-react';
import { NewsClass } from './NewsClass';

import '@/styles/utils.css';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

const LastNewsClasses = () => {
   return (
      <section className="w-full bg-white rounded-md px-8 py-7">
         <div className="flex items-center gap-2 text-sm mb-5">
            <span className="text-green-400">
               <BellRing size={18} />
            </span>
            <span className={`${poppins_md.className} text-gray-600`}>
               Ultimas notícias das suas turmas
            </span>
         </div>
         {!NEWS.length ? (
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
               {NEWS.map((news) => (
                  <SwiperSlide key={news.id} className="swiper-slide-custom">
                     <NewsClass
                        code={news.code}
                        name={news.name}
                        title={news.title}
                        date={news.date}
                     />
                  </SwiperSlide>
               ))}
            </Slide>
         )}
      </section>
   );
};

export default LastNewsClasses;
