import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'annoucement-details-location',
  templateUrl: './annoucement-details-location.component.html',
  styleUrls: ['./annoucement-details-location.component.scss']
})
export class AnnoucementDetailsLocationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private map: L.Map | undefined;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([52.652499, 19.057948], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    const circle = L.circle([52.652499, 19.057948], {
      color: '#4c46c8',
      fillColor: '#4c46c8',
      fillOpacity: 0.3,
      radius: 1000
    });

    circle.addTo(this.map);
  }

}
