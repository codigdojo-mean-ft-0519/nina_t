import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  activities: object[] = [
    {
      id: 1,
      goldAmt: 10,
      createdAt: Date.now(),
      userId: 1,
      locationId: 2,
    },
    {
      id: 2,
      goldAmt: -10,
      createdAt: Date.now(),
      userId: 1,
      locationId: 3,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
