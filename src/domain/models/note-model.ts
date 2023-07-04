export interface NoteModel {
   studentActivityData: {
      id: string;
      activity_id: string;
      status: boolean;
      activity_points: number;
      receive_data: string;
   };
   title: string;
   description: string;
   weight: number;
   classroom_id: string;
}
