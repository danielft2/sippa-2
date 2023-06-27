import {
   BookMarked,
   Calculator,
   CalendarRange,
   Home,
   ListChecks,
   MessageSquare
} from 'lucide-react';

export function useSidebar() {
   const subjectInitURL = '/application/disciplinas';

   const config = {
      main: [
         {
            name: 'Dashboard',
            icone: <Home size={16} />,
            pathName: '/application/dashboard'
         },
         {
            name: 'Disciplinas',
            icone: <BookMarked size={16} />,
            pathName: '/application/disciplinas'
         }
      ],
      subject_details: [
         {
            name: 'ínicio',
            icone: <Home size={16} />,
            pathName: `${subjectInitURL}/disciplinas/inicio`,
            redirect: (id: string) => `${subjectInitURL}/${id}`
         },
         {
            name: 'Atividades',
            icone: <ListChecks size={16} />,
            pathName: `${subjectInitURL}/atividades`,
            redirect: (id: string) => `${subjectInitURL}/${id}/atividades`
         },
         {
            name: 'Notas',
            icone: <Calculator size={16} />,
            pathName: `${subjectInitURL}/notas`,
            redirect: (id: string) => `${subjectInitURL}/${id}/notas`
         },
         {
            name: 'Plano de Aula',
            icone: <CalendarRange size={16} />,
            pathName: `${subjectInitURL}/plano-de-aula`,
            redirect: (id: string) => `${subjectInitURL}/${id}/plano-de-aula`
         },
         {
            name: 'Solicitar Segunda Chamada',
            icone: <MessageSquare size={16} />,
            pathName: `${subjectInitURL}/segunda-chamada`,
            redirect: (id: string) => `${subjectInitURL}/${id}/segunda-chamada`
         }
      ]
   };

   return {
      main: config.main,
      subject_details: config.subject_details,
      general: [...config.main, ...config.subject_details]
   };
}
