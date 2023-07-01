import { useParams } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from '@/libs/react-query';
import { RetakeExamService } from '@/services/https/retake-exam';
import { useToastMessage } from './useToastMessage';
import { StorageAuth } from '@/storage/StorageAuth';
import { useState } from 'react';

interface ExamOption {
   name: string;
   value: string;
}

export function useRetakeExam() {
   const { successMessage, errorMessage } = useToastMessage();
   const { subject } = useParams();
   const [examsOptions, setExamsOptions] = useState<ExamOption[]>([]);

   useQuery({
      queryKey: ['examList'],
      queryFn: () =>
         RetakeExamService.gellAllExams(
            subject,
            StorageAuth.retrieveUserLogged()?.student_id ?? ''
         ),
      onSuccess: (data) => {
         if (data.length > 0) {
            const exams = data.filter((item) => item != null);
            setExamsOptions(
               exams.map((item) => ({ name: item.title, value: item.id }))
            );
         }
      }
   });

   const { mutateAsync: requestSecondCall, isLoading } = useMutation({
      mutationKey: ['secondCall'],
      mutationFn: (data: any) => RetakeExamService.post(data),
      onSuccess: () => {
         successMessage('Segunda chamada solicitada com sucesso.');
         queryClient.invalidateQueries({ queryKey: ['retakeExam'] });
      },
      onError: () => {
         errorMessage(
            'Ocorreu um erro inesperado ao solicitar a segunda chamada.'
         );
      }
   });

   return {
      requestSecondCall,
      isLoading,
      examsOptions
   };
}
