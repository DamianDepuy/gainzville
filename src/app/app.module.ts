import { ServService } from './../../server/serv.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule} from '@angular/http'; // 

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WorkoutComponent } from './workout/workout.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { SignupComponent } from './signup/signup.component';
import { DataService } from './models/data.service';
import { LoginComponent } from './login/login.component';
import { GainzService } from './models/gainz.service';
import { Typeahead } from 'ng2-typeahead';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    WorkoutComponent,
    ExercisesComponent,
    SignupComponent,
    LoginComponent,
    Typeahead,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, // added
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
        { path: "main", component: MainComponent },
        { path: "workout", component:WorkoutComponent },
        { path: "exercises", component: ExercisesComponent },
        { path: "signup", component: SignupComponent },
        { path: "", pathMatch: "full", redirectTo: "/main" }
    ])
  ],
  providers: [DataService, GainzService, ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
