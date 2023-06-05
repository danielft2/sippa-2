import Cookies from 'js-cookie';
import { TOKEN_KEY, USERLOGGED_KEY } from './storage.config';
import { StudentModel } from '@/domain/models/student-model';

export const StorageAuth = {
   savedToken(token: string) {
      Cookies.set(TOKEN_KEY, token, { path: '/', expires: 1 / 24 }); // token expires in one hour
   },

   retrieveToken(): string {
      return Cookies.get(TOKEN_KEY) ?? '';
   },

   savedUserLogged(user: StudentModel) {
      localStorage.setItem(USERLOGGED_KEY, JSON.stringify(user));
   },

   retrieveUserLogged(): StudentModel | null {
      const userLogged = localStorage.getItem(USERLOGGED_KEY);
      if (userLogged) return JSON.parse(userLogged);
      else return null;
   },

   saveTokenAndUser(token: string, user: StudentModel) {
      this.savedToken(token);
      this.savedUserLogged(user);
   },

   clearTokenAndUser() {
      Cookies.remove(TOKEN_KEY);
      localStorage.removeItem(USERLOGGED_KEY);
   }
};
