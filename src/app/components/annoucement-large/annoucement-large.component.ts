import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-large',
  templateUrl: './annoucement-large.component.html',
  styleUrls: ['./annoucement-large.component.scss']
})
export class AnnoucementLargeComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
