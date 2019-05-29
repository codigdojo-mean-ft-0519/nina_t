import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css'],
})
export class NewNoteComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  ngOnInit() {}
}
