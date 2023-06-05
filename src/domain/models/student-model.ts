import { UserModel } from './user-model';

export interface StudentModel extends UserModel {
   student_id: string;
   enrollment: number;
   course: string;
}
