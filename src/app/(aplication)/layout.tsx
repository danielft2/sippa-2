'use client';

import { LogOut } from 'lucide-react';
import { ReactNode } from 'react';

import Sidebar from '@/layouts/Sidebar/index.';
import Image from 'next/image';

import '../../styles/utils.css';
import { useAuth } from '@/hooks/useAuth';

const Layout = ({ children }: { children: ReactNode }) => {
   const { signOut } = useAuth();

   return (
      <main className="flex flex-col h-screen">
         <div className="w-full">
            <div className="h-[64px] bg-green-400 flex items-center">
               <div className="container-content flex items-center justify-between">
                  <Image
                     src="/logo.png"
                     alt="Logo do sistema"
                     width={100}
                     height={100}
                  />
                  <button onClick={signOut}>
                     <LogOut size={20} color="white" />
                  </button>
               </div>
            </div>
            <Sidebar />
         </div>
         <div className="bg-[#F1F1F1] flex-1">
            <div className="container-content mx-auto py-4">{children}</div>
         </div>
      </main>
   );
};

export default Layout;
