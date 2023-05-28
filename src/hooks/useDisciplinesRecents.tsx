import { useContext } from 'react';
import { DiciplinesRecentsContext } from '@/contexts/DiciplinesRecents';

export function useDisciplineRecents() {
   const context = useContext(DiciplinesRecentsContext);
   return context;
}
