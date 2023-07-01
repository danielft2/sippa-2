import { useState } from 'react';
import { useToastMessage } from './useToastMessage';
import { useMutation } from '@tanstack/react-query';
import { ActivitiesService } from '@/services/https/activities';
import { isPast } from 'date-fns';

interface useSubmitActivityProps {
   onUpdateData: () => void;
   id_activity: string;
   receiveData: string;
}

export function useSubmitActivty({
   onUpdateData,
   id_activity,
   receiveData
}: useSubmitActivityProps) {
   const [fileSelected, setFileSelected] = useState<File>({} as File);
   const { successMessage, errorMessage } = useToastMessage();

   const { mutateAsync: sendActivity, isLoading } = useMutation({
      mutationKey: ['sendActivity'],
      mutationFn: () =>
         ActivitiesService.sendActivityFile(id_activity, fileSelected),
      onSuccess: () => {
         onUpdateData();
         successMessage('Arquivo submetido com sucesso!');
      },
      onError: () => {
         errorMessage('Ocorreu um erro inesperado ao submeter o arquivo(s)!');
      }
   });

   function handleSelectedFile(files: FileList | null) {
      const typesValids = [
         'image/png',
         'image/jpeg',
         'application/pdf',
         'text/plain'
      ];

      if (files && files.length > 0) {
         if (!typesValids.includes(files[0].type)) {
            errorMessage(
               'Por favor, escolha um arquivo com formato válido.',
               2000
            );
            return false;
         }

         if (parseFloat((files[0].size / 1024 / 1024).toFixed(2)) > 5) {
            errorMessage(
               'O arquivo selecionado ultrapassa o limite de 5mb.',
               2000
            );
            return false;
         }

         setFileSelected(files[0]);
         return true;
      }
   }

   function verifyIsSubmitAvailable() {
      const isSubmitAvailable = isPast(new Date(receiveData));
      if (isSubmitAvailable)
         errorMessage('O prazo de envio de atividade já foi execidido.');

      return isSubmitAvailable;
   }

   function handleSubmitActivity() {
      if (!verifyIsSubmitAvailable()) sendActivity();
   }

   return {
      fileSelected,
      handleSelectedFile,
      handleSubmitActivity,
      verifyIsSubmitAvailable,
      removeFileSelected: () => setFileSelected({} as File),
      isLoading
   };
}
