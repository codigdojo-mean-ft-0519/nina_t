import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { getInjectionTokens } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getNotes().subscribe(notesFromDB => {
      this.notes = notesFromDB;
    });
  }

  onCreate(createdNote: Note) {
    this.notes.unshift(createdNote);
  }
}
