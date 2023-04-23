import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string
}

export function Input({ name, ...rest }: InputProps) {
   const { register } = useFormContext();

   return (
      <input 
         className="bg-gray-200 h-10 px-4 text-[13px] text-gray-700 rounded 
         focus:outline-green-400 focus:bg-green-100 transition-all"
         id={name}
         {...register(name)}
         {...rest} 
      />
   )
}