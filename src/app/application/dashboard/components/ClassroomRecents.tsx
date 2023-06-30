'use client';

import ClassroomSummary from '@/components/ClassroomSummary';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

const ClassroomRecents = () => {
   const { classrooms } = useClassRoomRecents();
   return (
      <>
         {classrooms.map((item) => {
            return (
               <ClassroomSummary
                  key={item.classroom.classroom_id}
                  isDashboard
                  data={item}
                  frequency={90}
               />
            );
         })}
      </>
   );
};

export default ClassroomRecents;
