'use client';
import { BellIcon, CheckCheck, UsersIcon } from 'lucide-react';
import CardNews from './components/CardNews';
import CardPerson from './components/CardPerson';
import { SubjectDashboard } from '@/services/https/subject-dashboard';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { Header } from '../components/Header';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { useState } from 'react';
import { NewClassModel } from '@/domain/models/new-class-model';
import ModalNews from './components/ModalNews';

const DisciplineDetails = () => {
   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();
   const { discipline, teacherName } = classrooms[0];

   const { data: newsList } = useQuery({
      queryKey: ['news', subject],
      queryFn: () =>
         SubjectDashboard.getAllNewsClass(classrooms[0].classroom.classroom_id)
   });

   const { data: participantsList } = useQuery({
      queryKey: ['participants', subject],
      queryFn: () =>
         SubjectDashboard.getAllParticipants(
            classrooms[0].classroom.classroom_id
         )
   });

   const [isOpen, setIsOpen] = useState(false);
   const [selectedNews, setSelectedNews] = useState<NewClassModel | null>(null);
   const openModal = (news: NewClassModel) => {
      setSelectedNews(news);
      setIsOpen(true);
   };

   const closeModal = () => {
      setIsOpen(false);
   };

   return (
      <>
         <Header
            subtitle={discipline.code}
            title={discipline.name}
            description={teacherName}
            color="#00AF8F"
         >
            <div className="text-green-400 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <section className="grid grid-cols-12 gap-8 mt-4">
            <article className="col-span-12 lg:col-span-7 bg-gray-50 px-9 py-6 rounded-t-md">
               <div className="flex items-center gap-2 py-3 mb-7">
                  <BellIcon className="text-green-400"></BellIcon>
                  <h1 className="text-lg font-bold text-gray-800">
                     Noticias da turma
                  </h1>
               </div>
               <div>
                  <h2 className="font-semibold text-gray-600">
                     Últimas notícias
                  </h2>
                  <div className="flex flex-wrap mt-3">
                     {newsList ? (
                        newsList.map((news) => (
                           <div
                              className="flex w-full mb-4 cursor-pointer"
                              key={news.id}
                              onClick={() => openModal(news)}
                           >
                              <CardNews news={news}></CardNews>
                           </div>
                        ))
                     ) : (
                        <></>
                     )}
                  </div>
               </div>
            </article>

            <article className="col-span-12 lg:col-span-5 bg-gray-50 px-9 py-6 rounded-t-md">
               <div className="flex items-center gap-2 py-3 mb-3">
                  <UsersIcon className="text-green-400"></UsersIcon>
                  <h1 className="text-lg font-bold text-gray-800">
                     Participantes
                  </h1>
               </div>
               {participantsList ? (
                  participantsList.map((participant, index) => (
                     <div className="flex w-full" key={participant.enrollment}>
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
         <ModalNews
            isOpen={isOpen}
            onClose={closeModal}
            news={selectedNews}
         ></ModalNews>
      </>
   );
};

export default DisciplineDetails;
