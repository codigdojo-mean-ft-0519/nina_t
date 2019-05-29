import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoteService } from './note.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

const enableTracing = false && !environment.production;

@NgModule({
  declarations: [AppComponent, NewNoteComponent, NoteListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule {}
