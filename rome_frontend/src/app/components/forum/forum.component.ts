import { Component, OnInit } from '@angular/core';
import { Discussion } from 'src/app/interfaces/interface';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  discussions: Discussion[];
  durationInSeconds = 3;

  showDiscussionForm: boolean;
  newDiscussionTopic = new FormControl('', [Validators.required]);
  newDiscussionDescription = new FormControl('', [Validators.required]);

  constructor(private dataService: DataService, private matSnackBar: MatSnackBar) { }

  ngOnInit() {
    this.discussions = this.dataService.discussions;
    this.showDiscussionForm = false;
  }

  createNewDiscussion() {
    this.showDiscussionForm = true;
  }

  currentInfoIncomplete(): boolean {
    return !(this.newDiscussionTopic.valid && this.newDiscussionDescription.valid);
  }

  logIn(): void {
    this.showDiscussionForm = false;
    this.dataService.discussions.push(
      {
        topic: this.newDiscussionTopic.value,
        posts: [],
        id: this.dataService.discussions.length,
        description: this.newDiscussionDescription.value
      }
    );
    this.matSnackBar.open('Discussion Created', '', {
      duration: this.durationInSeconds * 1000,
    });
  }

}
