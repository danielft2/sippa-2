'use client';

import { GenericError } from '@/errors/GenericError';
import { AppError } from '@/utils/app-error';

interface useErrorsTratamentProps {
   error: AppError | any;
}

export function useErrorsTratament({ error }: useErrorsTratamentProps) {
   function getErrorComponent() {
      const isAppError = error instanceof AppError;
      if (isAppError && error.getStatus() != 401) {
         return <GenericError />;
      }
   }

   return {
      getErrorComponent
   };
}
