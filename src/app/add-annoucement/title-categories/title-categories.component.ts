import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StepStatusService } from '../step-status.service';

@Component({
  selector: 'title-categories',
  templateUrl: './title-categories.component.html',
  styleUrls: ['./title-categories.component.scss']
})
export class TitleCategoriesComponent implements OnInit {

  @Output() titleChange = new EventEmitter<string>();

  formData = {
    title: '',
    category: ''
  };

  constructor(private stepStatusService: StepStatusService) { }

  ngOnInit(): void { }

  onInputChange(field: keyof typeof this.formData, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement?.value ?? '';
    this.formData[field] = value;

    if(field === 'title') {
      this.titleChange.emit(value);
    }

    const isTitleValid = this.formData.title.length > 9;
    // const isCategoryValid = this.formData.category != '';

    this.stepStatusService.updateStepStatus(isTitleValid);
    // this.stepStatusChange.emit(isTitleValid && isCategoryValid);
  }

}
