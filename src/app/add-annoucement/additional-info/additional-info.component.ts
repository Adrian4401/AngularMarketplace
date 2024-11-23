import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  isChecked: boolean = false;
  selectedButton: string = 'nowe';

  onChangeChecked(): void {
    this.isChecked = !this.isChecked;
  }

  onSelectButton(buttonValue: string): void {
    this.selectedButton = buttonValue;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
