import { UserIcon } from 'lucide-react';

interface Props {
   backgroundDark: boolean;
}

export default function CardPerson(props: Props) {
   return (
      <div
         className={`flex gap-2 rounded-md py-3 px-5 ${
            props.backgroundDark ? 'bg-gray-200' : ''
         }`}
      >
         <div className="flex flex-shrink-0 justify-center items-center w-12 h-12 rounded-full bg-gray-300">
            <UserIcon className="text-gray-600"></UserIcon>
         </div>
         <div className="flex flex-wrap">
            <span className="flex justify-start items-end w-full flex-shrink-0 text-sm font-semibold text-green-400">
               Engenharia de software
            </span>
            <span className="flex justify-start items-end w-full flex-shrink-0 font-semibold text-gray-700">
               Daniel Almeida de Freitas
            </span>
         </div>
         <div className="flex justify-self-end">
            <span className="flex items-end text-sm font-bold text-gray-600">
               508077
            </span>
         </div>
      </div>
   );
}
