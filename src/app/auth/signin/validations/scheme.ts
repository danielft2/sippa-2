import { z } from 'zod';

export const signInScheme = z.object({
   user_type: z.coerce
      .string()
      .refine((type) => type != 'undefined', 'O tipo é obrigatório.'),
   enrollment: z
      .string()
      .nonempty('O login é obrigatório.')
      .min(6, 'Deve ter 6 caracteres.')
      .transform((value) => Number(value)),
   password: z.string().nonempty('A senha é obrigatória.'),
   remember_informations: z.boolean()
});
