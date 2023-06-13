'use client';

import { useParams } from 'next/navigation';
import TitleBar from '../components/TitleBar';
import { useQuery } from '@tanstack/react-query';
import { ClassroomPlanService } from '@/services/https/classroom-plan';
import { Header } from '../../components/Header';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { CheckCheck } from 'lucide-react';

export default function ClassroomPlan() {
   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();
   const { discipline, teacherName } = classrooms[0];

   const { data: planList } = useQuery({
      queryKey: ['plans', subject],
      queryFn: () =>
         ClassroomPlanService.getAllClassroomPlans(
            classrooms[0].classroom.classroom_id
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
         <div className="bg-gray-50 px-9 py-6 rounded-t-md mt-4">
            <TitleBar titleValue={'Plano de aulas'}></TitleBar>
            <table className="min-w-full divide-y divide-gray-200">
               <thead>
                  <tr>
                     <th className="px-6 py-3 text-center text-md font-semibold text-gray-800">
                        Aula
                     </th>
                     <th className="px-6 py-3 text-center text-md font-semibold text-gray-800">
                        Plano de Aula
                     </th>
                     <th className="px-6 py-3 text-center text-md font-semibold text-gray-800">
                        Diário de Aula
                     </th>
                  </tr>
               </thead>
               <tbody className="text-gray-600 ">
                  {planList ? (
                     planList.map((plan, index) => (
                        <tr
                           key={plan.id}
                           className={`${index % 2 != 0 ? 'bg-gray-200' : ''}`}
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
}
