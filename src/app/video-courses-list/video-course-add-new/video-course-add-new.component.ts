import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-course-add-new',
  templateUrl: './video-course-add-new.component.html',
  styleUrls: ['./video-course-add-new.component.css']
})
export class VideoCourseAddNewComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  addNewVideoCourseItem() {
    this.router.navigateByUrl('/courses/new');
  }
}
