import { api } from '@/libs/axios';
import { StorageAuth } from '@/storage/StorageAuth';
import { ActivitiesResponse } from './responses/activities.response';
import { ActivityModel } from '@/domain/models/activity-model';
import { ActivityTeacherModel } from '@/domain/models/activity-teach.mode';

export const ActivitiesService = {
   async getAll(): Promise<ActivitiesResponse> {
      return (
         await api.private.get<ActivitiesResponse>(
            `student-activity/student/${
               StorageAuth.retrieveUserLogged()?.student_id
            }`
         )
      ).data;
   },

   async getActivityDetails(id: string): Promise<ActivityModel> {
      return (await api.private.get<ActivityModel>(`student-activity/${id}`))
         .data;
   },

   async getFilesOfActivity(id: string): Promise<ActivityTeacherModel> {
      return (await api.private.get<ActivityTeacherModel>(`activity/${id}`))
         .data;
   },

   async sendActivityFile(id: string, file: File): Promise<ActivityModel> {
      const data = new FormData();
      data.append('file', file, file.name);

      return (await api.private.post(`student-activity/files/${id}`, data))
         .data;
   }
};
