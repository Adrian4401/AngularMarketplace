import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-details-info',
  templateUrl: './annoucement-details-info.component.html',
  styleUrls: ['./annoucement-details-info.component.scss']
})
export class AnnoucementDetailsInfoComponent implements OnInit {
  @Input() annoucement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
