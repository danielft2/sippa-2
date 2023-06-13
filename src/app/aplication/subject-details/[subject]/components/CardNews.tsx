import { NewClassModel } from '@/domain/models/new-class-model';
import { Search } from 'lucide-react';

interface Props {
   news: NewClassModel;
}

export default function CardNews(props: Props) {
   return (
      <div
         className={`flex w-full  bg-gray-200 rounded-md flex-shrink-0 justify-between py-4 px-8`}
      >
         <div className="flex gap-3">
            <Search className="text-green-400"></Search>
            <p className="text-gray-600">{props.news.title}</p>
         </div>
         <div>
            <p className="text-gray-600">
               {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(props.news.date_of_post)
               )}
            </p>
         </div>
      </div>
   );
}
