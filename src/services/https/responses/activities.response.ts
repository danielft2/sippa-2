import { NoteModel } from '@/domain/models/note-model';

export interface ActivitiesResponse {
   activities: NoteModel[];
   exams: NoteModel[];
}
