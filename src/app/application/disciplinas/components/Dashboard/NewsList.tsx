import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { BellIcon } from 'lucide-react';

import { SubjectDashboard } from '@/services/https/subject-dashboard';
import { NewClassModel } from '@/domain/models/new-class-model';
import { EmptyList } from '@/components/EmptyList';
import SearchData from '@/components/SearchData';
import ResponseState from '@/components/ResponseState';
import useErrorsTratament from '@/hooks/useErrorsTratament';

import CardNews from './CardNews';
import ModalNews from './ModalNews';
import { TitleCard } from '..';

const NewsList = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedNews, setSelectedNews] = useState<NewClassModel | null>(null);
   const { subject } = useParams();

   const {
      data: newsList,
      isLoading,
      isSuccess,
      isError,
      error
   } = useQuery({
      queryKey: ['news', subject],
      queryFn: () => SubjectDashboard.getAllNewsClass(subject)
   });

   const { getErrorComponent } = useErrorsTratament({ error });

   const openModal = (news: NewClassModel) => {
      setSelectedNews(news);
      setIsOpen(true);
   };

   return (
      <>
         <article
            className="flex flex-col bg-white rounded-md shadow"
            aria-label="Listagem de noticias."
         >
            <TitleCard title="Noticias da turma" type="simple">
               <BellIcon className="text-green-600" size={18} />
            </TitleCard>
            <div className="px-8 py-4 flex-1">
               {isSuccess && newsList ? (
                  <div className="flex flex-col mt-3">
                     {newsList?.map((news) => (
                        <div
                           className="flex w-full mb-4 cursor-pointer"
                           key={news.id}
                           onClick={() => openModal(news)}
                        >
                           <CardNews news={news}></CardNews>
                        </div>
                     ))}
                  </div>
               ) : (
                  <ResponseState
                     loading={<SearchData />}
                     error={getErrorComponent()}
                     empty={<EmptyList />}
                     isLoading={isLoading}
                     isError={isError}
                     isEmpty={!newsList}
                  />
               )}
            </div>
         </article>
         <ModalNews
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            news={selectedNews}
         ></ModalNews>
      </>
   );
};

export default NewsList;
