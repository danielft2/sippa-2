import { CheckCheck } from 'lucide-react';
import {
   Header,
   ResumeNotes
} from '@/app/aplication/subject-details/components';
import { ACTIVITIES_NOTES_MOCKUP } from '@/mocks/activities-notes.mock';
import { AVALIATIONS_NOTES_MOCKUP } from '@/mocks/avaliation-notes.mock';

export default function Notes() {
   return (
      <main className="space-y-4">
         <Header
            subtitle="QX2772719"
            title="Desenvolvimento de Software para Dispositivos Movéis | 2023.1 - 01A - SI"
            description="Prof(a). Marcio Espíndola Freire Maia - marcioefmaia@gmail.com"
            color="#00AF8F"
         >
            <div className="text-green-400 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <section className="grid grid-cols-2 lg_p:grid-cols-1 gap-4">
            <ResumeNotes body={ACTIVITIES_NOTES_MOCKUP} />
            <ResumeNotes body={AVALIATIONS_NOTES_MOCKUP} />
         </section>
      </main>
   );
}
