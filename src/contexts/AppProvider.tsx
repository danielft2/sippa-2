'use client';

import { Context } from '@/@types/context';
import { AuthProvider } from './Auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppProvider = ({ children }: Context) => {
   return (
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
   );
};

export default AppProvider;
