import { ClassroomParticipant } from './classroom-participant';
import { DisciplineModel } from './discipline-model';

export interface ClassroomModel {
   classroom: {
      classroom_id: string;
      student_id: string;
   };
   discipline: DisciplineModel;
   threeFirstStudents: {
      student1: ClassroomParticipant;
      student2: ClassroomParticipant;
      student3: ClassroomParticipant;
   };
   totalStudentsLeft: number;
   teacherName: string;
}
