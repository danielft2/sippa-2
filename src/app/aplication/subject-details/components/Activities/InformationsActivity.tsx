import { TextSelection } from 'lucide-react';
import { Attachament } from './Attachament';
import { TitleCard } from '../TitleCard';

export function InformationsActivity() {
   return (
      <section className="bg-white rounded-md pb-5">
         <TitleCard type="simple" title="Detalhes da Atividade">
            <TextSelection size={18} />
         </TitleCard>
         <div className="px-7 py-5 space-y-4">
            <div className="border-b border-gray-100 pb-4">
               <p className="text-sm text-gray-600">
                  O primeiro trabalho da disciplina vai ser criar uma aplicação
                  que utiliza todos os itens descritos no arquivo a seguir. Para
                  quem entregou já pelo sigga, deve entregar novamente aqui.
                  Subam um arquivo com link para o git com o código fonte.
               </p>
            </div>
            <div className="space-y-3">
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
            </div>
         </div>
      </section>
   );
}
