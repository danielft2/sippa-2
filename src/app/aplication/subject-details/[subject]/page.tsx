'use client';
import { BellIcon, UsersIcon } from 'lucide-react';
import CardNews from './components/CardNews';
import CardPerson from './components/CardPerson';
import { SubjectDashboard } from '@/services/https/subject-dashboard';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function DisciplineDetails() {
   const { subject } = useParams();

   const { data: newsList } = useQuery({
      queryKey: ['news', subject],
      queryFn: () =>
         SubjectDashboard.getAllNewsClass(
            '"b64c8c1c-ce0e-4e84-89cd-e6dc381a1004"'
         )
   });

   const { data: participantsList } = useQuery({
      queryKey: ['participants', subject],
      queryFn: () =>
         SubjectDashboard.getAllParticipants(
            '8cda8f98-39f7-48fb-8138-fc0738982319'
         )
   });

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
               <h2 className="font-semibold text-gray-600">Últimas notícias</h2>
               <div className="flex flex-wrap mt-3">
                  {newsList ? (
                     newsList.map((news) => (
                        <div className="flex w-full mb-4" key={news.id}>
                           <CardNews news={news}></CardNews>
                        </div>
                     ))
                  ) : (
                     <></>
                  )}
               </div>
            </div>
         </article>

         <article className="col-span-5 bg-gray-50 px-9 py-6 rounded-t-md">
            <div className="flex items-center gap-2 py-3">
               <UsersIcon className="text-green-400"></UsersIcon>
               <h1 className="text-lg font-bold text-gray-800 mb-3">
                  Participantes
               </h1>
            </div>
            {participantsList ? (
               participantsList.map((participant, index) => (
                  <div className="flex" key={participant.enrollment}>
                     <CardPerson
                        backgroundDark={index % 2 === 0}
                        participant={participant}
                     ></CardPerson>
                  </div>
               ))
            ) : (
               <></>
            )}
         </article>
      </section>
   );
}
