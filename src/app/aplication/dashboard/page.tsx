import UserSummary from '@/components/UserSummary';
import LastNewsClasses from './components/LastNewsClasses';
import { DisciplineSummary } from '@/components/DisciplineSummary';
import { NewsCampus } from './components/NewsCampus';
import { NEWS_CAMPUS } from '@/mocks/news-campus.mock';

export default function Dashboard() {
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
         <LastNewsClasses />
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
