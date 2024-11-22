import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() loginStatusChange = new EventEmitter<any>();

  onLogin(): void {
    this.loginStatusChange.emit(true as any);
  }

  constructor() { }

  ngOnInit(): void {
  }

}