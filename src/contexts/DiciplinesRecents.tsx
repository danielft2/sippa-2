import { Context } from '@/@types/context';
import { DisciplineModel } from '@/domain/models/discipline-model';
import { StorageDisciplines } from '@/storage/StorageDisciplines';
import { createContext, useEffect, useState } from 'react';

interface DisciplinesRecentsData {
   disciplines: DisciplineModel[];
   handleSavedDiscipline: (discipline: DisciplineModel) => void;
}

export const DiciplinesRecentsContext = createContext<DisciplinesRecentsData>(
   {} as DisciplinesRecentsData
);

export function DisciplineRecentsProvider({ children }: Context) {
   const [disciplines, setDisciplines] = useState<DisciplineModel[]>([]);

   function handleSavedDiscipline(discipline: DisciplineModel) {
      const alredyExist = disciplines.find(
         (item) => item.code === discipline.code
      );

      if (!alredyExist) {
         const newDisciplines =
            disciplines.length < 3
               ? [discipline, ...disciplines]
               : [discipline, ...disciplines.slice(0, 2)];

         setDisciplines(newDisciplines);
         StorageDisciplines.savedDisciplinesRecents(newDisciplines);
      }
   }

   useEffect(() => {
      const disciplines = StorageDisciplines.retrieveDisciplinesRecents();
      if (disciplines) setDisciplines(disciplines);
   }, []);

   return (
      <DiciplinesRecentsContext.Provider
         value={{ disciplines, handleSavedDiscipline }}
      >
         {children}
      </DiciplinesRecentsContext.Provider>
   );
}
