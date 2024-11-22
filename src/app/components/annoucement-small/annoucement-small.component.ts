import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-small',
  templateUrl: './annoucement-small.component.html',
  styleUrls: ['./annoucement-small.component.scss']
})
export class AnnoucementSmallComponent implements OnInit {

  @Input() isPromoted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
