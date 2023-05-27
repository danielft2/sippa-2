'use client';
import Image from 'next/image';
import UserSummary from '@/components/UserSummary';
import EmptyFile from '@/assets/ilustrations/empty-file.svg';
import { Button } from '@/components/Button';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
   return (
      <div>
         <UserSummary />
         <div className="flex flex-col justify-center items-center mt-6">
            <Image
               src={EmptyFile}
               width={200}
               height={200}
               alt="Arquivos vazios."
            />
            <span className="text-md text-gray-600 mb-3">{error.message}</span>
            <Button.Root onClick={() => reset()}>
               <Button.Text>Tentar Novamente</Button.Text>
            </Button.Root>
         </div>
      </div>
   );
};

export default Error;
