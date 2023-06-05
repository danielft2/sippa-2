import { ReactNode } from 'react';

interface TableProps {
   headers: string[];
   children: ReactNode;
}

export function Table({ headers, children }: TableProps) {
   return (
      <table className="table-custom table-auto w-full px-7">
         <thead className="">
            <tr>
               {headers.map((header) => (
                  <th key={header}>{header}</th>
               ))}
            </tr>
         </thead>
         <tbody>{children}</tbody>
      </table>
   );
}
