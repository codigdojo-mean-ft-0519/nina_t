import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  activity: Activity = new Activity();
  activities: Activity[] = [];

  getActivities(): Activity[] {
    return this.activities;
  }

  createActivity(gold: number, location: string) {
    this.activity.goldAmt = gold;
    this.activity.location = location;
    return this.activity;
  }

  updateActivities(newActivity: Activity) {
    this.activities.push(newActivity);
    // console.log(
    //   'From our activity service, our activity array looks like the following...' +
    //     this.activities[this.activities.length - 1].location
    // );
  }
  constructor() {}
}
