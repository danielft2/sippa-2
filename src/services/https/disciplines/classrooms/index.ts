import { api } from '@/libs/axios';

export const ClassroomService = {
   getAll() {
      const jsonUser = localStorage.getItem('user_logged');
      if (jsonUser) {
         const user = JSON.parse(jsonUser);
         const data = api.private
            .get<any[]>(`classroom/${user.student_id}`)
            .then((response) => response.data);
         return data;
      }
   }
};
