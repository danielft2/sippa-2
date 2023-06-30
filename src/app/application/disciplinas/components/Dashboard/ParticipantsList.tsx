'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { Users } from 'lucide-react';

import { SubjectDashboard } from '@/services/https/subject-dashboard';
import { EmptyList } from '@/components/EmptyList';
import { ResponseState } from '@/components/ResponseState';
import { useErrorsTratament } from '@/hooks/useErrorsTratament';

import { SkeletonParticipants } from './SkeletonParticipant';
import { TitleCard } from '..';
import CardPerson from './CardPerson';

const ParticipantsList = () => {
   const { subject } = useParams();

   const { data, isLoading, isSuccess, isError, error } = useQuery({
      queryKey: ['participants', subject],
      queryFn: () => SubjectDashboard.getAllParticipants(subject)
   });

   const { getErrorComponent } = useErrorsTratament({ error });

   return (
      <article
         className="bg-white rounded-md shadow"
         aria-label="Lista de participantes."
      >
         <TitleCard title="Participantes" type="simple">
            <Users className="text-green-600" size={20} />
         </TitleCard>
         <div className="px-8 py-4">
            {isSuccess && data && data.length > 0 ? (
               data.map((participant, index) => (
                  <div className="flex w-full" key={participant.enrollment}>
                     <CardPerson
                        backgroundDark={index % 2 === 0}
                        participant={participant}
                     />
                  </div>
               ))
            ) : (
               <ResponseState
                  loading={<SkeletonParticipants />}
                  error={getErrorComponent()}
                  empty={<EmptyList />}
                  isLoading={isLoading}
                  isError={isError}
                  isEmpty={data?.length == 0}
               />
            )}
         </div>
      </article>
   );
};

export default ParticipantsList;
