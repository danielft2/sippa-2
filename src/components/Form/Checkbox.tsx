import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
   name: string;
}

export function Checkbox({ name, ...rest }: CheckboxProps) {
   const { register } = useFormContext();

   return (
      <input
         className="border-[1.5px] border-green-600 appearance-none rounded-sm w-[15px] h-[15px]
         checked:bg-green-600 before:content-[''] before:block checked:before:w-[3px] checked:before:h-2 
         checked:before:mx-1 checked:before:mt-[1.5px] checked:before:ml-[5px] checked:before:border-b-[2px]
         checked:before:border-b-white checked:before:border-r-[2px] checked:before:border-r-white 
         checked:before:rotate-45"
         id={name}
         type="checkbox"
         {...register(name)}
         {...rest}
      />
   );
}
