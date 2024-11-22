import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.scss']
})
export class StepContainerComponent implements OnInit {

  isChecked: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
