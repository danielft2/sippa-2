import { ClassroomsRecentsContext } from '@/contexts/ClassroomRecents';
import { useContext } from 'react';

export function useClassRoomRecents() {
   const context = useContext(ClassroomsRecentsContext);
   return context;
}
