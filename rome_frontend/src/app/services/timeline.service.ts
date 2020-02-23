import { Injectable } from '@angular/core';
import { TimeLineContent } from '../interfaces/interface';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  timeLineContents: TimeLineContent[] = [
    {
      url: 'assets/images/0troy.jpg',
      header: 'Legendary Origins: Aeneas and the Trojan War',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'assets/images/1romulus_remus.jpg',
      header: 'Wolves of the Tiber: Romulus and Remus',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'assets/images/2romuluskillsremus.jpg',
      header: 'Fratricide: Rome Gets its Name',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'https://i.pinimg.com/originals/89/b7/64/89b76447b9f58e3c59dead71f0dc943a.jpg',
      header: 'The City on the Palatine Hill: Rome Begins',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/437329/1763014/main-image',
      header: 'A City of Men: The Abduction of the Sabine Women',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/The_Intervention_of_the_Sabine_Women.jpg',
      header: 'War with The Sabines: The Uniting of Two Peoples',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'https://i.pinimg.com/originals/0e/0a/69/0e0a691bd1ba86e28521cedf5fc01ff1.jpg',
      header: 'Romulus Vanishes: The Seven Kings of Rome',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'https://brewminate.com/wp-content/uploads/2018/08/082718-26-Lucius-Tarquinius-Superbus-Ancient-History-Roman-Rome.jpg',
      header: 'Lucius Tarquinius Superbus: The Last King of Rome',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      url: 'https://brewminate.com/wp-content/uploads/2018/08/082718-26-Lucius-Tarquinius-Superbus-Ancient-History-Roman-Rome.jpg',
      header: 'Lucius Tarquinius Superbus: The Last King of Rome',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, \
      sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

  constructor(private http: HttpClient) { }

}
