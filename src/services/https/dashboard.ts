import { NewClassModel } from '@/domain/models/new-class-model';
import { api } from '@/libs/axios';

export const DashboardService = {
   async getAllNewsClass(): Promise<NewClassModel[]> {
      return (await api.private.get<NewClassModel[]>('classroom-news')).data;
   }
};
