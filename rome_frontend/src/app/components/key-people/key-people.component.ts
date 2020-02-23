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
  bios: any[];
  parser = new DOMParser();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getRawKeyPeopleResponseData();
  }

  getRawKeyPeopleResponseData() {
    this.dataService.getKeyPeople().subscribe(
      data => {
        this.rawResponsePersonResponseData = data;
        this.getKeyPeopleFromResponseData();
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

  // getBio = (person: string) => {
  //   return new Promise((resolve, reject) => {
  //     this.dataService.getPage(person)
  //     .subscribe(res => this.handleWikiQuery(res));
  //     setTimeout(resolve, 1000);
  //   });
  // }

  // handleWikiQuery(result: string) {
  //   const parsedHTML = this.parser.parseFromString(JSON.parse(result).parse.text['*'], 'text/html');
  //   const content = parsedHTML.getElementsByClassName('mw-parser-output')[0];
  //   const elements = [];
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < content.children.length; i++) {
  //     elements.push(content.children[i]);
  //   }
  //   const bioElement = elements.find(element => element.tagName === 'P' && element.className !== 'mw-empty-elt');
  //   const nameContent = JSON.parse(result).parse.title;

  //   this.bios.push({ name: nameContent, bio: bioElement.textContent });
  // }

  // updateBioAndWiki(person: string) {
  //   const personToUpdate = this.people.find(o => o.name === person);
  //   personToUpdate.bio = this.bios.find(bio => bio.name === person).bio;
  //   personToUpdate.wiki = `https://en.wikipedia.org/wiki/${person.replace(/ /g, '_')}`;
  // }
}
