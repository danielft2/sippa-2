import { ReactNode } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const Layout = ({ children }: { children: ReactNode }) => {
   return (
      <>
         <Breadcrumb className="mb-4" />
         {children}
      </>
   );
};

export default Layout;
