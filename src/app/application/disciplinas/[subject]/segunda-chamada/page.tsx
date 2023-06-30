'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { CheckCheck, FileSpreadsheet } from 'lucide-react';

import { TitleCard } from '@/components/TitleCard';
import { Table } from '@/components/Table';
import { RetakeExamService } from '@/services/https/retake-exam';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

import { Header } from '@/app/application/disciplinas/components/Header';
import ResponseState from '@/components/ResponseState';
import SearchData from '@/components/SearchData';
import { EmptyList } from '@/components/EmptyList';
import useErrorsTratament from '@/hooks/useErrorsTratament';
import RetakeExamForm from './components/RetakeExamForm';
import { StorageAuth } from '@/storage/StorageAuth';

const RetakeExam = () => {
   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();
   const studentId = StorageAuth.retrieveUserLogged()?.student_id ?? '';

   const {
      data: retakeExamList,
      isLoading,
      isSuccess,
      isError,
      error
   } = useQuery({
      queryKey: ['retakeExam', subject],
      queryFn: () => RetakeExamService.getAllRetakeExams(subject, studentId)
   });

   const { getErrorComponent } = useErrorsTratament({ error });

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
               <RetakeExamForm></RetakeExamForm>
            </article>
            <article
               className="bg-white p-6 rounded space-y-3 shadow"
               aria-label="Histórico de solicitações."
            >
               <TitleCard title="Solicitações de Chamados" type="background">
                  <FileSpreadsheet size={18} />
               </TitleCard>

               {isSuccess && retakeExamList && retakeExamList.length > 0 ? (
                  <Table
                     headers={['Data', 'Avaliação', 'Justificativa', 'Status']}
                     center
                  >
                     {retakeExamList?.map((retakeExam, index) => (
                        <tr key={index} className="text-center">
                           <td>
                              {new Date(retakeExam.createdAt).toDateString()}
                           </td>
                           <td>{retakeExam.activity_title}</td>
                           <td>{retakeExam.justify}</td>
                           <td>
                              {retakeExam.status ? 'Aprovada' : 'Pendente'}
                           </td>
                        </tr>
                     ))}
                  </Table>
               ) : (
                  <ResponseState
                     loading={<SearchData />}
                     error={getErrorComponent()}
                     empty={<EmptyList />}
                     isLoading={isLoading}
                     isError={isError}
                     isEmpty={retakeExamList?.length == 0}
                  />
               )}
            </article>
         </section>
      </>
   );
};

export default RetakeExam;
