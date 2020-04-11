import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GoalsComponent } from './goals/goals.component';
import { DailygoalsComponent } from './dailygoals/dailygoals.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    GoalsComponent,
    DailygoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
