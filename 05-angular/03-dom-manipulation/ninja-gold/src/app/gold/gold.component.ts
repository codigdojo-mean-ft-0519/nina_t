import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css'],
})
export class GoldComponent implements OnInit {
  gold: number;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.gold = this.userService.getUser().gold;
  }
}
