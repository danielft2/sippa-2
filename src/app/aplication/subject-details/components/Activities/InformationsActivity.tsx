import { Poppins } from 'next/font/google';
import { TextSelection } from 'lucide-react';
import { Attachament } from './Attachament';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

export function InformationsActivity() {
   return (
      <section className="bg-white rounded-md pb-5">
         <div className="border-b border-gray-200">
            <div className="flex items-center gap-1 px-7 py-5 pb-4">
               <span className="text-green-400">
                  <TextSelection size={18} />
               </span>
               <h1 className={`${poppins_md.className} text-sm text-gray-600`}>
                  Detalhes da atividade
               </h1>
            </div>
         </div>
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
