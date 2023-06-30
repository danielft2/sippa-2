'use client';

import Lottie, { LottieComponentProps } from 'lottie-react';

interface AnimationLottieProps extends LottieComponentProps {
   width?: number;
}

const AnimationLottie = ({
   width,
   animationData,
   ...rest
}: AnimationLottieProps) => {
   return (
      <Lottie
         animationData={animationData}
         style={{ maxWidth: width }}
         {...rest}
      />
   );
};

export default AnimationLottie;
