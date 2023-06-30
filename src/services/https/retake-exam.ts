import { RetakeExamModel } from '@/domain/models/retake-exam-model';
import { api } from '@/libs/axios';
import { ExamResponse } from './responses/ExamsResponse';
import { RetakeExamSolicitation } from '@/domain/models/retake-exam-solicitation';

export const RetakeExamService = {
   async getAllRetakeExams(
      classroomId: string,
      studentId: string
   ): Promise<RetakeExamModel[]> {
      return (
         await api.private.get<RetakeExamModel[]>(
            `second-call/exams/${classroomId}/${studentId}`
         )
      ).data;
   },

   async post(retakeExam: RetakeExamSolicitation) {
      return await api.private.post('second-call', retakeExam);
   },

   async gellAllExams(classroomId: string, studentId: string) {
      return (
         await api.private.get<ExamResponse[]>(
            `second-call/${classroomId}/${studentId}`
         )
      ).data;
   }
};
