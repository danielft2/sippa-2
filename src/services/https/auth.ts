import { SinginDTO } from '@/domain/dtos/singin-dto';
import { api } from '@/libs/axios';
import { SigninResponse } from './responses/signin.response';

export const AuthService = {
   signin(data: SinginDTO) {
      return api.public.post<SigninResponse>('login', data);
   }
};
