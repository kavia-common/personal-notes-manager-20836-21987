import { Component, EventEmitter, Output } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Output() createNote = new EventEmitter<void>();
}
