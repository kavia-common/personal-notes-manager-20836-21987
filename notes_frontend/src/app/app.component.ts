/* global confirm */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { NotesService } from './services/notes.service';
import { Note } from './models/note.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    SidebarComponent, 
    NotesListComponent, 
    NoteEditorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  notes: Note[] = [];
  selectedNoteId: string | undefined;
  creating: boolean = false;
  selectedNote: Note | null = null;

  constructor(private notesService: NotesService) {
    this.loadNotes();
  }

  private loadNotes() {
    this.notes = this.notesService.getAll();
    if (this.selectedNoteId) {
      this.selectedNote = this.notes.find(n => n.id === this.selectedNoteId) || null;
    } else {
      this.selectedNote = null;
    }
  }

  onCreateNote() {
    this.creating = true;
    this.selectedNoteId = undefined;
    this.selectedNote = null;
  }

  onNoteSelect(noteId: string) {
    this.selectedNoteId = noteId;
    this.selectedNote = this.notes.find(n => n.id === noteId) || null;
    this.creating = false;
  }

  onNoteDelete(noteId: string) {
    if (confirm('Delete this note?')) {
      this.notesService.delete(noteId);
      if (this.selectedNoteId === noteId) {
        this.selectedNoteId = undefined;
        this.selectedNote = null;
      }
      this.loadNotes();
    }
  }

  onEditorSave(payload: { title: string; content: string }) {
    if (this.creating) {
      const note = this.notesService.create({
        title: payload.title,
        content: payload.content,
      });
      this.selectedNoteId = note.id;
      this.creating = false;
    } else if (this.selectedNoteId && this.selectedNote) {
      this.notesService.update(this.selectedNoteId, {
        title: payload.title,
        content: payload.content,
      });
    }
    this.loadNotes();
  }

  onEditorCancel() {
    this.creating = false;
    // Do not reset note selection on cancel (UX)
  }
}
