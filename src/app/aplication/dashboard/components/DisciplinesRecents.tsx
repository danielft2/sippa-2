'use client';

import DisciplineSummary from '@/components/DisciplineSummary';
import { useDisciplineRecents } from '@/hooks/useDisciplinesRecents';

const DisciplinesRecents = () => {
   const { disciplines } = useDisciplineRecents();
   return (
      <>
         {disciplines.map((discipline) => {
            return (
               <DisciplineSummary
                  key={discipline.code}
                  isDashboard
                  id={discipline.id}
                  code={discipline.code}
                  name={discipline.name}
                  teachName={discipline.teachName ?? 'Nome do professor'}
                  frequency={90}
                  participants={[]}
               />
            );
         })}
      </>
   );
};

export default DisciplinesRecents;
