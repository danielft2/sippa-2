'use client';

import { ReactNode } from 'react';
import { Breadcrumb } from '@/components/Breadcrumb';
import BreadcrumbProvider from '@/contexts/Breadcrubm';

const Layout = ({ children }: { children: ReactNode }) => {
   return (
      <BreadcrumbProvider>
         <Breadcrumb className="mb-4" />
         {children}
      </BreadcrumbProvider>
   );
};

export default Layout;
