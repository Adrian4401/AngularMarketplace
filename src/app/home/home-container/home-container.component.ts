import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  tempArray = new Array(10);

  categories = [
    {
      name: 'Elektronika',
      icon: 'fas fa-tv',
      backgroundColor: '#4CAF50',
    },
    {
      name: 'Motoryzacja',
      icon: 'fas fa-car',
      backgroundColor: '#FF5722',
    },
    {
      name: 'Nieruchomości',
      icon: 'fas fa-home',
      backgroundColor: '#3F51B5',
    },
    {
      name: 'Moda',
      icon: 'fas fa-tshirt',
      backgroundColor: '#E91E63',
    },
    {
      name: 'Sport i Hobby',
      icon: 'fas fa-football-ball',
      backgroundColor: '#FFC107',
    },
    {
      name: 'Dom i Ogród',
      icon: 'fas fa-seedling',
      backgroundColor: '#8BC34A',
    },
    {
      name: 'Praca',
      icon: 'fas fa-briefcase',
      backgroundColor: '#607D8B',
    },
    {
      name: 'Usługi',
      icon: 'fas fa-tools',
      backgroundColor: '#795548',
    },
    {
      name: 'Zwierzęta',
      icon: 'fas fa-paw',
      backgroundColor: '#FF9800',
    },
    {
      name: 'Inne',
      icon: 'fas fa-box',
      backgroundColor: '#9E9E9E',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
