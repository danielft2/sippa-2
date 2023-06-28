import { Poppins } from 'next/font/google';
import Image from 'next/image';
import emptyFile from '@/assets/ilustrations/empty-file.svg';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

export function GenericError() {
   return (
      <div className="h-full flex-1 flex flex-col items-center justify-center py-6">
         <Image
            src={emptyFile}
            width={80}
            alt="Arquivo vázio indicando que as informações não foram carregadas."
         />
         <h1
            className={`${poppins_md.className} text-[15px] text-green-600 mt-3`}
         >
            Ops! Não conseguimos carregar as informações.
         </h1>
         <div>
            <p className={`text-center text-sm text-gray-500`}>
               Ocorreu um erro inesperado tente novamente mais tarde.
            </p>
         </div>
      </div>
   );
}
