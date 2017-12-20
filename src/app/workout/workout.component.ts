import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routine, Tracker } from '../models/fitness'; 
import { DataService } from '../models/data.service';
import { GainzService } from '../models/gainz.service';
import { Router } from '@angular/router';
import { User } from '../models/fitness';
import { Http } from "@angular/http"; // added
//apiRoot = "//localhost:3001";

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutComponent implements OnInit {
   
    exerciseList = new DataService();
    exercises:string[];
    completedExercises:string[];
    exercise:Exercise;
    current:String = 'empty';
me:User;

constructor(private dataService:DataService,private http: Http, public user: GainzService, private router: Router ) { } // private http: Http

  ngOnInit() {
    // if(this.user.me == null){
    //     this.router.navigate(['/login']);
    // }

     this.exercises =[];
     this.completedExercises=[];
     
      
       
    }

    //

    onClick(n,s,r,l){
        if(n==''||s==''||r==''||l==''){
            alert("Please enter all fields");
        } else {
            let newE = new Exercise(n,s,r,l);
            this.completedExercises.push(newE.getExercise());
        } 
      }
      updateExercise(exercise){
          this.current = exercise;
      }
    addExercise(exercise){
        
        this.exercises.unshift(exercise);
        return false;
    }
    completedExercise(exercise){
       
        this.completedExercises.push(exercise);
    }
    deleteExercise(exercise){
        console.log("delete!")
        for(let i = 0; i  < this.completedExercises.length;i++){
           if(this.completedExercises[i]== exercise){
            this.completedExercises.splice(i,1);
           } 
        }
    }
    submitResults(){
        alert('Sorry! This feature is not available!');
    }
    
}
class Exercise{
        name:string;
        sets:number;
        reps:number;
        lbs:number;
        constructor(n:string,s:number,r:number,l:number){
            this.name = n;
            this.sets = s;
            this.reps = r;
            this.lbs = l;
        }
        public getExercise(){
           return ''+this.name +' sets: ' + this.sets+'  reps: '+ this.reps +' lbs: '+this.lbs;
        }

        
    }
