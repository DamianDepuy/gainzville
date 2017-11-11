import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WorkoutComponent,
    ExercisesComponent,
    SignupComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: "main", component: MainComponent },
        { path: "workout", component:WorkoutComponent },
        { path: "exercises", component: ExercisesComponent },
        { path: "signup", component: SignupComponent },
    
        { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
