'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Controller, useForm } from 'react-hook-form';
import TitleBar from '../components/TitleBar';
import { RetakeExamService } from '@/services/https/retake-exam';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { CheckCheck } from 'lucide-react';
import { Header } from '../../components/Header';

export default function RetakeExam() {
   const { control } = useForm();
   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();
   const { discipline, teacherName } = classrooms[0];

   const { data: retakeExamList } = useQuery({
      queryKey: ['retakeExam', subject],
      queryFn: () =>
         RetakeExamService.getAllRetakeExams(
            '"b64c8c1c-ce0e-4e84-89cd-e6dc381a1004"'
         )
   });
   return (
      <>
         <Header
            subtitle={discipline.code}
            title={discipline.name}
            description={teacherName}
            color="#00AF8F"
         >
            <div className="text-green-400 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <div className="grid grid-cols-5 gap-10 mt-4">
            <div className="col-span-5 lg:col-span-2 bg-gray-50 px-9 py-6 rounded-t-md">
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
            <div className="col-span-5 lg:col-span-3 bg-gray-50 px-9 py-6 rounded-t-md">
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
                     {retakeExamList ? (
                        retakeExamList.map((retakeExam, index) => (
                           <tr key={index}>
                              <td className="px-6 py-4 text-center whitespace-pre-wrap">
                                 {retakeExam.date.toDateString()}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-pre-wrap">
                                 {retakeExam.exam}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-pre-wrap">
                                 {retakeExam.justify}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-pre-wrap">
                                 {retakeExam.status}
                              </td>
                           </tr>
                        ))
                     ) : (
                        <></>
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      </>
   );
}
