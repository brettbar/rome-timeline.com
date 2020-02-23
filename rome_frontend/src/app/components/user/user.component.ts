import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/interface';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser: User;

  currentUser: User;
  userSub;
  loggedIn: boolean;

  durationInSeconds = 3;

  newUserName = new FormControl('', [Validators.required]);
  newUserEmail = new FormControl('', [Validators.required, Validators.email]);
  newUserPicture = 'assets/images/baseline_person_white_18dp.png';
  newUserPassword = new FormControl('', [Validators.required]);

  currentUserName = new FormControl('', [Validators.required]);
  currentUserEmail = new FormControl('', [Validators.required, Validators.email]);
  currentUserPicture = 'assets/images/baseline_person_white_18dp.png';
  currentUserPassword = new FormControl('', [Validators.required]);



  constructor(private userService: UserService, private snackBar: MatSnackBar) {
    this.loggedIn = false ;
  }

  ngOnInit() {
    this.userSub = this.userService.currentUser.subscribe(res => { this.currentUser = res; });
  }

  addNewUser(): void {
    this.newUser = {
      name: this.newUserName.value,
      email: this.newUserEmail.value,
      profilePic: this.newUserPicture,
      password: this.newUserPassword.value,
    };
    if (!this.userExists(this.currentUser)) {
      this.userService.getUsers().push(this.newUser);
      this.openSnackBar(`Created user: ${this.currentUser.name}`);
    } else {
      this.openSnackBar(`User: ${this.currentUser.name} already exists`);
    }
  }

  logIn(): void {
    this.currentUser = {
      name: this.currentUserName.value,
      email: this.currentUserEmail.value,
      profilePic: this.currentUserPicture,
      password: this.currentUserPassword.value,
    };
    if (this.userExists(this.currentUser)) {
      this.userService.setCurrentUser(this.currentUser);
      this.openSnackBar(`Logged in as User: ${this.currentUser.name}`);
    } else {
      this.openSnackBar('User not Found');
    }
  }

  userExists(user: User): boolean {
    for (const existingUser of this.userService.getUsers()) {
      if (user.name === existingUser.name && user.email === existingUser.email) {
        return true;
      }
    }
    return false;
  }

  currentInfoIncomplete() {
    return !(this.currentUserName.valid && this.currentUserPassword.valid);
  }

  newInfoIncomplete() {
    return !(this.newUserName.valid && this.newUserEmail.valid && this.newUserPassword.valid);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: this.durationInSeconds * 1000,
    });
  }

}
