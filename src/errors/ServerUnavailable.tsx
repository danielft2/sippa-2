import { Poppins } from 'next/font/google';
import Image from 'next/image';
import emptyFile from '@/assets/ilustrations/empty-file.svg';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

export function ServerUnavailable() {
   return (
      <div className="h-full flex-1 flex flex-col items-center justify-center pb-4">
         <Image
            src={emptyFile}
            width={180}
            alt="Arquivo vázio indicando que as informações não foram carregadas."
         />
         <h1
            className={`${poppins_md.style} text-sm font-semibold text-gray-500`}
         >
            Ops! Não conseguimos carregar as informações.
         </h1>
         <p className={`text-center text-sm w-40 text-gray-500 max-w-[40px]`}>
            Sentimos muito mas ocorreu um erro inesperado ao carregar as
            informações, tente novamente mais tarde.
         </p>
      </div>
   );
}
