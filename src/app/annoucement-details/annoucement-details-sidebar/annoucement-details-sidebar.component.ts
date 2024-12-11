import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'annoucement-details-sidebar',
  templateUrl: './annoucement-details-sidebar.component.html',
  styleUrls: ['./annoucement-details-sidebar.component.scss']
})
export class AnnoucementDetailsSidebarComponent implements OnInit {
  @Input() annoucement: any;

  constructor() { }

  ngOnInit(): void {
  }

}
