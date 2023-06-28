'use client';

import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { Blurhash } from 'react-blurhash';
import { useState } from 'react';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface GeneralNewCardProps {
   title: string;
   description: string;
   linkUrlNews?: string;
   linkUrlImage: string;
   encodeImage: string;
}

const GeneralNewCard = ({
   title,
   description,
   linkUrlNews = '',
   linkUrlImage = '',
   encodeImage = ''
}: GeneralNewCardProps) => {
   const [imageLoading, setImageLoading] = useState(false);

   return (
      <section
         className="max-w-[530px] h-[250px] bg-white rounded-md shadow overflow-hidden flex flex-col"
         aria-label="Noticia"
      >
         <div className="h-[100px] w-full relative">
            <Image
               className="object-cover h-full"
               src={linkUrlImage}
               alt={`Imagem da noticia ${title}`}
               fill
               onLoadingComplete={() => setImageLoading(true)}
            />
            {/* {!imageLoading && (
               <Blurhash
                  hash={encodeImage}
                  width="100%"
                  height={100}
                  resolutionX={50}
                  resolutionY={50}
                  punch={1}
               />
            )} */}
         </div>
         <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
               <h1 className={`${poppins_md.className} text-md`}>{title}</h1>
               <p className="text-sm text-gray-500 truncate">{description}</p>
            </div>
            {linkUrlNews && (
               <a href={linkUrlNews} target="_blank" rel="noreferrer">
                  <span
                     className={`${poppins_md.className} text-sm text-green-600`}
                  >
                     Ver mais
                  </span>
               </a>
            )}
         </div>
      </section>
   );
};

export default GeneralNewCard;
