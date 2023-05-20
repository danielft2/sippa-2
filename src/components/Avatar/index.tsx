'use client';

import * as AvatarRadix from '@radix-ui/react-avatar';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ weight: '600', subsets: ['latin'] });

interface AvatarSummaryProps extends AvatarRadix.AvatarProps {
   name: string;
   avatarImageUrl: string;
   width: string;
   isBorder?: boolean;
   textSizeFalback: string;
}

const Avatar = ({
   name,
   avatarImageUrl,
   isBorder = false,
   width,
   textSizeFalback
}: AvatarSummaryProps) => {
   return (
      <AvatarRadix.Root
         className={`bg-blackA3 inline-flex select-none items-center justify-center 
         overflow-hidden rounded-full align-middle shadow ${
            isBorder ? 'border-2 border-green-400 p-1' : ''
         } `}
         style={{
            width: `${width}px` ?? '46px',
            height: `${width}px` ?? '46px'
         }}
      >
         <AvatarRadix.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={avatarImageUrl}
            alt="Image profile"
         />
         <AvatarRadix.Fallback
            className={`${poppins.className} text-violet11 flex h-full w-full items-center justify-center 
            ${textSizeFalback} font-medium bg-green-100 rounded-full text-green-600`}
         >
            {`${name?.slice(0, 1)}${name?.slice(1, 2)?.toUpperCase()}`}
         </AvatarRadix.Fallback>
      </AvatarRadix.Root>
   );
};

export default Avatar;
