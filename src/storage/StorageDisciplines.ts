import { DisciplineModel } from '@/domain/models/discipline-model';
import { DISCIPLINES_RECENTS_KEY } from './storage.config';

export const StorageDisciplines = {
   savedDisciplinesRecents(disciplines: DisciplineModel[]) {
      localStorage.setItem(
         DISCIPLINES_RECENTS_KEY,
         JSON.stringify(disciplines)
      );
   },

   retrieveDisciplinesRecents(): DisciplineModel[] | null {
      const disciplines = localStorage.getItem(DISCIPLINES_RECENTS_KEY);
      if (disciplines) return JSON.parse(disciplines) as DisciplineModel[];
      else return null;
   }
};
