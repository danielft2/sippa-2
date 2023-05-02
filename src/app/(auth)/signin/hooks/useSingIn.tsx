import { z } from 'zod';
import { singInScheme } from '../validations/scheme';
import { useCallback, useEffect, useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

type SinInFormData = z.infer<typeof singInScheme>;

type useSingInProps = {
   setValue: UseFormSetValue<SinInFormData>;
};

export function useSingIn({ setValue }: useSingInProps) {
   const [loading, setLoading] = useState(false);
   const { push } = useRouter();
   const { handleSingIn } = useAuth();

   const verifyIsRememberInformations = useCallback(() => {
      const credencials = localStorage.getItem('credencials-singIn');
      if (credencials) {
         const credencialsJSON = JSON.parse(credencials);
         setValue('user_type', credencialsJSON.user_type);
         setValue('login', credencialsJSON.login);
         setValue('remember_informations', credencialsJSON.remember);
      }
   }, [setValue]);

   useEffect(() => {
      verifyIsRememberInformations();
   }, [verifyIsRememberInformations]);

   async function handleSubmitData(data: SinInFormData) {
      setLoading(true);
      checkIsRememberInformations(data);

      try {
         await handleSingIn(data);
         push('/dashboard');
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   }

   function checkIsRememberInformations(data: SinInFormData) {
      if (data.remember_informations) {
         localStorage.setItem(
            'credencials-singIn',
            JSON.stringify({
               user_type: data.user_type,
               login: data.login,
               remember: data.remember_informations
            })
         );
      } else {
         localStorage.removeItem('credencials-singIn');
      }
   }

   return {
      handleSubmitData,
      loading
   };
}
