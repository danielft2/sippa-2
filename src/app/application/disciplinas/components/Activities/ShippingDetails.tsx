'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Poppins } from 'next/font/google';
import { UploadCloud } from 'lucide-react';

import { Button } from '@/components/Button';
import uploadFileSvg from '@/assets/ilustrations/upload-file.svg';
import downloadFileSvg from '@/assets/ilustrations/download-file.svg';

import { FilePreview } from './FilePreview';
import { useSubmitActivty } from '@/hooks/useSubmitActivity';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface ShippingDetailsProps {
   id_activity: string;
   fileUrl: string;
   receiveData: string;
   onUpdateData: () => void;
}

const ShippingDetails = ({
   fileUrl,
   id_activity,
   onUpdateData,
   receiveData
}: ShippingDetailsProps) => {
   const [fileURL, setFileURL] = useState('');

   const {
      fileSelected,
      handleSelectedFile,
      removeFileSelected,
      handleSubmitActivity,
      verifyIsSubmitAvailable,
      isLoading
   } = useSubmitActivty({
      onUpdateData,
      id_activity,
      receiveData
   });

   useEffect(() => {
      setFileURL(fileUrl);
   }, [fileUrl]);

   function handleSubmit() {
      if (fileURL && !verifyIsSubmitAvailable()) setFileURL('');
      else if (fileSelected?.size) handleSubmitActivity();
   }

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
            <div className="space-y-2 mb-8">
               <div
                  className={clsx(
                     'w-full h-[150px] flex flex-col justify-center items-center rounded-md bg-zinc-100 border-2 border-dashed gap-2 px-4',
                     {
                        'border-green-400': fileURL,
                        'border-gray-300': !fileURL
                     }
                  )}
               >
                  <Image
                     src={fileURL ? downloadFileSvg : uploadFileSvg}
                     alt="Imagem de uma nuvem de upload"
                  />
                  {fileURL ? (
                     <span className="text-sm text-gray-600">
                        Atividade submetida, realize o download do arquivo.
                     </span>
                  ) : (
                     <span className="text-sm">
                        Selecione um{' '}
                        <label
                           className="underline cursor-pointer hover:text-green-600"
                           htmlFor="file"
                        >
                           arquivo
                        </label>{' '}
                        para enviar
                     </span>
                  )}
               </div>
               <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500">
                     Formato suportados: PDF, imagem e txt
                  </span>
                  <span className="text-xs text-gray-500">
                     Tamanho máximo 5mb
                  </span>
               </div>
               {fileSelected.size && !fileURL && (
                  <FilePreview
                     fileName={fileSelected.name}
                     onRemoveFile={removeFileSelected}
                  />
               )}
               {fileURL && <FilePreview fileName={fileURL} />}
            </div>
            <Button.Root
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={!fileSelected?.size && !fileURL}
            >
               <Button.Text>
                  {fileURL ? 'Mudar Arquivo' : 'Enviar Arquivo'}
               </Button.Text>
            </Button.Root>
         </div>
         <input
            accept="image/png, image/jpeg, application/pdf, text/plain"
            type="file"
            id="file"
            disabled={!!fileURL}
            className="hidden"
            onChange={(e) => handleSelectedFile(e.target.files)}
         />
      </section>
   );
};

export default ShippingDetails;
