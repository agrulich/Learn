import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '@angular/router';
import { Teacher } from '../models/teacher';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public service : DataService, private router : Router) { }

  ngOnInit(): void {

    if(!this.service.loggedIn) {
      this.router.navigate(["login"]);
    }


  }

}
