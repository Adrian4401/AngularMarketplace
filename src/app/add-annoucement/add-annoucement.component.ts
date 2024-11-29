import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'add-annoucement',
  templateUrl: './add-annoucement.component.html',
  styleUrls: ['./add-annoucement.component.scss']
})
export class AddAnnoucementComponent implements OnInit {

  constructor(private _location: Location) { }

  annoucementData = {
    title: ''
    // kolejne dodac z czasem
  }

  updateTitle(title: string): void {
    this.annoucementData.title = title;
  }

  addAnnoucement(): void {
    localStorage.setItem('annoucementData', JSON.stringify(this.annoucementData));
    console.log('Udalo sie zapisac ogloszenie w localStorage')
    this._location.back();
  }

  ngOnInit(): void {
  }

}
