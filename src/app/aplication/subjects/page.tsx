import { SubjectService } from '@/services/https/subjects';
import { DisciplineModel } from '@/domain/models/discipline-model';
import DisciplineSummary from '@/components/DisciplineSummary';
import UserSummary from '@/components/UserSummary';

export default async function Subjects() {
   const disciplines =
      (await SubjectService.getAllDiciplines()) as DisciplineModel[];

   return (
      <main>
         <section className="">
            <div>
               <UserSummary />
            </div>
            <div className="grid grid-cols-3 md_p:grid-cols-1 gap-3 mt-6">
               {disciplines?.map((classroom) => (
                  <DisciplineSummary
                     key={classroom.code}
                     isDashboard={false}
                     id={classroom.id}
                     code={classroom.code}
                     name={classroom.name}
                     teachName={
                        classroom.teachName
                           ? classroom.teachName
                           : 'Nome do professor'
                     }
                     frequency={90}
                     participants={[]}
                  />
               ))}
            </div>
         </section>
      </main>
   );
}
