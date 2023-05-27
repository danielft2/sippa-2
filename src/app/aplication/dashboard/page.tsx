import UserSummary from '@/components/UserSummary';
import LastNewsClasses from './components/LastNewsClass';
import { DisciplineSummary } from '@/components/DisciplineSummary';
import { NewsCampus } from './components/NewsCampus';
import { NEWS_CAMPUS } from '@/mocks/news-campus.mock';
import { BellRing } from 'lucide-react';

export default async function Dashboard() {
   return (
      <main className="space-y-6">
         <section className="grid grid-cols-dashboard gap-3 lg_p:grid-cols-1">
            <div>
               <UserSummary />
            </div>
            <div className="grid grid-cols-3 md_p:grid-cols-1 gap-3">
               <DisciplineSummary
                  isDashboard
                  code="QX2772719"
                  name="Desenvolvimento de Softwares para Aplicativos Móveis"
                  teachName="Marcio Espíndola"
                  frequency={90}
                  participants={[]}
               />
               <DisciplineSummary
                  isDashboard
                  code="QX2772719"
                  name="SO - Sistemas Operacionais"
                  teachName="Thiago Werley"
                  frequency={97}
                  participants={[]}
               />
               <DisciplineSummary
                  isDashboard
                  code="QX2772719"
                  name="Projeto Integrado em Enegenharia de Software II"
                  teachName="Thiago Werley"
                  frequency={56}
                  participants={[]}
               />
            </div>
         </section>
         <section className="w-full bg-white rounded-md px-8 py-7">
            <div className="flex items-center gap-2 text-sm mb-5">
               <span className="text-green-400">
                  <BellRing size={18} />
               </span>
               <span className={`text-gray-600`}>
                  Ultimas notícias das suas turmas
               </span>
            </div>
            <LastNewsClasses />
         </section>
         <div className="flex items-center gap-4 flex-wrap">
            {NEWS_CAMPUS.map((news) => (
               <NewsCampus
                  key={news.id}
                  title={news.title}
                  description={news.descrption}
                  linkUrlNews={news.linkUrlNews}
                  linkUrlImage={news.linkUrlImage}
               />
            ))}
         </div>
      </main>
   );
}
