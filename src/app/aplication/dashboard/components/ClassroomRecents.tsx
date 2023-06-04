'use client';

import ClassroomSummary from '@/components/ClassroomSummary';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

const ClassroomRecents = () => {
   const { classrooms } = useClassRoomRecents();
   return (
      <>
         {classrooms.map((discipline) => {
            return (
               <ClassroomSummary
                  key={discipline.classroom.classroom_id}
                  isDashboard
                  discipline={discipline}
                  frequency={90}
                  participants={[]}
               />
            );
         })}
      </>
   );
};

export default ClassroomRecents;
