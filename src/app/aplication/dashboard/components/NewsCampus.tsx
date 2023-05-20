import Image from 'next/image';
import Link from 'next/link';

import { Poppins } from 'next/font/google';
const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface NewsCampusProps {
   title: string;
   description: string;
   linkUrlNews?: string;
   linkUrlImage: string;
}

export function NewsCampus({
   title,
   description,
   linkUrlNews = '',
   linkUrlImage
}: NewsCampusProps) {
   return (
      <div className="w-[530px] h-[280px] bg-white rounded-md shadow-sm overflow-hidden flex flex-col">
         <div className="h-[120px] w-full relative">
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
               <p className="text-sm text-gray-500">{description}</p>
            </div>
            <Link href={linkUrlNews}>
               <span
                  className={`${poppins_md.className} text-sm text-green-400`}
               >
                  Ver mais
               </span>
            </Link>
         </div>
      </div>
   );
}
