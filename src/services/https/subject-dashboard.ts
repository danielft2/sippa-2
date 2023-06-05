import { NewClassModel } from '@/domain/models/new-class-model';
import { ParticipantModel } from '@/domain/models/participant-model';
import { api } from '@/libs/axios';

export const SubjectDashboard = {
   async getAllNewsClass(subjectId: string): Promise<NewClassModel[]> {
      //   return (
      //      await api.private.get<NewClassModel[]>(`classroom-news/${subjectId}`)
      //   ).data;
      return [
         {
            title: 'noticia',
            description: 'descrição',
            date_of_post: new Date().toDateString(),
            classroom_id: 'a',
            id: '1'
         },
         {
            title: 'noticia',
            description: 'descrição',
            date_of_post: new Date().toDateString(),
            classroom_id: 'a',
            id: '2'
         },
         {
            title: 'noticia',
            description: 'descrição',
            date_of_post: new Date().toDateString(),
            classroom_id: 'a',
            id: '3'
         },
         {
            title: 'noticia',
            description: 'descrição',
            date_of_post: new Date().toDateString(),
            classroom_id: 'a',
            id: '4'
         }
      ];
   },
   async getAllParticipants(subjectId: string): Promise<ParticipantModel[]> {
      //   return (
      //      await api.private.get<NewClassModel[]>(`classroom-news/${subjectId}`)
      //   ).data;
      return [
         {
            name: 'Daniel',
            course: 'Engenharia de Software',
            enrollment: '508076'
         },
         {
            name: 'Daniel',
            course: 'Engenharia de Software',
            enrollment: '508077'
         },
         {
            name: 'Daniel',
            course: 'Engenharia de Software',
            enrollment: '508078'
         }
      ];
   }
};
