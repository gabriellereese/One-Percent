import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GoalsComponent } from './goals/goals.component';
import { DailygoalsComponent } from './dailygoals/dailygoals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuotesService } from './quotes.service';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
