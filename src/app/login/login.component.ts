import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { Teacher } from '../models/teacher';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(public service : DataService, private router : Router) { }

  ngOnInit(): void {

  }

  onEmailSubmitted() {
    var email = ((document.getElementById("email") as HTMLInputElement).value);
    var code = ((document.getElementById("code") as HTMLInputElement).value);

    this.service.getTeacherByEmail(email);

    if(Number(code) == this.service.currentTeacher[0].Code){
      this.router.navigate(['home']);
    }

  }

}
