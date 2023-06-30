export interface NoteModel {
   studentActivityData: {
      id: string;
      status: boolean;
      activity_points: number;
   };
   title: string;
   description: string;
   weight: number;
   classroom_id: string;
}
