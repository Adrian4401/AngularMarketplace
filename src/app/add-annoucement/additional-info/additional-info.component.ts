import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {
  @Output() priceChange = new EventEmitter<string>();
  selectedPrice: string | null = null;
  isChecked: boolean = false;
  selectedButton: string = 'nowe';

  onPriceChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedPrice = target.value;
    if(this.selectedPrice) {
      this.priceChange.emit(this.selectedPrice);
    }
  }

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
