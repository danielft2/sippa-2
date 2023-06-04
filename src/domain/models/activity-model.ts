export interface ActivityModel {
   id: string;
   status: 'Pendente' | 'Entregue';
   title: string;
   date: string;
   isFrequency?: boolean;
   points?: number;
}
