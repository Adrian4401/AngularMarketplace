import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketplace';
  isLogged: boolean = false;

  ngOnInit(): void {
    const token = localStorage.getItem("AuthToken");
    this.isLogged = token !== null;
  }

  handleLoginStatusChange(status: boolean): void {
    this.isLogged = status;
  }

  handleLogout(): void {
    this.isLogged = false;
    localStorage.removeItem("AuthToken");
  }
}
