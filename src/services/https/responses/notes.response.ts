import { NoteModel } from '@/domain/models/note-model';

export interface NotesResponse {
   activities: NoteModel[];
   exams: NoteModel[];
}
