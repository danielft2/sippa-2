'use client';

import { Context } from '@/@types/context';
import { AuthProvider } from './Auth';

import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/libs/react-query';

import { ClassroomRecentsProvider } from './ClassroomRecents';

import 'react-toastify/dist/ReactToastify.css';

const AppProvider = ({ children }: Context) => {
   return (
      <AuthProvider>
         <QueryClientProvider client={queryClient}>
            <ClassroomRecentsProvider>{children}</ClassroomRecentsProvider>
            <ToastContainer
               position="bottom-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               pauseOnHover
               theme="light"
            />
         </QueryClientProvider>
      </AuthProvider>
   );
};

export default AppProvider;
