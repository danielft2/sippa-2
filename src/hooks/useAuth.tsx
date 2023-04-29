import { AuthContext } from '@/contexts/Auth';
import { useContext } from 'react';

export function useAuth() {
   const context = useContext(AuthContext);
   return context;
}
