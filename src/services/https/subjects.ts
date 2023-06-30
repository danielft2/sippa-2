import { ClassroomModel } from '@/domain/models/classroom-student-model';
import { api } from '@/libs/axios';
import { StorageAuth } from '@/storage/StorageAuth';
import { ActivitiesResponse } from './responses/activities.response';

export const SubjectService = {
   async getAllDiciplines(): Promise<ClassroomModel[]> {
      return (
         await api.private.get<ClassroomModel[]>(
            `/classroom/student/${StorageAuth.retrieveUserLogged()?.student_id}`
         )
      ).data;
   },

   async getAllNotesByClassroom(): Promise<ActivitiesResponse> {
      return (
         await api.private.get<ActivitiesResponse>(
            `/student-activity/student/${
               StorageAuth.retrieveUserLogged()?.student_id
            }`
         )
      ).data;
   }
};
