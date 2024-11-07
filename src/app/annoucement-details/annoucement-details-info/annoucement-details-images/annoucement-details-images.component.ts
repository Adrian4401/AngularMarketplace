import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-details-images',
  templateUrl: './annoucement-details-images.component.html',
  styleUrls: ['./annoucement-details-images.component.scss']
})
export class AnnoucementDetailsImagesComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: '../../../assets/adImg/ip1.jpg'
    };
    this.slides[1] = {
      src: '../../../assets/adImg/ip2.jpg'
    };
    this.slides[2] = {
      src: '../../../assets/adImg/ip3.jpg'
    };
  }

}
