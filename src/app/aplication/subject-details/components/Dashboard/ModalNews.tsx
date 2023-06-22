import { Button } from '@/components/Button';
import { NewClassModel } from '@/domain/models/new-class-model';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   news: NewClassModel | null;
}

export default function ModalNews(modalProps: ModalProps) {
   if (!modalProps.isOpen || !modalProps.news) {
      return null;
   }

   return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
         <div className="min-w-[400px] bg-white rounded-md shadow-md">
            <div className="flex p-4">
               <h2 className="text-xl font-semibold text-gray-800">
                  {modalProps.news.title}
               </h2>
            </div>
            <div className="h-[1px] bg-gray-700"></div>
            <div className="flex flex-wrap p-4">
               <div className="mb-2 flex-grow w-full">
                  <p>
                     <strong>Postado em: </strong>
                     {new Date(modalProps.news.date_of_post).toLocaleDateString(
                        'pt-BR'
                     )}
                  </p>
               </div>
               <div className="flex-grow">
                  <p className="text-gray-800">{modalProps.news.description}</p>
               </div>
            </div>
            <div className="flex p-4">
               <Button.Root onClick={modalProps.onClose} type="button">
                  <Button.Text>Fechar</Button.Text>
               </Button.Root>
            </div>
         </div>
      </div>
   );
}
