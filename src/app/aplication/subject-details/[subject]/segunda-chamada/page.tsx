'use client';
import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Controller, useForm } from 'react-hook-form';
import TitleBar from '../components/TitleBar';

export default function RetakeExam() {
   const { control } = useForm();
   return (
      <div className="grid grid-cols-5 gap-10">
         <div className="col-span-2 bg-gray-50 px-9 py-6 rounded-t-md">
            <TitleBar titleValue={'Solicitar segunda chamada'}></TitleBar>
            <form className="space-y-4">
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
                           />
                        );
                     }}
                  />
               </Form.Field>
               <Form.Field>
                  <Form.Label htmlFor="justification">
                     Justificativa:
                  </Form.Label>
                  <textarea
                     id="justification"
                     name="justification"
                     // value={formValues.justification}
                     // onChange={handleChange}
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
         </div>
         <div className="col-span-3 bg-gray-50 px-9 py-6 rounded-t-md">
            <TitleBar titleValue={'Solicitações de chamadas'}></TitleBar>
            <table className="min-w-full divide-y divide-gray-200">
               <thead>
                  <tr>
                     <th className="px-6 py-3 text-center text-md font-semibold text-gray-800">
                        Data
                     </th>
                     <th className="px-6 py-3 text-center text-md font-semibold text-gray-800">
                        Avaliação
                     </th>
                     <th className="px-6 py-3 text-center text-md font-semibold text-gray-800">
                        Justificativa
                     </th>
                     <th className="px-6 py-3 text-center text-md font-semibold text-gray-800">
                        Status
                     </th>
                  </tr>
               </thead>
               <tbody className="text-gray-600">
                  <tr>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        16/03/2022
                     </td>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        AP1
                     </td>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
                     </td>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        Aceita
                     </td>
                  </tr>
                  <tr>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        17/03/2023
                     </td>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        AP2
                     </td>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry...
                     </td>
                     <td className="px-6 py-4 text-center whitespace-pre-wrap">
                        Pendente
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
}
