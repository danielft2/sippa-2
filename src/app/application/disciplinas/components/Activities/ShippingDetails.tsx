'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Poppins } from 'next/font/google';
import { UploadCloud } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';

import { Button } from '@/components/Button';
import { ActivitiesService } from '@/services/https/activities';
import { FilePreview } from './FilePreview';
import uploadFileSvg from '@/assets/ilustrations/upload-file.svg';
import useToastMessage from '@/hooks/useToastMessage';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

interface ShippingDetailsProps {
   id_activity: string;
   fileUrl: string;
}

const ShippingDetails = ({ fileUrl, id_activity }: ShippingDetailsProps) => {
   const [file, setFile] = useState<File>({} as File);
   const [fileURL, setFileURL] = useState('');
   const { error } = useToastMessage();

   const { mutateAsync: sendActivity, isLoading } = useMutation({
      mutationKey: ['sendActivity'],
      mutationFn: () =>
         ActivitiesService.sendActivityFile(id_activity, file as File)
   });

   function onSelectedFile(files: FileList | null) {
      const types = ['image/jpge', 'image/png', 'application/pdf', '.txt'];
      if (files && files.length > 0) {
         if (types.includes(files[0].type)) {
            setFile(files[0]);
         } else {
            error('Selecione um tipo de arquivo válido.');
         }
      }
   }

   function handleButtonSubmit() {
      if (fileUrl) setFileURL('');
      else sendActivity();
   }

   useEffect(() => {
      setFileURL(fileUrl);
   }, [fileUrl]);

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
                  className="w-full h-[150px] flex flex-col justify-center items-center bg-zinc-100 
                  rounded-md border-2 border-dashed border-gray-300 gap-2 px-4"
               >
                  <Image
                     src={uploadFileSvg}
                     alt="Imagem de uma nuvem de upload"
                  />
                  {!file.size && !fileURL ? (
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
                  ) : (
                     <FilePreview
                        fileName={fileURL ? fileURL : file.name}
                        onRemoveFile={() => setFile({} as File)}
                     />
                  )}
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                     Formato suportados: PDF, imagem e txt
                  </span>
                  <span className="text-xs text-gray-500">
                     Tamanho máximo 25mb
                  </span>
               </div>
            </div>
            <Button.Root
               onClick={handleButtonSubmit}
               isLoading={isLoading}
               disabled={!file.size && !fileURL}
            >
               <Button.Text>
                  {fileURL ? 'Mudar Arquivo' : 'Enviar Atividade'}
               </Button.Text>
            </Button.Root>
         </div>
         <input
            accept="image/png, image/jpeg, application/pdf, .txt"
            type="file"
            id="file"
            className="hidden"
            onChange={(e) => onSelectedFile(e.target.files)}
         />
      </section>
   );
};

export default ShippingDetails;
