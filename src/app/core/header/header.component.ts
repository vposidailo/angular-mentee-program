import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User = {
    Id: 1,
    FirstName: "Vitalii",
    LastName: "Posidailo"
  };

  constructor() { }

  ngOnInit() {
  }

}
