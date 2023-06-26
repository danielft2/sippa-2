import * as SelectRadix from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import React, { forwardRef } from 'react';

import { SelectItem } from './SelectItem';

type SelectOption = {
   name: string;
};

interface SelectProps {
   value: string;
   options: SelectOption[];
   ariaLabel: string;
   onValueChange: (...event: any[]) => void;
}

export const Select = forwardRef(
   (
      { value, options, ariaLabel, onValueChange }: SelectProps,
      forwardedRef: any
   ) => {
      return (
         <SelectRadix.Root value={value} onValueChange={onValueChange}>
            <SelectRadix.Trigger
               aria-label={ariaLabel}
               className="bg-gray-200 h-10 rounded justify-between flex items-center px-4 text-sm text-gray-600
               focus:outline-green-400 focus:bg-green-100"
               ref={forwardedRef}
            >
               <SelectRadix.Value asChild>
                  <span>{value ? value : 'Selecione'}</span>
               </SelectRadix.Value>
               <SelectRadix.Icon>
                  <ChevronDown size={16} />
               </SelectRadix.Icon>
            </SelectRadix.Trigger>

            <SelectRadix.Portal>
               <SelectRadix.Content
                  className="bg-gray-50 right-0 left-0 shadow rounded-b w-[var(--radix-select-trigger-width)]"
                  position="popper"
                  sideOffset={-6}
               >
                  <SelectRadix.Viewport className="px-2 py-3 flex flex-col gap-y-2">
                     {options.map((option) => (
                        <SelectItem key={option.name} value={option.name}>
                           {option.name}
                        </SelectItem>
                     ))}
                  </SelectRadix.Viewport>
               </SelectRadix.Content>
            </SelectRadix.Portal>
         </SelectRadix.Root>
      );
   }
);
