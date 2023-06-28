import { RetakeExamModel } from '@/domain/models/retake-exam-model';
import { api } from '@/libs/axios';

export const RetakeExamService = {
   async getAllRetakeExams(classroomId: string): Promise<RetakeExamModel[]> {
      //   return (
      //      await api.private.get<RetakeExamModel[]>(`retake-exam/${classroomId}`)
      //   ).data;
      // return [
      //    // {
      //    //    id: '1',
      //    //    date: new Date(),
      //    //    exam: 'ap1',
      //    //    justify: 'justificativa',
      //    //    status: 'aceita'
      //    // },
      //    // {
      //    //    id: '2',
      //    //    date: new Date(),
      //    //    exam: 'ap1=2',
      //    //    justify: 'justificativa',
      //    //    status: 'aceita'
      //    // }
      // ];
      return [];
   },

   async post(body: { name: string }) {
      return await api.private.post('retake-exam', body);
   }
};
