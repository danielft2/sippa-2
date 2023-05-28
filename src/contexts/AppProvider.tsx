'use client';

import { Context } from '@/@types/context';
import { AuthProvider } from './Auth';

import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/libs/react-query';

import 'react-toastify/dist/ReactToastify.css';
import { DisciplineRecentsProvider } from './DiciplinesRecents';

const AppProvider = ({ children }: Context) => {
   return (
      <AuthProvider>
         <QueryClientProvider client={queryClient}>
            <DisciplineRecentsProvider>{children}</DisciplineRecentsProvider>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
            />
         </QueryClientProvider>
      </AuthProvider>
   );
};

export default AppProvider;
