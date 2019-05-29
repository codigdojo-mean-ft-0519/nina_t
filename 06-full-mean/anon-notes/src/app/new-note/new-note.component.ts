import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css'],
})
export class NewNoteComponent implements OnInit {
  note = new Note();
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {}

  addNote(event: Event, form: ngForm) {
    event.preventDefault();
    this.noteService.addNote(this.note).subscribe(createdNote => {
      console.log('We created the following note:', createdNote);
      this.notes.push(createdNote);
      this.note = new Note();
      form.reset();
    });
  }
}
