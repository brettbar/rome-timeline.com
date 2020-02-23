import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyPerson, TimeLineContent, Discussion } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  
  discussions: Discussion[] = [
    {
      topic: 'General',
      posts: [],
      id: 0,
      description: 'General questions and information about Ancient Rome'
    },
    {
      topic: 'Augustus and the Principate',
      posts: [],
      id: 1,
      description: 'Posts about Rome\'s first emperor, and the legacy that would come to define\
      the next 300 years of Roman history.'
    },
    {
      topic: 'History of Carthage',
      posts: [],
      id: 2,
      description: 'The history and origin of Rome\'s greatest foe.'
    },
    {
      topic: 'Meditations of Marcus Aurelius',
      posts: [],
      id: 3,
      description: 'Discussion about the musings and wisdoms of Rome\'s magnanimous philosopher Emperor'
    },
  ];

 

  constructor(private http: HttpClient) { }

  getKeyPeople(): Observable<any> {
    return this.http.get(this.baseurl + '/persons/', {headers: this.httpHeaders});
  }

  getPage(name: string) {
    return this.http.get(this.generateAPIurl(name), {responseType: 'text'});
  }

  generateAPIurl(name: string) {
    return `https://en.wikipedia.org/w/api.php?action=parse&page=${name.replace(/ /g, '%20')}&format=json&origin=*`;
  }
}
