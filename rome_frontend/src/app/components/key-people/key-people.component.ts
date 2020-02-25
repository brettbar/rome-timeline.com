import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { KeyPerson } from 'src/app/interfaces/interface';


@Component({
  selector: 'app-key-people',
  templateUrl: './key-people.component.html',
  styleUrls: ['./key-people.component.css']
})
export class KeyPeopleComponent implements OnInit {

  rawResponsePersonResponseData: object[];
  people: KeyPerson[];
  loading = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getRawKeyPeopleResponseData();
  }

  getRawKeyPeopleResponseData() {
    this.dataService.getKeyPeople().subscribe(
      data => {
        this.rawResponsePersonResponseData = data;
        this.getKeyPeopleFromResponseData();
        this.loading = false;
      },
      error => {
        console.log(error);
      }
    );
  }

  getKeyPeopleFromResponseData() {
    this.people = [];
    this.rawResponsePersonResponseData.forEach((obj) => {
      this.people.push(obj as KeyPerson);
    });
  }
}
