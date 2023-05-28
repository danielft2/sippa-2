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
   const subjectInitURL = '/aplication/subjects';

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
         {
            name: 'ínicio',
            pathName: '/',
            icone: <Home size={16} />,
            redirect: (id: string) => `${subjectInitURL}/${id}`
         },
         {
            name: 'Atividades',
            pathName: '/atividades',
            icone: <ListChecks size={16} />,
            redirect: (id: string) => `${subjectInitURL}/${id}/atividades`
         },
         {
            name: 'Notas',
            pathName: '/notas',
            icone: <Calculator size={16} />,
            redirect: (id: string) => `${subjectInitURL}/${id}/notas`
         },
         {
            name: 'Frequência',
            pathName: '/frequencia',
            icone: <CheckCheck size={16} />,
            redirect: (id: string) => `${subjectInitURL}/${id}/frequencia`
         },
         {
            name: 'Plano de Aula',
            pathName: '/plano-de-aula',
            icone: <CalendarRange size={16} />,
            redirect: (id: string) => `${subjectInitURL}/${id}/plano-de-aula`
         },
         {
            name: 'Solicitar Segunda Chamada',
            pathName: '/segunda-chamada',
            icone: <MessageSquare size={16} />,
            redirect: (id: string) => `${subjectInitURL}/${id}/segunda-chamada`
         }
      ]
   };

   return {
      main: config.main,
      subject_details: config.subject_details
   };
}
