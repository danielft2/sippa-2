'use client';

import { useParams } from 'next/navigation';
import { Controller, useForm, FormProvider } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { StorageAuth } from '@/storage/StorageAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { retakeExamScheme } from '../validations/scheme';
import { useRetakeExam } from '@/hooks/useRetakeExam';

type RetakeExamData = z.infer<typeof retakeExamScheme>;

export function RetakeExamForm() {
   const { subject } = useParams();
   const { requestSecondCall, examsOptions, isLoading } = useRetakeExam();

   const createRetakeExamForm = useForm<RetakeExamData>({
      resolver: zodResolver(retakeExamScheme)
   });

   const {
      handleSubmit,
      control,
      formState: { isValid }
   } = createRetakeExamForm;

   function handleSubmitData(data: RetakeExamData) {
      requestSecondCall({
         activity_id: data.exam,
         justify: data.justify,
         student_id: StorageAuth.retrieveUserLogged()?.student_id ?? '',
         classroom_id: subject
      });
   }

   return (
      <>
         <FormProvider {...createRetakeExamForm}>
            <form className="space-y-4 mt-4">
               <Form.Field>
                  <Form.Label htmlFor="exam">Avaliação:</Form.Label>
                  <Controller
                     control={control}
                     name="exam"
                     render={({ field: { onChange, ref, value } }) => {
                        return (
                           <Form.Select
                              ref={ref}
                              value={value}
                              onValueChange={onChange}
                              options={examsOptions}
                              ariaLabel="Selecionar avaliação."
                           />
                        );
                     }}
                  />
                  <Form.ErrorMessage field="exam" />
               </Form.Field>
               <Form.Field>
                  <Form.Label htmlFor="justification">
                     Justificativa:
                  </Form.Label>
                  <Form.Textarea id="justification" name="justify" rows={4} />
                  <Form.ErrorMessage field="justify" />
               </Form.Field>
               <div className="pt-12">
                  <Button.Root
                     type="submit"
                     disabled={!isValid}
                     isLoading={isLoading}
                     onClick={handleSubmit(handleSubmitData)}
                  >
                     <Button.Text>Solicitar</Button.Text>
                  </Button.Root>
               </div>
            </form>
         </FormProvider>
      </>
   );
}
