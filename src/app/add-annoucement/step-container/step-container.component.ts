import { StepStatusService } from './../step-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.scss']
})
export class StepContainerComponent implements OnInit {

  isChecked: boolean = false;

  constructor(private stepStatusService: StepStatusService) { }

  ngOnInit(): void {
    this.stepStatusService.stepStatus$.subscribe(status => {
      this.isChecked = status;
    })
  }

}
