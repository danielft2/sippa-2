'use client';

import { useParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { RetakeExamService } from '@/services/https/retake-exam';
import { StorageAuth } from '@/storage/StorageAuth';
import { useState } from 'react';

const RetakeExamForm = () => {
   const { control, handleSubmit } = useForm();
   const { subject } = useParams();
   const [justify, setJustify] = useState('');

   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setJustify(event.target.value);
   };

   type SelectOption = {
      name: string;
      value: string;
   };

   const {
      data: examList = [],
      isLoading,
      isSuccess,
      isError,
      error
   } = useQuery({
      queryKey: ['examList', subject],
      queryFn: async () => {
         const response = await RetakeExamService.gellAllExams(
            subject,
            StorageAuth.retrieveUserLogged()?.student_id ?? ''
         );
         const examList: SelectOption[] = [];
         for (const exam of response) {
            if (exam) {
               examList.push({ name: exam.title, value: exam.id });
            }
         }
         return examList;
      }
   });

   function handleSubmitData(data: any) {
      RetakeExamService.post({
         activity_id: data.exam,
         justify: justify,
         student_id: StorageAuth.retrieveUserLogged()?.student_id ?? '',
         classroom_id: subject
      });
   }

   return (
      <>
         <form
            className="space-y-4 mt-4"
            onSubmit={handleSubmit(handleSubmitData)}
         >
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
                           options={examList}
                           ariaLabel="Selecionar avaliação."
                        />
                     );
                  }}
               />
            </Form.Field>
            <Form.Field>
               <Form.Label htmlFor="justification">Justificativa:</Form.Label>
               <textarea
                  id="justification"
                  name="justification"
                  value={justify}
                  onChange={handleChange}
                  className="w-full border-none bg-gray-200 px-3 py-2 rounded-md"
                  rows={4}
               ></textarea>
            </Form.Field>
            <div className="pt-12">
               <Button.Root type="submit">
                  <Button.Text>Solicitar</Button.Text>
               </Button.Root>
            </div>
         </form>
      </>
   );
};

export default RetakeExamForm;
