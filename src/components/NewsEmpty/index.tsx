import AnimationLottie from '../AnimationLottie';
import animationNotification from '@/assets/animations/notification.json';

const NewsEmpty = () => {
   return (
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
   );
};

export default NewsEmpty;
