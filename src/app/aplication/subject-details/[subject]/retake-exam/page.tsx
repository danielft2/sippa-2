'use client';

import { useParams } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { CheckCheck, FileSpreadsheet } from 'lucide-react';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { RetakeExamService } from '@/services/https/retake-exam';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

import { Header } from '@/app/aplication/subject-details/components/Header';
import { TitleCard } from '../../components';
import { Table } from '@/components/Table';

const RetakeExam = () => {
   const { control } = useForm();
   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();

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
            subtitle={classrooms[0]?.discipline.code}
            title={classrooms[0]?.discipline.name}
            description={classrooms[0]?.teacherName}
         >
            <div className="text-green-600 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <section
            className="grid grid-cols-2 lg_p:grid-cols-1 gap-6 mt-6"
            aria-label="Solicitação e histórico de solicitações da segunda chamada."
         >
            <article
               className="bg-white p-6 rounded shadow"
               aria-label="Solicitação de segunda chamada."
            >
               <TitleCard title="Solicitar Segunda Chamada" type="background">
                  <FileSpreadsheet size={18} />
               </TitleCard>
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
                     <Form.Label htmlFor="justification">
                        Justificativa:
                     </Form.Label>
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
            </article>
            <article
               className="bg-white p-6 rounded space-y-3 shadow"
               aria-label="Histórico de solicitações."
            >
               <TitleCard title="Solicitações de Chamados" type="background">
                  <FileSpreadsheet size={18} />
               </TitleCard>
               <Table
                  headers={['Data', 'Avaliação', 'Justificativa', 'Status']}
                  center
               >
                  {retakeExamList?.map((retakeExam, index) => (
                     <tr key={index} className="text-center">
                        <td>{retakeExam.date.toDateString()}</td>
                        <td>{retakeExam.exam}</td>
                        <td>{retakeExam.justify}</td>
                        <td>{retakeExam.status}</td>
                     </tr>
                  ))}
               </Table>
            </article>
         </section>
      </>
   );
};

export default RetakeExam;
