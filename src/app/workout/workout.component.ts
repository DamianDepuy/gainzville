import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routine, Tracker } from '../models/fitness'; 


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutComponent implements OnInit {

exercises:string[];
completedExercises:string[];
exercise:Exercise;


constructor() { }

  ngOnInit() {
      
      this.exercises =['dumbell fly', 'shoulder press','bicept curl'];
      this.completedExercises=[];
   
     
    }
    onClick(n,s,r,l){
        if(n==''||s==''||r==''||l==''){
            alert("Please enter all fields");
        } else {
            let newE = new Exercise(n,s,r,l);
            this.completedExercises.push(newE.getExercise());
        }

     
        
        
      }

    addExercise(exercise){
        
        this.exercises.unshift(exercise);
        return false;
    }
    completedExercise(exercise){
       
        this.completedExercises.push(exercise);
    }
    deleteExercise(exercise){
        for(let i = 0; i  < this.exercises.length;i++){
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
