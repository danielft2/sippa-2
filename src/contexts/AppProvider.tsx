'use client';

import { Context } from '@/@types/context';
import { AuthProvider } from './Auth';

import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/libs/react-query';

import 'react-toastify/dist/ReactToastify.css';

const AppProvider = ({ children }: Context) => {
   return (
      <QueryClientProvider client={queryClient}>
         <AuthProvider>
            {children}
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
         </AuthProvider>
      </QueryClientProvider>
   );
};

export default AppProvider;
