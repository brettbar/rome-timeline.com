import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/interface';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  icons: any;
  user: User;
  userSub;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSub = this.userService.currentUser.subscribe(res => this.user = res);
  }
}
