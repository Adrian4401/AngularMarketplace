import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  tempArray = new Array(10);

  constructor() { }

  ngOnInit(): void {
  }

}
