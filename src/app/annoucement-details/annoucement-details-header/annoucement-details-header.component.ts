import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'annoucement-details-header',
  templateUrl: './annoucement-details-header.component.html',
  styleUrls: ['./annoucement-details-header.component.scss']
})
export class AnnoucementDetailsHeaderComponent implements OnInit {
  @Input() annoucement: any;

  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
