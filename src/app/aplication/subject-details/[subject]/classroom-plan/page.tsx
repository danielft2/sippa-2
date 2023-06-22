'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { CheckCheck, FileSpreadsheet } from 'lucide-react';

import { ClassroomPlanService } from '@/services/https/classroom-plan';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

import { Header } from '@/app/aplication/subject-details/components/Header';
import TitleBar from '@/app/aplication/subject-details/components/Dashboard/TitleBar';
import { TitleCard } from '../../components';

const ClassroomPlan = () => {
   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();

   const { data: planList } = useQuery({
      queryKey: ['plans', subject],
      queryFn: () => ClassroomPlanService.getAllClassroomPlans(subject)
   });

   return (
      <>
         <Header
            subtitle={classrooms[0]?.discipline.code}
            title={classrooms[0]?.discipline.name}
            description={classrooms[0]?.teacherName}
            color="#00AF8F"
         >
            <div className="text-green-400 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <div className="bg-gray-50 px-8 py-6 rounded-t-md mt-4">
            <TitleCard title="Plano de Aula" type="background">
               <FileSpreadsheet size={18} />
            </TitleCard>
            <table className="min-w-full divide-y divide-gray-200 mt-4">
               <thead>
                  <tr>
                     <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800">
                        Aula
                     </th>
                     <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800">
                        Plano de Aula
                     </th>
                     <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800">
                        Diário de Aula
                     </th>
                  </tr>
               </thead>
               <tbody className="text-gray-600 ">
                  {planList ? (
                     planList.map((plan, index) => (
                        <tr
                           key={plan.id}
                           className={`${index % 2 != 0 ? 'bg-slate-100' : ''}`}
                        >
                           <td className="px-6 py-4 text-center whitespace-pre-wrap">
                              {new Date(plan.class_date).toLocaleDateString(
                                 'pt-BR'
                              )}
                           </td>
                           <td className="px-6 py-4 text-center whitespace-pre-wrap">
                              {plan.class_plan}
                           </td>
                           <td className="px-6 py-4 text-center whitespace-pre-wrap">
                              {plan.class_diary}
                           </td>
                        </tr>
                     ))
                  ) : (
                     <></>
                  )}
               </tbody>
            </table>
         </div>
      </>
   );
};

export default ClassroomPlan;
