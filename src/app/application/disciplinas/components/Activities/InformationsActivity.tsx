import { TextSelection } from 'lucide-react';
import { TitleCard } from '@/components/TitleCard';
import { SearchData } from '@/components/SearchData';
import { GenericError } from '@/errors/GenericError';

interface InformationsActivityProps {
   description: string;
   files: any[];
   isLoading?: boolean;
   isError?: boolean;
}

export function InformationsActivity({
   description = '',
   isLoading = false,
   isError = false
}: InformationsActivityProps) {
   return (
      <section className="bg-white rounded-md pb-5">
         <TitleCard type="simple" title="Detalhes da Atividade">
            <TextSelection size={18} />
         </TitleCard>
         <div className="p-6 space-y-4">
            {isLoading ? (
               <SearchData />
            ) : isError ? (
               <GenericError />
            ) : (
               <>
                  <div className="border-b border-gray-100 pb-4">
                     <p className="text-sm text-gray-600">{description}</p>
                  </div>
                  {/* <div className="space-y-3">
                     <Attachament
                        name="TrabalhoComponentesBasicosAndroid.pdf"
                        urlFileDownload="http://sd"
                        type="file"
                     />
                     <Attachament
                        name="Arquitetura no android"
                        url="https://www.techyourchance.com/mvc-android-1/"
                        type="link"
                     />
                  </div> */}
               </>
            )}
         </div>
      </section>
   );
}
