import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { UserComponent } from './components/user/user.component';
import { ForumComponent } from './components/forum/forum.component';
import { OverviewComponent } from './components/overview/overview.component';
import { KeyPeopleComponent } from './components/key-people/key-people.component';
import { ErasComponent } from './components/eras/eras.component';
import { DiscussionComponent } from './components/discussion/discussion.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'key-people', component: KeyPeopleComponent },
      { path: 'eras', component: ErasComponent },
    ],
  },
  { path: 'timeline', component: TimelineComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'forum', component: ForumComponent, children: [
    { path: ':id', component: DiscussionComponent },
    { path: '**', redirectTo: 'forum'}
  ] },
  { path: 'user', component: UserComponent },

  {path: '**', redirectTo: 'home/overview'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
