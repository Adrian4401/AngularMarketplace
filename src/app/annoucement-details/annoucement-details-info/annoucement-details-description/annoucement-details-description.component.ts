import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-details-description',
  templateUrl: './annoucement-details-description.component.html',
  styleUrls: ['./annoucement-details-description.component.scss']
})
export class AnnoucementDetailsDescriptionComponent implements OnInit {
  @Input() annoucement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
