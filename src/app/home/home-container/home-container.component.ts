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
      icon: 'fas fa-tv', // Telewizor
      backgroundColor: '#4CAF50', // Zielony
    },
    {
      name: 'Motoryzacja',
      icon: 'fas fa-car', // Samochód
      backgroundColor: '#FF5722', // Pomarańczowy
    },
    {
      name: 'Nieruchomości',
      icon: 'fas fa-home', // Dom
      backgroundColor: '#3F51B5', // Niebieski
    },
    {
      name: 'Moda',
      icon: 'fas fa-tshirt', // Koszulka
      backgroundColor: '#E91E63', // Różowy
    },
    {
      name: 'Sport i Hobby',
      icon: 'fas fa-football-ball', // Piłka nożna
      backgroundColor: '#FFC107', // Żółty
    },
    {
      name: 'Dom i Ogród',
      icon: 'fas fa-seedling', // Roślina
      backgroundColor: '#8BC34A', // Jasnozielony
    },
    {
      name: 'Praca',
      icon: 'fas fa-briefcase', // Aktówka
      backgroundColor: '#607D8B', // Szary
    },
    {
      name: 'Usługi',
      icon: 'fas fa-tools', // Narzędzia
      backgroundColor: '#795548', // Brązowy
    },
    {
      name: 'Zwierzęta',
      icon: 'fas fa-paw', // Łapa
      backgroundColor: '#FF9800', // Ciemnopomarańczowy
    },
    {
      name: 'Inne',
      icon: 'fas fa-box', // Pudełko
      backgroundColor: '#9E9E9E', // Jasnoszary
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
