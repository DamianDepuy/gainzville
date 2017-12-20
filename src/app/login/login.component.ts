import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GainzService } from '../models/gainz.service';
import { Router } from '@angular/router';
import { User } from '../models/fitness';
// get from gitLogin.c.ts

//game.service



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
 
})
export class LoginComponent implements OnInit {
  name:string;
  password: string;
  
  constructor(private gainz: GainzService, private router: Router) { }

  ngOnInit() {

  }
  login(){
   alert("login");
    this.gainz.login(this.name, this.password);
    
  }
}
