import { AppError } from '@/utils/AppError';
import { ERRORS_MESSAGES } from './errors';
import { cookies } from 'next/headers';
import { TOKEN_KEY } from '@/storage/storage.config';

export const SubjectService = {
   async getAllDiciplines() {
      const response = await fetch(
         `${process.env.NEXT_PUBLIC_API_BASE_URL}/discipline`,
         {
            next: {
               revalidate: 60 * 60 * 24 * 7
            },
            headers: {
               Authorization: `Bearer ${cookies().get(TOKEN_KEY)?.value}`
            }
         }
      );

      if (!response.ok) throw new AppError(ERRORS_MESSAGES.GENERIC);
      return response.json();
   }
};
