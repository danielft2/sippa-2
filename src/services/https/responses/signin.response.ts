import { StudentModel } from '@/domain/models/student-model';

export interface SigninResponse {
   returnData: StudentModel;
   access_token: string;
}
