import { api } from '@/libs/axios';
import { DisciplineModel } from '@/domain/models/discipline-model';

export const SubjectClientService = {
   async getDiscipline(id: string): Promise<DisciplineModel> {
      return (await api.private.get<DisciplineModel>(`/discipline/${id}`)).data;
   }
};
