import { BreadcrumbContext } from '@/contexts/Breadcrubm';
import { useContext } from 'react';

export function useBreadcrumb() {
   const context = useContext(BreadcrumbContext);
   return context;
}
