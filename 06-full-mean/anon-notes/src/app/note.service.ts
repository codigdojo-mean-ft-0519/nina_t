import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>('/notes', note);
  }
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>('/notes');
  }
}
