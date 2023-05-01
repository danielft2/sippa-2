import { DisciplineSummary } from '@/components/DisciplineSummary';
import UserSummary from '@/components/UserSummary';

export default function Dashboard() {
   return (
      <main className="space-y-3">
         <div className="flex items-center flex-wrap gap-3">
            <div className="flex-grow-[2]">
               <UserSummary
                  name="Daniel Almeida"
                  course="Engenharia de Software"
                  avatarImageUrl="https://github.com/danielft2.png"
               />
            </div>
            <div className="flex gap-3 flex-wrap lg:flex-nowrap flex-shrink">
               <DisciplineSummary
                  variant="dashboard"
                  code="QX2772719"
                  name="SO - Sistemas Operacionais"
                  teachName="Thiago Werley"
                  participants={[]}
               />
               <DisciplineSummary
                  variant="dashboard"
                  code="QX2772719"
                  name="SO - Sistemas Operacionais"
                  teachName="Thiago Werley"
                  participants={[]}
               />
               <DisciplineSummary
                  variant="dashboard"
                  code="QX2772719"
                  name="SO - Sistemas Operacionais"
                  teachName="Thiago Werley"
                  participants={[]}
               />
            </div>
         </div>
      </main>
   );
}
