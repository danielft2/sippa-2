import { DisciplineModel } from './discipline-model';

export interface ClassroomModel {
   classroom: {
      classroom_id: string;
      student_id: string;
   };
   discipline: DisciplineModel;
   teacherName: string;
}
