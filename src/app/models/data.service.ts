import { Injectable } from '@angular/core';

@Injectable()

export class DataService {
  
  shoulders = ['Seated Press', 'Lateral Raises'];
  chest = ['Press','Incline Flies'];
  back =[ 'Single-arm Row','Dead Lifts'];
  arms =[ 'Hammer Curls','Overhead Tri-extensions'];
  legs =[ 'Half Squats','Dumbbell Lunges'];
  
  
  constructor() { }
}
// model folder. move all.
