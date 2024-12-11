import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'logged-toolbar',
  templateUrl: './logged-toolbar.component.html',
  styleUrls: ['./logged-toolbar.component.scss']
})
export class LoggedToolbarComponent implements OnInit {
  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
