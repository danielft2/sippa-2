import { ClassroomModel } from '@/domain/models/classroom-student-model';
import { CLASSROOMS_RECENTS_KEY } from './storage.config';

export const StorageClassrooms = {
   savedClassroomsRecents(classrooms: ClassroomModel[]) {
      localStorage.setItem(CLASSROOMS_RECENTS_KEY, JSON.stringify(classrooms));
   },

   retrieveClasrromsRecents(): ClassroomModel[] | null {
      const disciplines = localStorage.getItem(CLASSROOMS_RECENTS_KEY);
      if (disciplines) return JSON.parse(disciplines) as ClassroomModel[];
      else return null;
   }
};
