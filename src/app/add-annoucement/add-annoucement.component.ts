import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpService } from 'src/service/http.service';
import { error } from 'console';

@Component({
  selector: 'add-annoucement',
  templateUrl: './add-annoucement.component.html',
  styleUrls: ['./add-annoucement.component.scss']
})
export class AddAnnoucementComponent implements OnInit {

  constructor(private _location: Location, private httpService: HttpService) { }

  annoucementData = {
    title: '',
    // category: '',
    description: '',
    price: ''
  }

  updateTitle(title: string): void {
    this.annoucementData.title = title;
  }

  updateDescription(description: string): void {
    this.annoucementData.description = description;
  }

  updatePrice(price: string): void {
    this.annoucementData.price = price;
  }

  // updateCategory(category: string): void {
  //   this.annoucementData.category = category;
  // }

  addAnnoucement(): void {
    const priceString = this.annoucementData.price;

    const priceNumber = parseInt(priceString, 10);
    if (isNaN(priceNumber)) {
      alert("Cena musi być liczbą");
      return;
    }

    const annoucementToSend = {
      title: this.annoucementData.title,
      description: this.annoucementData.description,
      price: priceNumber
    };

    console.log('Ogłoszenie do wysłania:', annoucementToSend);

    this.httpService.postAnnoucement(annoucementToSend).subscribe(
      response => {
        console.log('Ogloszenie dodane: ', response);
        this._location.back();
      },
      error => {
        console.log('Nie udalo sie dodac ogloszenia: ', error);
      }
    )

    localStorage.setItem('annoucementData', JSON.stringify(this.annoucementData));
  }

  ngOnInit(): void {
  }

}
