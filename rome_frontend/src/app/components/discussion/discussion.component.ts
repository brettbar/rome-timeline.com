import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Discussion } from 'src/app/interfaces/interface';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  currentDiscussionId: number;
  currentDiscussion: Discussion = { topic: '', posts: [], id: null, description: '' };
  validPage = false;
  showCreatePost = false;
  newPostTopic = new FormControl('', [Validators.required]);
  newPostDescription = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute, private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (Number(params.id) < this.dataService.discussions.length) {
        this.validPage = true;
        this.currentDiscussionId = Number(params['id']);
        this.currentDiscussion = this.dataService.discussions.find(disc => disc.id === this.currentDiscussionId);
      } else {
        this.validPage = false;
      }
    });
  }

  openNewPostMenu(): void {
    this.showCreatePost = true;
  }

  closeNewPostMenu(): void {
    this.showCreatePost = false;
  }

  createNewPost(): void {
    this.dataService.discussions[this.currentDiscussionId].posts.push(
      {
        title: this.newPostTopic.value,
        body: this.newPostDescription.value,
        poster: this.userService.getCurrentUser(),
        comments: []
      }
    );
    this.showCreatePost = false;
  }
}
