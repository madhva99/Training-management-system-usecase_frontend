import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressTrackingComponent } from './components/progress-tracking/progress-tracking.component';
import { ManagerLoginComponent } from './components/manager-login/manager-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { AssignmentViewComponent } from './components/assignment-view/assignment-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { PopupProfileComponent } from './components/popup-profile/popup-profile.component'
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CourseSearchComponent } from './components/course-search/course-search.component';
import { AlterRoleComponent } from './components/alter-role/alter-role.component'

@NgModule({
  declarations: [
    AppComponent,
    ProgressTrackingComponent,
    ManagerLoginComponent,
    HomePageComponent,
    CourseAddComponent,
    UserLoginComponent,
    UserPageComponent,
    UserRegistrationComponent,
    AssignmentComponent,
    AssignmentViewComponent,
    PopupProfileComponent,
    CourseSearchComponent,
    AlterRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
