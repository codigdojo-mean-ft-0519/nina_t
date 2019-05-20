import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  locations: Location[];

  onClick(locationId) {
    console.log(locationId);
  }

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  }
}
