import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from './fitness';


@Injectable()
export class GainzService {
me: User;
apiRoot:'localhost:4200';
  constructor(private http: Http, private router: Router) { }
  login(name: string, password: string){
    
          if(password=="blahblah"){
            //
            name = User.name;
            //
            this.router.navigate(['/workout']);
          } else {
            alert("No!")
          }

          //
    
 
    
    
  }

}
