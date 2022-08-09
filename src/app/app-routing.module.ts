import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressTrackingComponent } from './components/progress-tracking/progress-tracking.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AssignmentViewComponent } from './components/assignment-view/assignment-view.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { PopupProfileComponent } from './components/popup-profile/popup-profile.component';
import { AlterRoleComponent } from './components/alter-role/alter-role.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'progressTrack', component: ProgressTrackingComponent },
  { path: 'managerLogin', component: ManagerLoginComponent },
  { path: 'addCourse', component: CourseAddComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'userPage', component: UserPageComponent },
  { path: 'userReg', component: UserRegistrationComponent },
  { path: 'assignView', component: AssignmentViewComponent },
  { path: 'assigning', component: AssignmentComponent },
  { path: 'popupProfile', component: PopupProfileComponent },
  {path:'alterRole',component:AlterRoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
