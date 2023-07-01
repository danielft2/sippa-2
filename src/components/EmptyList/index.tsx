import Image from 'next/image';
import emptyList from '@/assets/ilustrations/empty-list.svg';

export function EmptyList() {
   return (
      <div className="flex justify-center w-full h-full items-center">
         <div className="flex flex-col justify-center items-center">
            <Image
               src={emptyList}
               width={200}
               alt="Ilustração indicando que a lista está vázia"
            />
            <span className="mt-3 text-sm text-gray-600">
               Não encontramos nenhuma informação relacionada.
            </span>
         </div>
      </div>
   );
}
