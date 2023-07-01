import { z } from 'zod';

export const retakeExamScheme = z.object({
   exam: z.coerce
      .string()
      .refine((type) => type != 'undefined', 'A avalição é obrigatória.'),
   justify: z.string().nonempty('A justificativa é obrigatória.')
});
