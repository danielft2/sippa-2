import { NewClassModel } from '@/domain/models/new-class-model';
import { ParticipantModel } from '@/domain/models/participant-model';
import { api } from '@/libs/axios';

export const SubjectDashboard = {
   async getAllNewsClass(classroomId: string): Promise<NewClassModel[]> {
      return (
         await api.private.get<NewClassModel[]>(`classroom-news/${classroomId}`)
      ).data;
   },
   async getAllParticipants(classroomId: string): Promise<ParticipantModel[]> {
      return (
         await api.private.get<ParticipantModel[]>(`classroom/${classroomId}`)
      ).data;
   }
};
