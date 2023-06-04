import { ClassroomModel } from '@/domain/models/classroom-student-model';
import { api } from '@/libs/axios';
import { StorageAuth } from '@/storage/StorageAuth';

export const SubjectService = {
   async getAllDiciplines(): Promise<ClassroomModel[]> {
      return (
         await api.private.get<ClassroomModel[]>(
            `/classroom/student/${StorageAuth.retrieveUserLogged()?.student_id}`
         )
      ).data;
   }
};
