import { ClassroomPlan } from '@/domain/models/plan-model';

export const ClassroomPlanService = {
   async getAllClassroomPlans(classroomId: string): Promise<ClassroomPlan[]> {
      //   return (
      //      await api.private.get<ClassroomPlan[]>(`classroom-plan/${classroomId}`)
      //   ).data;
      return [
         {
            id: '1',
            date: new Date(),
            plan: 'plano de aula',
            diary: 'diário de aula'
         },
         {
            id: '2',
            date: new Date(),
            plan: 'plano de aula',
            diary: 'diário de aula'
         },
         {
            id: '3',
            date: new Date(),
            plan: 'plano de aula',
            diary: 'diário de aula'
         },
         {
            id: '4',
            date: new Date(),
            plan: 'plano de aula',
            diary: 'diário de aula'
         }
      ];
   }
};
