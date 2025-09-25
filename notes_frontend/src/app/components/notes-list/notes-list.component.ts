import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note.model';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
  @Input() notes: Note[] = [];
  @Input() selectedNoteId?: string;
  @Output() noteSelect = new EventEmitter<string>();
  @Output() noteDelete = new EventEmitter<string>();

  onSelect(noteId: string) {
    if (noteId !== this.selectedNoteId)
      this.noteSelect.emit(noteId);
  }
  onDelete(noteId: string, event: any) {
    event.stopPropagation();
    this.noteDelete.emit(noteId);
  }
}
