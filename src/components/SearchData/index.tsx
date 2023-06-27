import { twMerge } from 'tailwind-merge';
import AnimationLottie from '../AnimationLottie';
import searchDataAnimation from '@/assets/animations/search-data.json';

const SearchData = ({ className }: Twmerge) => {
   return (
      <div
         className={twMerge(
            'w-full h-full flex justify-center items-center py-8',
            className
         )}
      >
         <AnimationLottie
            animationData={searchDataAnimation}
            width={350}
            loop={true}
         />
      </div>
   );
};

export default SearchData;
