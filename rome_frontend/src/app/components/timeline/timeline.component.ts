import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { TimeLineContent } from 'src/app/interfaces/interface';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  contents: TimeLineContent[];
  value: number;

  constructor(private timeLineService: TimelineService) {}

  ngOnInit() {
    this.contents = this.timeLineService.timeLineContents;
  }

  handleSlideChange(index) {
    this.value = index;
  }
}
