import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-note-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.css',
})
export class NoteEditorComponent implements OnChanges {
  @Input() note?: Note | null;
  @Input() isNew: boolean = false;
  @Output() save = new EventEmitter<Pick<Note, 'title' | 'content'>>();
  @Output() cancel = new EventEmitter<void>();

  editTitle: string = '';
  editContent: string = '';
  noteId?: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note'] && this.note) {
      this.editTitle = this.note.title;
      this.editContent = this.note.content;
      this.noteId = this.note.id;
    } else if (this.isNew) {
      this.editTitle = '';
      this.editContent = '';
      this.noteId = undefined;
    }
  }

  onSave() {
    this.save.emit({ title: this.editTitle, content: this.editContent });
  }
  onCancel() {
    this.cancel.emit();
  }
}
