import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StepStatusService } from '../step-status.service';

@Component({
  selector: 'title-categories',
  templateUrl: './title-categories.component.html',
  styleUrls: ['./title-categories.component.scss']
})
export class TitleCategoriesComponent implements OnInit {

  categories = [
    { name: 'Elektronika', icon: 'fas fa-tv', backgroundColor: '#4CAF50' },
    { name: 'Motoryzacja', icon: 'fas fa-car', backgroundColor: '#FF5722' },
    { name: 'Nieruchomości', icon: 'fas fa-home', backgroundColor: '#3F51B5' },
    { name: 'Moda', icon: 'fas fa-tshirt', backgroundColor: '#E91E63' },
    { name: 'Sport i Hobby', icon: 'fas fa-football-ball', backgroundColor: '#FFC107' },
    { name: 'Dom i Ogród', icon: 'fas fa-seedling', backgroundColor: '#8BC34A' },
    { name: 'Praca', icon: 'fas fa-briefcase', backgroundColor: '#607D8B' },
    { name: 'Usługi', icon: 'fas fa-tools', backgroundColor: '#795548' },
    { name: 'Zwierzęta', icon: 'fas fa-paw', backgroundColor: '#FF9800' },
    { name: 'Inne', icon: 'fas fa-box', backgroundColor: '#9E9E9E' },
  ];

  formData = {
    title: '',
    category: ''
  };

  isCategoriesDown: boolean = false;
  selectedCategory: string | null = null;
  @Output() titleChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();

  constructor(private stepStatusService: StepStatusService) { }

  ngOnInit(): void { }

  onChangeCategoriesDown(): void {
    this.isCategoriesDown = !this.isCategoriesDown;
  }

  onChangeCategory(value: string): void {
    this.selectedCategory = value;
    console.log("Kategoria:", this.selectedCategory)
    this.isCategoriesDown = !this.isCategoriesDown;
    this.categoryChange.emit(value);
  }

  onInputChange(field: keyof typeof this.formData, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement?.value ?? '';
    this.formData[field] = value;

    const isTitleValid = this.formData.title.length > 9;

    this.stepStatusService.updateStepStatus(isTitleValid);

    if(field === 'title') {
      this.titleChange.emit(value);
    }
  }

}
