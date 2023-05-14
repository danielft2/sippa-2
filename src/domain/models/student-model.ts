import { UserModel } from './user-model';

export interface StudentModel extends UserModel {
   enrollment: number;
   course: string;
}
