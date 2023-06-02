import { Search } from 'lucide-react';

export default function CardNews() {
   return (
      <div className="flex w-full flex-shrink-0 justify-between py-4 px-8 bg-gray-200 rounded-md">
         <div className="flex gap-3">
            <Search className="text-green-400"></Search>
            <p className="text-gray-600">Texto texto</p>
         </div>
         <div>
            <p className="text-gray-600">
               Terça feira, 09 de abril 2023, 20:34h
            </p>
         </div>
      </div>
   );
}
