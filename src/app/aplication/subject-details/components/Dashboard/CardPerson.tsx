import { ParticipantModel } from '@/domain/models/participant-model';
import { UserIcon } from 'lucide-react';

interface CardPersonProps {
   participant: ParticipantModel;
   backgroundDark: boolean;
}

export default function CardPerson({
   backgroundDark,
   participant
}: CardPersonProps) {
   return (
      <div
         className={`flex w-full gap-4 rounded-md py-3 px-5 ${
            backgroundDark ? 'bg-gray-100' : ''
         }`}
      >
         <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 rounded-full bg-gray-300">
            <UserIcon className="text-gray-600"></UserIcon>
         </div>
         <div className="flex flex-wrap">
            <span className="flex justify-start items-end w-full flex-shrink-0 text-sm font-semibold text-green-600">
               {participant.course}
            </span>
            <span className="flex justify-start items-end w-full flex-shrink-0 text-sm font-semibold text-gray-700">
               {participant.name}
            </span>
         </div>
         <div className="flex ml-auto items-end text-[13px] font-semibold text-gray-600">
            {participant.enrollment}
         </div>
      </div>
   );
}
