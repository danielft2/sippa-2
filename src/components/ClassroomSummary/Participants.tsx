import { Poppins } from 'next/font/google';
import { ClassroomParticipant } from '@/domain/models/classroom-participant';

const poppins_md = Poppins({ weight: ['500'], subsets: ['latin'] });

import Avatar from '../Avatar';

interface ParticipantsProps {
   participant1: ClassroomParticipant;
   participant2: ClassroomParticipant;
   participant3: ClassroomParticipant;
   totalParticipantsLeft: number;
}

export function Participants({
   participant1,
   participant2,
   participant3,
   totalParticipantsLeft
}: ParticipantsProps) {
   return (
      <div className="">
         <div className="flex items-center">
            {participant1 && (
               <div className="-ml-2">
                  <Avatar
                     avatarImageUrl={participant1?.url ?? 'https://'}
                     name={participant1?.name}
                     width="26"
                     textSizeFalback="text-[8px]"
                  />
               </div>
            )}

            {participant2 && (
               <div className="-ml-2">
                  <Avatar
                     avatarImageUrl={participant2?.url ?? 'https://'}
                     name={participant2?.name}
                     width="26"
                     textSizeFalback="text-[8px]"
                  />
               </div>
            )}

            {participant3 && (
               <div className="-ml-2">
                  <Avatar
                     avatarImageUrl={participant3?.url ?? 'https://'}
                     name={participant3?.name}
                     width="26"
                     textSizeFalback="text-[8px]"
                  />
               </div>
            )}

            <span
               className={`${poppins_md.className} w-[28px] h-[28px] shadow flex items-center justify-center rounded-full 
               bg-slate-100 text-[11px] text-gray-600 -ml-2`}
            >
               +{totalParticipantsLeft}
            </span>
         </div>
      </div>
   );
}
