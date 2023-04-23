import { z } from "zod";
import { singInScheme } from "../validations/scheme";

type SinInFormData = z.infer<typeof singInScheme>

export function useSingIn() {
   function handleSubmitData(data: SinInFormData) {
      console.log(data)
   }

   return {
      handleSubmitData
   }
}