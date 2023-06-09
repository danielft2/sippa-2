import Image from 'next/image';

import { Poppins } from 'next/font/google';
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface GeneralNewCardProps {
   title: string;
   description: string;
   linkUrlNews?: string;
   linkUrlImage: string;
}

export function GeneralNewCard({
   title,
   description,
   linkUrlNews = '',
   linkUrlImage
}: GeneralNewCardProps) {
   return (
      <div className="max-w-[530px] h-[250px] bg-white rounded-md shadow-sm overflow-hidden flex flex-col">
         <div className="h-[100px] w-full relative">
            <Image
               src={linkUrlImage}
               alt="Imagem do evento"
               fill
               className="object-cover h-full"
            />
         </div>
         <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
               <h1 className={`${poppins_md.className} text-md`}>{title}</h1>
               <p className="text-sm text-gray-500 truncate">{description}</p>
            </div>
            {linkUrlNews && (
               <a href={linkUrlNews} target="_blank" rel="noreferrer">
                  <span
                     className={`${poppins_md.className} text-sm text-green-400`}
                  >
                     Ver mais
                  </span>
               </a>
            )}
         </div>
      </div>
   );
}
