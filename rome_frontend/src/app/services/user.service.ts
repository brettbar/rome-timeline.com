import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  initialUser: User = {
    name: 'Log In',
    email: '',
    profilePic: 'assets/images/baseline_person_white_18dp.png',
    password: ''
  };
  currentUser = new BehaviorSubject<User>(this.initialUser);

  initialUserList: User[] = [];
  validUserList = new BehaviorSubject<User[]>(this.initialUserList);


  constructor() { }

  setCurrentUser(loggedUser: User): void {
    this.currentUser.next(loggedUser);
  }

  getCurrentUser(): User {
    return this.currentUser.value;
  }

  setValidUsers(newValidUsers: User[]) {
    this.validUserList.next(newValidUsers);
  }

  getUsers(): User[] {
    return this.validUserList.value;
  }
}
