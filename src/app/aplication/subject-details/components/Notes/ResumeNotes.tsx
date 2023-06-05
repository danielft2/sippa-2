import { Calculator, FileText, TextSelection } from 'lucide-react';
import { TitleCard } from '@/app/aplication/subject-details/components/TitleCard';

import { Table } from '@/components/Table';

import '@/styles/utils.css';

interface ResumeNotesProps {
   body: any[];
}

export function ResumeNotes({ body }: ResumeNotesProps) {
   function calculateAvg(total: number, value: number) {
      return (value / total).toFixed(1);
   }

   return (
      <section className="bg-white rounded-md px-7 py-5 space-y-2">
         <TitleCard type="background" title="Notas das Atividades">
            <TextSelection size={18} />
         </TitleCard>
         <Table headers={['Nome', 'Peso', 'Nota']}>
            {body.map((note) => (
               <tr key={note.id}>
                  <td className="flex items-center gap-1">
                     <span className="text-green-400">
                        <FileText size={16} />
                     </span>
                     <span>{note.name}</span>
                  </td>
                  <td>{note.weight}</td>
                  <td>{note.note}</td>
               </tr>
            ))}
            <tr>
               <td className="flex items-center gap-1">
                  <span className="text-green-400">
                     <Calculator size={16} />
                  </span>
                  <span className="text-green-400">Nota Final</span>
               </td>
               <td></td>
               <td colSpan={2}>
                  <span className="text-green-400">
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