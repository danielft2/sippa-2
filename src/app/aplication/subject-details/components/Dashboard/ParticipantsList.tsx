'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Users } from 'lucide-react';

import { SubjectDashboard } from '@/services/https/subject-dashboard';

import { SkeletonParticipants } from './SkeletonParticipants';
import CardPerson from './CardPerson';

const ParticipantsList = () => {
   const { subject } = useParams();

   const { data: participantsList, isLoading } = useQuery({
      queryKey: ['participants', subject],
      queryFn: () => SubjectDashboard.getAllParticipants(subject)
   });

   return (
      <article
         className="bg-white rounded-md shadow-sm"
         aria-label="Lista de participantes."
      >
         <div className="flex justify-between items-center gap-2 px-8 py-4 pt-6 border-b border-b-gray-200">
            <div className="flex items-center gap-2">
               <Users className="text-green-400" size={20} />
               <h1 className="font-bold text-gray-600 text-[15px]">
                  Participantes
               </h1>
            </div>
            <div className="bg-green-400 w-7 h-7 rounded-full flex items-center justify-center">
               <span className="text-white text-sm font-medium">
                  {participantsList?.length ? participantsList.length : 0}
               </span>
            </div>
         </div>
         <div className="px-8 py-4">
            {isLoading ? (
               <div className="space-y-2">
                  <SkeletonParticipants />
                  <SkeletonParticipants />
                  <SkeletonParticipants />
                  <SkeletonParticipants />
                  <SkeletonParticipants />
               </div>
            ) : (
               participantsList?.map((participant, index) => (
                  <div className="flex w-full" key={participant.enrollment}>
                     <CardPerson
                        backgroundDark={index % 2 === 0}
                        participant={participant}
                     ></CardPerson>
                  </div>
               ))
            )}
         </div>
      </article>
   );
};

export default ParticipantsList;
