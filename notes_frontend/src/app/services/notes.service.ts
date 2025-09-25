import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

// PUBLIC_INTERFACE
@Injectable({ providedIn: 'root' })
/**
 * Service to manage Notes. In-memory only for demo.
 */
export class NotesService {
  private notes: Note[] = [];
  private currentId = 1;

  // PUBLIC_INTERFACE
  getAll(): Note[] {
    return this.notes.sort((a, b) => (b.updatedAt > a.updatedAt ? 1 : -1));
  }

  // PUBLIC_INTERFACE
  getById(id: string): Note | undefined {
    return this.notes.find(n => n.id === id);
  }

  // PUBLIC_INTERFACE
  create(note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Note {
    const newNote: Note = {
      ...note,
      id: String(this.currentId++),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.notes.push(newNote);
    return newNote;
  }

  // PUBLIC_INTERFACE
  update(id: string, changes: Partial<Omit<Note, 'id' | 'createdAt'>>): Note | undefined {
    const note = this.notes.find(n => n.id === id);
    if (note) {
      Object.assign(note, changes);
      note.updatedAt = new Date().toISOString();
      return note;
    }
    return undefined;
  }

  // PUBLIC_INTERFACE
  delete(id: string): boolean {
    const idx = this.notes.findIndex(n => n.id === id);
    if (idx >= 0) {
      this.notes.splice(idx, 1);
      return true;
    }
    return false;
  }
}
