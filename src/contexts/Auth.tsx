import { Context } from '@/@types/context';
import { SingInDTO } from '@/domain/dtos/singin-dto';
import Cookies from 'js-cookie';
import { createContext } from 'react';

type AuthContextData = {
   handleSingIn: (data: SingInDTO) => Promise<void>;
};

export const AuthContext = createContext<AuthContextData>(
   {} as AuthContextData
);

export function AuthProvider({ children }: Context) {
   function handleSingIn(data: SingInDTO) {
      return new Promise<void>((resolver, reject) => {
         setTimeout(() => {
            if (
               data.login === '0508077' &&
               data.user_type === 'Estudante' &&
               data.password === '123456'
            ) {
               resolver();
               Cookies.set('token', 'token_teste', { path: '/' });
            } else {
               reject(new Error('Usuário e/ou senha incorretos'));
            }
         }, 1000);
      });
   }

   return (
      <AuthContext.Provider value={{ handleSingIn }}>
         {children}
      </AuthContext.Provider>
   );
}
