import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AxiosError } from 'axios';

import { AuthService } from '@/services/https/auth';
import { ERRORS_MESSAGES } from '@/services/https/errors';

import { AppError } from '@/utils/app-error';
import { StorageAuth } from '@/storage/StorageAuth';
import { api } from '@/libs/axios';
import { Context } from '@/@types/context';
import { SinginDTO } from '@/domain/dtos/singin-dto';
import { StudentModel } from '@/domain/models/student-model';

type AuthContextData = {
   signin: (data: SinginDTO) => Promise<void>;
   userLogged: StudentModel;
};

export const AuthContext = createContext<AuthContextData>(
   {} as AuthContextData
);

export function AuthProvider({ children }: Context) {
   const [userLogged, setUserLogged] = useState<StudentModel>(
      {} as StudentModel
   );

   const router = useRouter();

   function updateUserAndToken(token: string, user: StudentModel) {
      StorageAuth.saveTokenAndUser(token, user);
      api.private.defaults.headers.common['Authorization'] = `Bearer ${token}`;
   }

   async function signin(data: SinginDTO) {
      try {
         const response = (await AuthService.signin(data)).data;
         updateUserAndToken(response.access_token, response.returnData);
         setUserLogged(response.returnData);
         router.push('/application/dashboard');
      } catch (error) {
         if (error instanceof AxiosError && error.response?.status === 401) {
            throw new AppError(ERRORS_MESSAGES.UNAUTHORIZED, 401);
         } else {
            throw new AppError(ERRORS_MESSAGES.GENERIC, 500);
         }
      }
   }

   useEffect(() => {
      const user = StorageAuth.retrieveUserLogged();
      if (user) setUserLogged(user);
   }, []);

   return (
      <AuthContext.Provider value={{ signin, userLogged }}>
         {children}
      </AuthContext.Provider>
   );
}
