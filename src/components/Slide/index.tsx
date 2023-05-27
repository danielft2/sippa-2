import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { ReactNode } from 'react';

interface SlideProps extends SwiperProps {
   children: ReactNode;
}

export function Slide({ children, ...rest }: SlideProps) {
   return (
      <Swiper modules={[Navigation, Autoplay, Pagination, A11y]} {...rest}>
         {children}
      </Swiper>
   );
}
