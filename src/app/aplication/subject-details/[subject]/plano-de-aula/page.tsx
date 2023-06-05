'use client';

import { useParams } from 'next/navigation';
import TitleBar from '../components/TitleBar';
import { useQuery } from '@tanstack/react-query';
import { ClassroomPlanService } from '@/services/https/classroom-plan';

export default function ClassroomPlan() {
   const { subject } = useParams();

   const { data: planList } = useQuery({
      queryKey: ['plans', subject],
      queryFn: () =>
         ClassroomPlanService.getAllClassroomPlans(
            '"b64c8c1c-ce0e-4e84-89cd-e6dc381a1004"'
         )
   });

   return (
      <div className="bg-gray-50 px-9 py-6 rounded-t-md">
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
                           {plan.date.toDateString()}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-pre-wrap">
                           {plan.plan}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-pre-wrap">
                           {plan.diary}
                        </td>
                     </tr>
                  ))
               ) : (
                  <></>
               )}
            </tbody>
         </table>
      </div>
   );
}
