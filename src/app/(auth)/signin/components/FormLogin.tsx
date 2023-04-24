'use client';

import { Button } from '@/components/Buttons';
import { Form } from '@/components/Form';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { singInScheme } from '../validations/scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSingIn } from '../hooks/useSingIn';

type SinInFormData = z.infer<typeof singInScheme>;

const FormLogin = () => {
   const singInForm = useForm<SinInFormData>({
      resolver: zodResolver(singInScheme)
   });
   const { handleSubmitData } = useSingIn();
   const { handleSubmit, control } = singInForm;

   return (
      <div>
         <FormProvider {...singInForm}>
            <form
               className="flex flex-col gap-3"
               onSubmit={handleSubmit(handleSubmitData)}
            >
               <Form.Field>
                  <Form.Label htmlFor="user_type">Tipo de usuário</Form.Label>
                  <Controller
                     control={control}
                     name="user_type"
                     render={({ field: { onChange, ref, value } }) => {
                        return (
                           <Form.Select
                              ref={ref}
                              value={value}
                              onValueChange={onChange}
                           />
                        );
                     }}
                  />
                  <Form.ErrorMessage field="user_type" />
               </Form.Field>

               <Form.Field>
                  <Form.Label htmlFor="login">Login</Form.Label>
                  <Form.Input type="number" name="login" maxLength={6} />
                  <Form.ErrorMessage field="login" />
               </Form.Field>

               <Form.Field className="flex flex-col mb-4">
                  <Form.Label htmlFor="password">Senha</Form.Label>
                  <Form.Input type="text" name="password" />
                  <Form.ErrorMessage field="password" />

                  <Form.Field className="flex justify-between items-center mt-2">
                     <Form.Field className="flex items-center gap-2">
                        <Form.Checkbox name="remember" />
                        <label
                           htmlFor="remember"
                           className="text-xs text-gray-500"
                        >
                           Lembrar informações
                        </label>
                     </Form.Field>
                     <button className="self-end text-xs text-green-400">
                        Esqueceu a senha?
                     </button>
                  </Form.Field>
               </Form.Field>
               <Button.Default type="submit">Entrar</Button.Default>
            </form>
         </FormProvider>
      </div>
   );
};

export default FormLogin;
