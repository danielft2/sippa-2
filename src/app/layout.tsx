import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import AppProvider from '@/contexts/AppProvider';

import './globals.css';

const poppins = Poppins({
   style: 'normal',
   weight: '400',
   subsets: ['latin']
});

export const metadata = {
   title: 'SIPPA-2',
   description: 'Redesign do Sistema de Presencas e Planos de Aulas'
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="pt-br">
         <body className={poppins.className}>
            <AppProvider>{children}</AppProvider>
         </body>
      </html>
   );
}
