import { api } from '@/libs/axios';

export const ClassroomService = {
   getAll() {
      const jsonUser = localStorage.getItem('user_logged');
      if (jsonUser) {
         const user = JSON.parse(jsonUser);
      }
   }
};
