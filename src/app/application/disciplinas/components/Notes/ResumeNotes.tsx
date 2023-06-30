import { Calculator, FileText, TextSelection } from 'lucide-react';
import { TitleCard } from '@/components/TitleCard';

import { Table } from '@/components/Table';

import '@/styles/utils.css';

interface ResumeNotesProps {
   body: any[];
   type: 'Avaliações' | 'Atividades';
}

export function ResumeNotes({ body, type }: ResumeNotesProps) {
   function calculateAvg(total: number, value: number) {
      if (total > 0 && value > 0) return (value / total).toFixed(1);
      return 0.0;
   }

   return (
      <section
         className="bg-white rounded-md shadow px-7 py-5 space-y-2"
         aria-label={`Notas das ${type}`}
      >
         <TitleCard type="background" title={`Notas das ${type}`}>
            <TextSelection size={18} />
         </TitleCard>
         <Table headers={['Nome', 'Peso', 'Nota']}>
            {body.map((item) => (
               <tr key={item.studentActivityData?.id}>
                  <td className="flex items-center gap-1">
                     <span className="text-green-600">
                        <FileText size={16} />
                     </span>
                     <span>{item.title}</span>
                  </td>
                  <td>{item.weight}</td>
                  <td>{item.studentActivityData?.activity_points}</td>
               </tr>
            ))}
            <tr key={'resume'}>
               <td className="flex items-center gap-1">
                  <span className="text-green-600">
                     <Calculator size={16} />
                  </span>
                  <span className="text-green-600">Nota Final</span>
               </td>
               <td></td>
               <td colSpan={2}>
                  <span className="text-green-600">
                     {calculateAvg(
                        body.length,
                        body.reduce((acc, note) => {
                           return (acc += note.note);
                        }, 0)
                     )}
                  </span>
               </td>
            </tr>
         </Table>
      </section>
   );
}
