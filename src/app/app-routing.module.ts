import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { GoalsComponent } from './goals/goals.component';
import { DailygoalsComponent } from './dailygoals/dailygoals.component';

const routes: Routes = [
  { path: '',
  component: ProfileComponent
},
{ path: 'signin',
component: SigninComponent
},
{ path: 'signup',
component: SignupComponent
},
{ path: 'goals',
component: GoalsComponent
},
{ path: 'dailygoals',
component: DailygoalsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
