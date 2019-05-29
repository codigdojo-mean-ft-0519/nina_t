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
  @Output()
  createdNote = new EventEmitter<Note>();

  constructor(private noteService: NoteService) {}

  ngOnInit() {}

  addNote(event: Event, form: NgForm) {
    event.preventDefault();
    this.noteService.addNote(this.note).subscribe(createdNote => {
      console.log('We created the following note:', createdNote);
      this.note = createdNote;
      this.createdNote.emit(this.note);
      this.note = new Note();
      form.reset();
    });
  }
}
