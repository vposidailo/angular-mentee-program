import { Component, OnInit } from '@angular/core';
import { LoginService } from './_shared/services/login_service/login.service';
import { Subscription } from 'rxjs';
import { LoaderService } from './_shared/services/loader_service/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';
  addNewItemPage = false;
  activateLoader = false;

  constructor(private userService: LoginService, private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.loaderObservable.subscribe((val: boolean) => {
      this.activateLoader = val;
    });
  }

  newVideoCourseItemAction(event) {
    this.addNewItemPage = event;
  }
}
