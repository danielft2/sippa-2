'use client';
import { DisciplineSummary } from "@/components/DisciplineSummary";
import UserSummary from "@/components/UserSummary";
import { DisciplineService } from "@/services/https/disciplines";
import { useQuery } from "@tanstack/react-query";

export default function Subjects() {
   const {data, status} = useQuery({
      queryKey:["discipline"],
      queryFn: DisciplineService.getAll
   })
   return <main>
   <section className="grid grid-cols-dashboard gap-3 lg_p:grid-cols-1">
         <div onClick={() => console.log(data)}>
            <UserSummary/>
         </div>
         <div className="grid grid-cols-3 md_p:grid-cols-1 gap-3">
         {
               data?.map(discipline => 
                  <DisciplineSummary
                     isDashboard={false}
                     code={discipline.code}
                     name={discipline.name}
                     teachName={discipline.teachName}
                     frequency={discipline.frequency}
                     participants={discipline.participants}
                  />
               )
            }
         </div>
      </section>

</main>;;
}
