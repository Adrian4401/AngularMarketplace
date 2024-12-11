import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/service/http.service';

@Component({
  selector: 'app-annoucement-details-container',
  templateUrl: './annoucement-details-container.component.html',
  styleUrls: ['./annoucement-details-container.component.scss']
})
export class AnnoucementDetailsContainerComponent implements OnInit {
  annoucement: any;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.httpService.getAnnoucementDetails(id).subscribe(
        (response) => {
          this.annoucement = response;
          console.log('Annoucement details: ', this.annoucement);
        },
        (error) => {
          console.log('Annoucement details error: ', error);
        }
      )
    }
  }

}
