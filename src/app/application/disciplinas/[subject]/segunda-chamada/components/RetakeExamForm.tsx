'use client';

import { useParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { RetakeExamService } from '@/services/https/retake-exam';

const RetakeExamForm = () => {
   const { control } = useForm();
   const { subject } = useParams();

   //    function submitSolicitation() {
   //     await RetakeExamService.post()
   //    }

   return (
      <>
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
                           options={[{ name: 'ap1' }, { name: 'ap2' }]}
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
