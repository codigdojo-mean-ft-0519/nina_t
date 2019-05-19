import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  locations: object[] = [
    {
      id: 1,
      name: 'Farm',
      minGold: 10,
      maxGold: 20,
    },
    {
      id: 2,
      name: 'Cave',
      minGold: 5,
      maxGold: 10,
    },
    {
      id: 3,
      name: 'House',
      minGold: 2,
      maxGold: 5,
    },
    {
      id: 4,
      name: 'Casino',
      minGold: -50,
      maxGold: 50,
    },
  ];

  onClick(locationId) {
    console.log(locationId);
  }

  constructor() {}

  ngOnInit() {}
}
