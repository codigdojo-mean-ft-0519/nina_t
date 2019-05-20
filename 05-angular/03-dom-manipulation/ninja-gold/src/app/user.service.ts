import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    id: 1,
    gold: 20,
    firstName: 'Nina',
    lastName: 'Tompkin',
  };
  getUser(): User {
    return this.user;
  }
  updateUser(gold: number): void {
    this.user.gold += gold;
  }
  constructor() {}
}
