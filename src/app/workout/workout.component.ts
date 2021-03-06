import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routine, Tracker } from '../models/fitness'; 
import { DataService } from '../models/data.service';
import { GainzService } from '../models/gainz.service';
import { Router } from '@angular/router';
import { User } from '../models/fitness';
import { Http } from "@angular/http"; // added
import { Typeahead } from 'ng2-typeahead';
//apiRoot = "//localhost:3001";


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WorkoutComponent implements OnInit {
   isavailable = true;
    exerciseList = new DataService();
    exercises:string[];
    completedExercises:string[];
    completedExercises2:string[];
    exercise:Exercise;
    current:String = 'Search or add custom';
    me;
    //
    exerciseName: string;
    names: any[] = [
      {
        id: 1,
        name: "Seated Shoulder Presses",
        searchText: "Seated Shoulder Presses"
      },
      {
        id: 2,
        name: "Lateral Raises",
        searchText: "Lateral Raises"
      },
      {
        id: 3,
        name: "Flat Chest Presses",
        searchText: "Flat Chest Presses"
      },
      {
        id: 4,
        name: "Flat Chest Flies",
        searchText: "Flat Chest Flies"
      },
      {
        id: 5,
        name: "Dead Lifts",
        searchText: "Dead Lifts"
      },
      {
        id: 6,
        name: "Single Arm Row",
        searchText: "Single Arm Row"
      },
      {
        id: 7,
        name: "Hammer curls",
        searchText: "Hammer curls"
      },
      {
        id: 8,
        name: "Overhead Triceps Extensions",
        searchText: "Overhead Triceps Extensions"
      },
      {
        id: 9,
        name: "Half Squats",
        searchText: "Half Squats"
      },
      {
        id: 10,
        name: "Dumbbell Lunges",
        searchText: "Dumbbell Lunges"
      }
    ];
   
    selectedName: any = this.names[0];
   
    public nameSelected(names) {
      this.exerciseName = names ? names.name : 'none';
      this.current = names.name;
    }




    //  



constructor(private dataService:DataService,private http: Http, public user: GainzService, private router: Router ) { } // private http: Http

  ngOnInit() {
    if(this.user.name == null){
        this.router.navigate(['/login']);
    }
     
     this.exercises =[];
     this.completedExercises=[];
     this.completedExercises2=[];
     this.me = this.user.name;
      
       
    }
    myClickFunction(event) { 
        
         this.isavailable = false;
      }
    

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
        this.isavailable=false;
        for(let i = 0; i  < this.completedExercises.length;i++){
            this.completedExercises2.push(this.completedExercises[i]);
         }
         
            
             this.completedExercises.length = 0;
            
         
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
