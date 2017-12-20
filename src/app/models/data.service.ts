import { Injectable } from '@angular/core';

@Injectable()

export class DataService {
  
  exerciseList = ['Bench Press', 'Dumbbell Flies'];
  chest = ['Bench','Flies','Incline Flies'];
  shoulders =[ 'Press','Rows'];
  
  constructor() { }
}
// model folder. move all.
