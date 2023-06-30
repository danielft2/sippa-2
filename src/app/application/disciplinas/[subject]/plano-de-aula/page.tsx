'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { CheckCheck, FileSpreadsheet } from 'lucide-react';

import { ClassroomPlanService } from '@/services/https/classroom-plan';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { Table } from '@/components/Table';
import { EmptyList } from '@/components/EmptyList';
import SearchData from '@/components/SearchData';
import ResponseState from '@/components/ResponseState';
import useErrorsTratament from '@/hooks/useErrorsTratament';

import { Header } from '@/app/application/disciplinas/components/Header';
import { TitleCard } from '@/app/application/disciplinas/components';

const ClassroomPlan = () => {
   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();

   const { data, isLoading, isSuccess, isError, error } = useQuery({
      queryKey: ['plans', subject],
      queryFn: () => ClassroomPlanService.getAllClassroomPlans(subject)
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
            className="bg-white shadow-sm px-8 py-6 rounded-sm mt-4 flex flex-col"
            aria-label="Listagem dos planos de aulas."
         >
            <TitleCard title="Plano de Aula" type="background">
               <FileSpreadsheet size={18} />
            </TitleCard>
            {isSuccess && data.length && data.length > 0 ? (
               <Table
                  headers={['Aula', 'Plano de Aula', 'Dário de Aula']}
                  center
               >
                  {data?.map((item) => (
                     <tr key={item.id} className="text-center">
                        <td>
                           {new Date(item.class_date).toLocaleDateString(
                              'pt-BR'
                           )}
                        </td>
                        <td>{item.class_plan}</td>
                        <td>{item.class_diary}</td>
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
                  isEmpty={data?.length == 0}
               />
            )}
         </section>
      </>
   );
};

export default ClassroomPlan;
