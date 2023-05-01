import '../../styles/utils.css';

import Sidebar from '@/layouts/Sidebar/index.';
import Image from 'next/image';
import { Settings } from 'lucide-react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
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
                  <button>
                     <Settings size={20} color="white" />
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
}
