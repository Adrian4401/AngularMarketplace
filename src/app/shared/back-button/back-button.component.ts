import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  /// Unmutable properties should be readonly
  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }

  /// bloat
  ngOnInit(): void {
  }

}
