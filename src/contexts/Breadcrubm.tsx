import { Context } from '@/@types/context';
import { createContext, useCallback, useState } from 'react';

interface BreadcrubmItem {
   name: string;
   link: string;
   isActive?: boolean;
}

interface BreadcrumbContextData {
   links: BreadcrubmItem[];
   addNewItem: (item: BreadcrubmItem) => void;
}

export const BreadcrumbContext = createContext<BreadcrumbContextData>(
   {} as BreadcrumbContextData
);

const BreadcrumbProvider = ({ children }: Context) => {
   const [links, setLinks] = useState<BreadcrubmItem[]>([]);

   const addNewItem = useCallback(
      (item: BreadcrubmItem) => setLinks((prev) => [...prev, item]),
      []
   );

   return (
      <BreadcrumbContext.Provider value={{ links, addNewItem }}>
         {children}
      </BreadcrumbContext.Provider>
   );
};

export default BreadcrumbProvider;
