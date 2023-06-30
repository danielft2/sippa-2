import { ReactNode } from 'react';

interface TableProps {
   headers: string[];
   children: ReactNode;
   center?: boolean;
}

export function Table({ headers, children, center }: TableProps) {
   return (
      <table className="table-custom table-auto w-full px-7">
         <thead className="">
            <tr className={`${center ? 'text-center' : ''}`}>
               {headers.map((header) => (
                  <th key={header}>{header}</th>
               ))}
            </tr>
         </thead>
         <tbody>{children}</tbody>
      </table>
   );
}
