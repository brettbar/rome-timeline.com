import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CarouselamosModule, } from 'ng2-carouselamos';

import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSliderModule,
  MatProgressBarModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTreeModule,
} from '@angular/material';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ForumComponent } from './components/forum/forum.component';
import { UserComponent } from './components/user/user.component';
import { ErasComponent } from './components/eras/eras.component';
import { KeyPeopleComponent } from './components/key-people/key-people.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CommonModule } from '@angular/common';
import { DiscussionComponent } from './components/discussion/discussion.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TimelineComponent,
    ResourcesComponent,
    ForumComponent,
    UserComponent,
    KeyPeopleComponent,
    ErasComponent,
    KeyPeopleComponent,
    OverviewComponent,
    DiscussionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2CarouselamosModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
