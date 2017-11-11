import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routine, Tracker } from '../models/fitness'; 


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutComponent implements OnInit {
name:string;
sets:number;
reps:number;
lbs:number;
exercises:string[];
completedExercises:string[];


constructor() { }

  ngOnInit() {
      this.name = 'Bench Press';
      this.sets = 4;
      this.reps = 10;
      this.lbs = 200;
      this.exercises =['dumbell fly', 'shoulder press','bicept curl'];
      this.completedExercises=[];
    }
    onClick(){
        console.log('Hello');  
        this.name='';
        this.exercises.push('New exercise');
        this.completedExercises.push('feel the brun');
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
}

