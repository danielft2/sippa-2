import { Context } from '@/@types/context';
import { ClassroomModel } from '@/domain/models/classroom-student-model';
import { StorageClassrooms } from '@/storage/StorageClassroom';
import { createContext, useEffect, useState } from 'react';

interface ClassroomRecentsData {
   classrooms: ClassroomModel[];
   handleSavedDiscipline: (discipline: ClassroomModel) => void;
}

export const ClassroomsRecentsContext = createContext<ClassroomRecentsData>(
   {} as ClassroomRecentsData
);

export function ClassroomRecentsProvider({ children }: Context) {
   const [classrooms, setClassrooms] = useState<ClassroomModel[]>([]);

   function handleSavedDiscipline(classroom: ClassroomModel) {
      const alredyExist = classrooms.find(
         (item) => item.discipline.code === classroom.discipline.code
      );

      if (!alredyExist) {
         const newClassroom =
            classrooms.length < 3
               ? [classroom, ...classrooms]
               : [classroom, ...classrooms.slice(0, 2)];

         setClassrooms(newClassroom);
         StorageClassrooms.savedClassroomsRecents(newClassroom);
      }
   }

   useEffect(() => {
      const classrooms = StorageClassrooms.retrieveClasrromsRecents();
      if (classrooms) setClassrooms(classrooms);
   }, []);

   return (
      <ClassroomsRecentsContext.Provider
         value={{ classrooms, handleSavedDiscipline }}
      >
         {children}
      </ClassroomsRecentsContext.Provider>
   );
}
