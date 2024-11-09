import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-details-images',
  templateUrl: './annoucement-details-images.component.html',
  styleUrls: ['./annoucement-details-images.component.scss']
})
export class AnnoucementDetailsImagesComponent implements OnInit {

  images = [
    {
      imageSrc: 'assets/adImg/ip1.jpg',
      imageAlt: 'Photo 1'
    },
    {
      imageSrc: 'assets/adImg/ip2.jpg',
      imageAlt: 'Photo 2'
    },
    {
      imageSrc: 'assets/adImg/ip3.jpg',
      imageAlt: 'Photo 3'
    },
  ]

  ngOnInit(): void {}

}
