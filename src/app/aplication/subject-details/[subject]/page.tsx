'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { BellIcon, CheckCheck, Users } from 'lucide-react';

import { SubjectDashboard } from '@/services/https/subject-dashboard';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';
import { NewClassModel } from '@/domain/models/new-class-model';

import { Header } from '@/app/aplication/subject-details/components/Header';
import ModalNews from '@/app/aplication/subject-details/components/Dashboard/ModalNews';
import CardNews from '@/app/aplication/subject-details/components/Dashboard/CardNews';
import CardPerson from '@/app/aplication/subject-details/components/Dashboard/CardPerson';

const DisciplineDetails = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedNews, setSelectedNews] = useState<NewClassModel | null>(null);

   const { subject } = useParams();
   const { classrooms } = useClassRoomRecents();

   const { data: newsList } = useQuery({
      queryKey: ['news', subject],
      queryFn: () => SubjectDashboard.getAllNewsClass(subject)
   });

   const { data: participantsList } = useQuery({
      queryKey: ['participants', subject],
      queryFn: () => SubjectDashboard.getAllParticipants(subject)
   });

   const openModal = (news: NewClassModel) => {
      setSelectedNews(news);
      setIsOpen(true);
   };

   return (
      <>
         <Header
            subtitle={classrooms[0]?.discipline.code}
            title={classrooms[0]?.discipline.name}
            description={classrooms[0]?.teacherName}
            color="#00AF8F"
         >
            <div className="text-green-400 flex items-center gap-1">
               <CheckCheck size={16} />
               <span className="text-[13px]">90% de Frequência</span>
            </div>
         </Header>
         <section className="grid grid-cols-12 gap-6 mt-4">
            <article className="col-span-12 lg:col-span-7 bg-gray-50 rounded-t-md">
               <div className="flex items-center gap-2 border-b border-b-gray-200 w-full px-8 py-4 pt-6">
                  <BellIcon className="text-green-400" size={18} />
                  <h1 className="text-[15px] font-bold text-gray-600">
                     Noticias da turma
                  </h1>
               </div>
               <div className="px-8 py-4">
                  <div className="flex flex-col mt-3">
                     {newsList?.map((news) => (
                        <div
                           className="flex w-full mb-4 cursor-pointer"
                           key={news.id}
                           onClick={() => openModal(news)}
                        >
                           <CardNews news={news}></CardNews>
                        </div>
                     ))}
                  </div>
               </div>
            </article>

            <article className="col-span-12 lg:col-span-5 bg-gray-50 rounded-t-md">
               <div className="flex justify-between items-center gap-2 px-8 py-4 pt-6 border-b border-b-gray-200">
                  <div className="flex items-center gap-2">
                     <Users className="text-green-400" size={20} />
                     <h1 className="font-bold text-gray-600 text-[15px]">
                        Participantes
                     </h1>
                  </div>
                  <div className="bg-green-400 w-7 h-7 rounded-full flex items-center justify-center">
                     <span className="text-white text-sm font-medium">
                        {participantsList?.length}
                     </span>
                  </div>
               </div>
               <div className="px-8 py-4">
                  {participantsList?.map((participant, index) => (
                     <div className="flex w-full" key={participant.enrollment}>
                        <CardPerson
                           backgroundDark={index % 2 === 0}
                           participant={participant}
                        ></CardPerson>
                     </div>
                  ))}
               </div>
            </article>
         </section>
         <ModalNews
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            news={selectedNews}
         ></ModalNews>
      </>
   );
};

export default DisciplineDetails;
