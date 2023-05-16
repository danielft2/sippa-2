import { api } from '@/libs/axios';
import { DisciplineModel } from '@/domain/models/discipline-model';

export const DisciplineService = {
   getAll() {
      const data = api.private
         .get<DisciplineModel[]>('discipline')
         .then((response) => response.data);
      return data;
   }
};
