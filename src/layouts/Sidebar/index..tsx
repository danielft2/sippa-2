'use client';

import Link from 'next/link';
import { useSidebar } from '@/hooks/useSidebar';
import { usePathname } from 'next/navigation';

import '../../styles/utils.css';
import './style.css';

interface SidebarItemProps {
   name: string;
   icon: React.ReactNode;
   pathName: string | undefined;
}

const Sidebar = () => {
   const { main } = useSidebar();
   return (
      <div className="bg-white h-14 shadow flex items-center">
         <div className="container-content">
            <div className="flex w-full gap-8">
               {main.map((menu) => (
                  <SidebarItem
                     key={menu.name}
                     name={menu.name}
                     pathName={menu.pathName}
                     icon={menu.icone}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

const SidebarItem = ({ name, pathName = '#', icon }: SidebarItemProps) => {
   const path = usePathname();

   return (
      <div className="">
         <Link
            href={pathName}
            className={`group flex items-center gap-1 ${
               path.includes(pathName) ? 'text-green-400' : 'text-gray-500'
            }`}
         >
            <span className="item">{icon}</span>
            <span className="item text-[13px]">{name}</span>
         </Link>
      </div>
   );
};

export default Sidebar;
