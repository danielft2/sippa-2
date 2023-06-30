import { GeneralNew } from '@/domain/models/general-news.model';
import { NewClassModel } from '@/domain/models/new-class-model';
import { api } from '@/libs/axios';

export const DashboardService = {
   async getAllNewsClass(): Promise<NewClassModel[]> {
      return (await api.private.get<NewClassModel[]>('classroom-news')).data;
   },

   async getAllGeneralNews(): Promise<GeneralNew[]> {
      return (await api.private.get<GeneralNew[]>('general-news')).data;
   }
};
