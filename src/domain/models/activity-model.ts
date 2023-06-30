export interface ActivityModel {
   id: string;
   student_id?: string;
   activity_id?: string;
   status: boolean;
   title: string;
   description: string;
   fileUrl: string;
   activity_points: number;
   receive_data: string;
}
