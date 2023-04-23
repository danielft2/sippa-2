import * as SelectRadix from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import React, { forwardRef, Ref } from 'react';
import { useFormContext } from 'react-hook-form';

import { SelectItem } from './SelectItem';

interface SelectProps {
   value: any;
   onValueChange: any
}

export const Select = forwardRef(({ value, onValueChange }: SelectProps, forwardedRef: any) => {
   const { register } = useFormContext();

   return (
      <SelectRadix.Root value={value} onValueChange={onValueChange}>
         <SelectRadix.Trigger
            className="bg-gray-200 h-10 rounded justify-between flex items-center px-4 text-[13px] text-gray-600
            focus:outline-green-400 focus:bg-green-100"
            ref={forwardedRef}
         >
            <SelectRadix.Value asChild>
               <span>{value ? value : 'Selecione'}</span>
            </SelectRadix.Value>
            <SelectRadix.Icon >
               <ChevronDown size={16} />
            </SelectRadix.Icon>
         </SelectRadix.Trigger>

         <SelectRadix.Portal>
            <SelectRadix.Content 
               className="bg-gray-50 right-0 left-0 shadow rounded-b w-[var(--radix-select-trigger-width)]" 
               position="popper" sideOffset={-6}
            >
               <SelectRadix.Viewport className="px-2 py-3 flex flex-col gap-y-2">
                  <SelectItem value='item1'>Item1</SelectItem>
                  <SelectItem value='item2'>Item2</SelectItem>
               </SelectRadix.Viewport>
            </SelectRadix.Content>
         </SelectRadix.Portal>
      </SelectRadix.Root>
   )
})


 