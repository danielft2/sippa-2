import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { LogOut } from 'lucide-react';

import Sidebar from '@/layouts/Sidebar/index.';

import '@/styles/utils.css';
import Breadcrumb from '@/components/Breadcrumb';

export function Layout({ children }: { children: ReactNode }) {
   return (
      <main className="flex flex-col h-screen">
         <div className="w-full">
            <div className="h-[64px] bg-green-400 flex items-center">
               <div className="container-content flex items-center justify-between">
                  <Link href="application/dashboard">
                     <Image
                        src="/logo.png"
                        alt="Logo do sistema"
                        width={100}
                        height={100}
                     />
                  </Link>
                  <a
                     href="/api/auth/logout"
                     aria-label="Sair e voltar para a página de login."
                  >
                     <LogOut size={20} color="white" />
                  </a>
               </div>
            </div>
            <Sidebar />
         </div>
         <div className="bg-[#F1F1F1] flex-1">
            <Breadcrumb className="container-content mx-auto py-4" />
            <div className="container-content mx-auto py-4 pt-0">
               {children}
            </div>
         </div>
      </main>
   );
}

export default Layout;
