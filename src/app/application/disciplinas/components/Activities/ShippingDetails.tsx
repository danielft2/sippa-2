import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { UploadCloud } from 'lucide-react';

import { Button } from '@/components/Button';
import uploadFileSvg from '@/assets/ilustrations/upload-file.svg';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

export function ShippingDetails() {
   return (
      <section className="bg-white rounded-md flex flex-col gap-1">
         <div className="border-b border-gray-200">
            <div className="flex items-center gap-1 px-7 py-5 pb-4">
               <span className="text-green-400">
                  <UploadCloud size={18} />
               </span>
               <h1 className={`${poppins_md.className} text-sm text-gray-600`}>
                  Detalhes do Envio
               </h1>
            </div>
         </div>
         <div className="w-full flex-1 px-7 py-5 flex flex-col justify-between">
            <div className="space-y-2">
               <div
                  className="w-full h-[150px] flex flex-col justify-center items-center bg-zinc-100 
                  rounded-md border-2 border-dashed border-gray-300 gap-2"
               >
                  <Image
                     src={uploadFileSvg}
                     alt="Imagem de uma nuvem de upload"
                  />
                  <span className="text-sm">
                     Selecione um{' '}
                     <label className="underline cursor-pointer" htmlFor="file">
                        arquivo
                     </label>{' '}
                     para enviar
                  </span>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                     Formato suportados: PDF, zip
                  </span>
                  <span className="text-xs text-gray-500">
                     Tamanho máximo 25mb
                  </span>
               </div>
            </div>
            <Button.Root>
               <Button.Text>Enviar Atividade</Button.Text>
            </Button.Root>
         </div>
         <input type="file" id="file" className="hidden" />
      </section>
   );
}
