import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  tempArray = new Array(10);
  annoucements: any;
  annoucement_temp_title = "Iphone 15 Pro 98& kondycji baterii";

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAnnoucements().subscribe(
      (response) => {
        this.annoucements = response,
        console.log(this.annoucements);
      },
      (error) => { console.log(error) }
    );
  }

  navigateToDetails(id: string): void {
    this.router.navigate(['/annoucement-details', id])
  }

}
