import { BellIcon, UsersIcon } from 'lucide-react';
import CardNews from './components/CardNews';
import CardPerson from './components/CardPerson';

export default function DisciplineDetails() {
   return (
      <section className="grid grid-cols-12 gap-8">
         <article className="col-span-7 bg-gray-50 px-9 py-6 rounded-t-md">
            <div className="flex items-center gap-2 py-3 mb-7">
               <BellIcon className="text-green-400"></BellIcon>
               <h1 className="text-lg font-bold text-gray-800">
                  Noticias da turma
               </h1>
            </div>
            <div>
               <h2 className="font-semibold text-gray-600">
                  Notícias não lidas
               </h2>
               <div className="flex mt-3">
                  <CardNews></CardNews>
               </div>
            </div>
         </article>

         <article className="col-span-5 bg-gray-50 px-9 py-6 rounded-t-md">
            <div className="flex items-center gap-2 py-3">
               <UsersIcon className="text-green-400"></UsersIcon>
               <h1 className="text-lg font-bold text-gray-800">
                  Participantes
               </h1>
            </div>
            <div className="flex mt-3">
               <CardPerson backgroundDark={true}></CardPerson>
            </div>
         </article>
      </section>
   );
}
