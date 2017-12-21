import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './fitness';
declare var FB: any;
declare var window: any;
@Injectable()
export class GainzService {
name;
apiRoot:'localhost:4200';
  constructor(private http: Http, private router: Router) { 
    
  }
  
  // delete from here
  login(name: string, password: string){
    
          if(password=="password"){
            //
            this.name = name;
            alert("You have successfully logged in!");
            this.router.navigate(['/workout']);
          } else {
            alert("You didn't enter password in password field")
          }
  }
}
