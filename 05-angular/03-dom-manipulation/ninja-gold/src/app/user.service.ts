import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    gold: 0,
  };
  getUser(): User {
    return this.user;
  }
  updateUser(gold: number): void {
    this.user.gold += gold;
  }
  constructor() {}
}
