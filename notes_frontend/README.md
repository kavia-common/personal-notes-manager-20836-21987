# Angular - Personal Notes App Frontend

This Angular project implements a modern, stylish notes manager UI using the **Ocean Professional** theme.  
Features:
- Sidebar navigation with "New Note" action
- List of notes displayed as cards
- Responsive two-column layout (Notes list & Editor)
- Create, edit, view, and delete notes
- Ocean Professional design: blue & amber accents, clean modern layout, subtle gradients, minimalist

## File Structure Overview

- `src/app/models/note.model.ts`: TypeScript interface for a Note.
- `src/app/services/notes.service.ts`: In-memory notes service (for demo).
- `src/app/components/sidebar/`: Sidebar navigation.
- `src/app/components/notes-list/`: List/cards of notes, select/delete notes.
- `src/app/components/note-editor/`: Editor for creating/editing notes.
- `src/app/app.component.*`: Main layout, connects all controls.
- `src/app/app.component.css`: Implements Ocean Professional layout and theme.

## Theming & Style

The app follows the **Ocean Professional** style guide:
- Background/gradient: subtle light blue (`#2563EB0B`), surface `#fff`
- Primary accent (`#2563EB` blue), secondary accent (`#F59E0B` amber/gold)
- Minimalist, soft rounded design, subtle box-shadows, smooth transitions
- Responsive: fully usable on mobile and desktop

## Quick Start

1. Run the dev server:
   ```bash
   ng serve
   ```
2. Open your browser to [http://localhost:4200/](http://localhost:4200/)
3. Create, edit, delete notes and enjoy the modern Ocean Professional UX!

