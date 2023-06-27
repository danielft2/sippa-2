'use client';

import { Button } from '@/components/Button';
import { Form } from '@/components/Form';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { singInScheme } from '../validations/scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSingIn } from '../hooks/useSingIn';

type SinInFormData = z.infer<typeof singInScheme>;
const options = [{ name: 'Estudante' }, { name: 'Professor' }];

const FormLogin = () => {
   const singInForm = useForm<SinInFormData>({
      resolver: zodResolver(singInScheme)
   });
   const { handleSubmit, setValue, control } = singInForm;
   const { handleSubmitData, loading } = useSingIn({ setValue });

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
                              options={options}
                              ariaLabel="Selecionar o tipo de usário."
                           />
                        );
                     }}
                  />
                  <Form.ErrorMessage field="user_type" />
               </Form.Field>

               <Form.Field>
                  <Form.Label htmlFor="enrollment">Login</Form.Label>
                  <Form.Input type="number" name="enrollment" maxLength={6} />
                  <Form.ErrorMessage field="enrollment" />
               </Form.Field>

               <Form.Field className="flex flex-col mb-4">
                  <Form.Label htmlFor="password">Senha</Form.Label>
                  <Form.Input type="password" name="password" />
                  <Form.ErrorMessage field="password" />

                  <Form.Field className="flex justify-between items-center mt-2">
                     <Form.Field className="flex items-center gap-2">
                        <Form.Checkbox name="remember_informations" />
                        <label
                           htmlFor="remember_informations"
                           className="text-xs text-gray-500"
                        >
                           Lembrar informações
                        </label>
                     </Form.Field>
                  </Form.Field>
               </Form.Field>
               <Button.Root type="submit" isLoading={loading}>
                  <Button.Text>Entrar</Button.Text>
               </Button.Root>
            </form>
         </FormProvider>
      </div>
   );
};

export default FormLogin;
