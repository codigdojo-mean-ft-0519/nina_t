import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { LocationService } from '../location.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  locations: Location[] = [];
  user: User;

  onClick(location) {
    // console.log(location);
    if (location.id == 1) {
      const new_gold =
        Math.floor(Math.random() * (location.maxGold - location.minGold + 1)) +
        location.minGold;
      console.log(
        `The random amount of gold you get from ${
          location.name
        } is ${new_gold}!`
      );
    } else if (location.id == 2) {
      const new_gold =
        Math.floor(Math.random() * (location.maxGold - location.minGold + 1)) +
        location.minGold;
      console.log(
        `The random amount of gold you get from ${
          location.name
        } is ${new_gold}!`
      );
    } else if (location.id == 3) {
      const new_gold =
        Math.floor(Math.random() * (location.maxGold - location.minGold + 1)) +
        location.minGold;
      console.log(
        `The random amount of gold you get from ${
          location.name
        } is ${new_gold}!`
      );
    } else {
      const new_gold =
        Math.floor(Math.random() * (location.maxGold - location.minGold + 1)) +
        location.minGold;
      console.log(
        `The random amount of gold you get from ${
          location.name
        } is ${new_gold}!`
      );
    }
  }

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locations = this.locationService.getLocations();
  }
}
