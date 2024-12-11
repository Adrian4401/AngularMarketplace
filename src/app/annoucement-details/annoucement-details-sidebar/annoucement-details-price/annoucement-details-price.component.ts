import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-details-price',
  templateUrl: './annoucement-details-price.component.html',
  styleUrls: ['./annoucement-details-price.component.scss']
})
export class AnnoucementDetailsPriceComponent implements OnInit {
  @Input() annoucement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
