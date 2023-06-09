import { ClassroomPlan } from '@/domain/models/plan-model';
import { api } from '@/libs/axios';

export const ClassroomPlanService = {
   async getAllClassroomPlans(classroomId: string): Promise<ClassroomPlan[]> {
      return (
         await api.private.get<ClassroomPlan[]>(`classroom/plan/${classroomId}`)
      ).data;
   }
};
