'use client';

import { ClassroomCard } from '@/components/ClassroomCard';
import { useClassRoomRecents } from '@/hooks/useClassroomsRecents';

const ClassroomRecents = () => {
   const { classrooms } = useClassRoomRecents();
   return (
      <>
         {classrooms.map((item) => {
            return (
               <ClassroomCard
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
