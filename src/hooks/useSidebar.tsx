import {
   BookMarked,
   Calculator,
   CalendarRange,
   CheckCheck,
   FileText,
   Home,
   ListChecks,
   MessageSquare
} from 'lucide-react';

export function useSidebar() {
   const config = {
      main: [
         {
            name: 'ínicio',
            pathName: 'aplication/dashboard',
            icone: <Home size={16} />
         },
         {
            name: 'Disciplinas',
            pathName: 'aplication/subjects',
            icone: <BookMarked size={16} />
         },
         { name: 'Histórico Escolar', icone: <FileText size={16} /> }
      ],
      subject_details: [
         { name: 'ínicio', icone: <Home size={16} /> },
         { name: 'Atividades', icone: <ListChecks size={16} /> },
         { name: 'Notas', icone: <Calculator size={16} /> },
         { name: 'Frequência', icone: <CheckCheck size={16} /> },
         { name: 'Plano de Aula', icone: <CalendarRange size={16} /> },
         {
            name: 'Solicitar Segunda Chamada',
            icone: <MessageSquare size={16} />
         }
      ]
   };

   return {
      main: config.main,
      subject_details: config.subject_details
   };
}
