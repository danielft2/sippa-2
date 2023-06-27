import { CheckCheck } from 'lucide-react';
import {
   Header,
   InformationsActivity,
   ShippingDetails
} from '@/app/application/disciplinas/components';

export default function ActivityDetails() {
   return (
      <main className="space-y-4">
         <Header
            subtitle={'Pendente'}
            title={'Trabalhando com componentes'}
            description="Segunda, 09 de Abril 2023, 00:00h"
            color="#E87912"
         >
            <div className="flex items-center gap-3">
               <div className="text-green-400 flex items-center gap-1">
                  <CheckCheck size={16} />
                  <span className="text-[13px]">Frequência.</span>
               </div>
               <div className="text-gray-500 flex items-center gap-1">
                  <CheckCheck size={16} />
                  <span className="text-[13px]">{2} Pontos.</span>
               </div>
            </div>
         </Header>

         <section className="grid grid-cols-activity lg_p:grid-cols-1 gap-4">
            <InformationsActivity />
            <ShippingDetails />
         </section>
      </main>
   );
}
