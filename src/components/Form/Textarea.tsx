import { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   name: string;
}

export function Textarea({ name, ...rest }: TextareaProps) {
   const { register } = useFormContext();

   return (
      <textarea
         className="bg-gray-200 h-20 px-4 py-3 text-[13px] text-gray-700 rounded 
      focus:outline-green-400 focus:bg-green-100 transition-all"
         {...rest}
         {...register(name)}
      ></textarea>
   );
}
