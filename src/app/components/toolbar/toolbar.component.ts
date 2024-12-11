import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/service/http.service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() loginStatusChange = new EventEmitter<any>();
  token: any;

  constructor(private httpService: HttpService) { }

  onLogin() {
    this.httpService.onLogin().subscribe(
      (response) => {
        this.token = response;
        console.log(this.token);
        this.loginStatusChange.emit(true as any);
        localStorage.setItem("AuthToken", JSON.stringify(this.token));
      },
      (error) => { console.log(error) }
    );
  }

  ngOnInit(): void {
  }

}
