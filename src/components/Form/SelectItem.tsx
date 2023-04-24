import { SelectItemProps } from '@radix-ui/react-select';
import * as SelectRadix from '@radix-ui/react-select';
import { Check } from 'lucide-react';

import { ReactNode } from 'react';

interface Props extends SelectItemProps {
   children: ReactNode;
}

export function SelectItem({ children, ...rest }: Props) {
   return (
      <SelectRadix.Item
         className="outline-none relative cursor-pointer text-[13px] hover:bg-gray-200 
         px-2 py-1.5 rounded-sm"
         {...rest}
      >
         <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
         <SelectRadix.ItemIndicator className="absolute right-2">
            <Check className="text-green-400" size={16} />
         </SelectRadix.ItemIndicator>
      </SelectRadix.Item>
   );
}
