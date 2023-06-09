import { ClassroomModel } from '@/domain/models/classroom-student-model';
import { api } from '@/libs/axios';
import { StorageAuth } from '@/storage/StorageAuth';
import { NotesResponse } from './responses/notes.response';

export const SubjectService = {
   async getAllDiciplines(): Promise<ClassroomModel[]> {
      return (
         await api.private.get<ClassroomModel[]>(
            `/classroom/student/${StorageAuth.retrieveUserLogged()?.student_id}`
         )
      ).data;
   },

   async getAllNotesByClassroom(id_classroom: string): Promise<NotesResponse> {
      return (
         await api.private.get<NotesResponse>(
            `/student-activity/student/${
               StorageAuth.retrieveUserLogged()?.student_id
            }/${id_classroom}`
         )
      ).data;
   }
};
