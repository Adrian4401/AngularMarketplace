import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketplace';
  isLogged: boolean = false;

  handleLoginStatusChange(status: boolean): void {
    this.isLogged = status;
  }
}
