import TitleBar from '../components/TitleBar';

export default function ClassroomPlan() {
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
               </tr>
            </tbody>
         </table>
      </div>
   );
}
