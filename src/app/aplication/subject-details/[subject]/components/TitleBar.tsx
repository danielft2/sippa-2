import { ClipboardList } from 'lucide-react';

interface Props {
   titleValue: string;
}

export default function TitleBar(props: Props) {
   return (
      <div className="flex items-center gap-2 py-3 px-5 bg-gray-100 rounded-md mb-6">
         <ClipboardList className="text-green-400"></ClipboardList>
         <h1 className="text-2md font-bold text-gray-800">
            {props.titleValue}
         </h1>
      </div>
   );
}
