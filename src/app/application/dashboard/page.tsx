import { BellRing } from 'lucide-react';

import { UserSummary } from '@/components/UserSummary';

import DisciplinesRecents from './components/ClassroomRecents';
import LastNewsClasses from './components/LastNewsClass';
import GeneralNews from './components/GeneralNews';

export default function Dashboard() {
   return (
      <main className="space-y-6">
         <section className="grid grid-cols-dashboard gap-3 lg_p:grid-cols-1">
            <div>
               <UserSummary />
            </div>
            <div className="grid grid-cols-3 md_p:grid-cols-1 gap-3">
               <DisciplinesRecents />
            </div>
         </section>
         <section className="w-full min-h-[250px] bg-white rounded-md px-8 py-7 flex flex-col">
            <div className="flex items-center gap-2 text-sm mb-5">
               <span className="text-green-400">
                  <BellRing size={18} />
               </span>
               <span className={`text-gray-600`}>
                  Ultimas notícias das suas turmas
               </span>
            </div>
            <div>
               <LastNewsClasses />
            </div>
         </section>
         <GeneralNews />
      </main>
   );
}
