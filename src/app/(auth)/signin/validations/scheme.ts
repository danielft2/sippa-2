import { z } from "zod";

export const singInScheme = z.object({
   user_type: z.coerce.string().refine(type => type != "undefined", "O tipo é obrigátorio."),
   login: z.string().min(6, "O login é obrigátorio."),
   password: z.string().nonempty("A senha é obrigátoria.")
})