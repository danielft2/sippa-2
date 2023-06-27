'use client';

import Image from 'next/image';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Slides = () => {
   return (
      <Swiper
         modules={[Navigation, Autoplay, Pagination, A11y]}
         slidesPerView={1}
         autoplay={{ delay: 3000 }}
         effect="fade"
         style={{ flex: 1 }}
      >
         <SwiperSlide>
            <Image
               className="object-cover brightness-50"
               src="/slides/slide-1.png"
               alt="Imagem do campus"
               fill
               priority
               sizes="(max-width: 768px) 100vw, (min-width: 1200px) 70vw, 33vw"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Image
               className="object-cover brightness-50"
               src="/slides/slide-2.jpg"
               alt="Imagem do campus"
               fill
               priority
               sizes="(max-width: 768px) 100vw, (min-width: 1200px) 70vw, 33vw"
            />
         </SwiperSlide>
         <SwiperSlide>
            <Image
               className="object-cover brightness-50"
               src="/slides/slide-3.jpg"
               alt="Imagem do campus"
               fill
               priority
               sizes="(max-width: 768px) 100vw, (min-width: 1200px) 70vw, 33vw"
            />
         </SwiperSlide>
      </Swiper>
   );
};

export default Slides;
