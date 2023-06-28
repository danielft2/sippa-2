import Image from 'next/image';
import emptyList from '@/assets/ilustrations/empty-list.svg';

export function EmptyList() {
   return (
      <div>
         <Image
            src={emptyList}
            width={200}
            alt="Ilustração indicando que a lista está vázia"
         />
         <span>Não encontramos nenhuma informação relacionada.</span>
      </div>
   );
}
