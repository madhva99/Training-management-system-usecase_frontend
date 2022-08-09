import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classFile/course';
import { ManagerLoginService } from 'src/app/services/manager-login.service';
import { CourseOperationsService } from 'src/app/services/course-operations.service';
import { Router } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupProfileComponent } from '../popup-profile/popup-profile.component';
import { CourseSearchComponent } from '../course-search/course-search.component';
import { AlterRoleComponent } from '../alter-role/alter-role.component';

@Component({
  selector: 'app-progress-tracking',
  templateUrl: './progress-tracking.component.html',
  styleUrls: ['./progress-tracking.component.css']
})
export class ProgressTrackingComponent implements OnInit {
  course: Course[]
  mName: string
  mId: number
  mEmail: string

  constructor(private managerService: ManagerLoginService, private courOp: CourseOperationsService, private route: Router, private sharedService: SharedServiceService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCourses()
    this.mName = this.sharedService.getmanagerName()
    this.mId = this.sharedService.getMid()
    this.mEmail = this.sharedService.getMemail()

    console.log(`${this.mName} ${this.mId} ${this.mEmail}`)
  }
  setName(cname: string) {
    this.sharedService.setSW(cname)
    this.dialog.open(CourseSearchComponent,{
      height: '60%',
      width:'60%',
      autoFocus: false,
   })
  }
  getAllCourses() {
    this.managerService.getCourses().subscribe(
      data => this.course = data
    )
  }
  popUp() {
    this.dialog.open(PopupProfileComponent)
  }
  popUpUser() {
    this.dialog.open(AlterRoleComponent)
  }

  deleteCourse(id: number) {
    this.courOp.courseDeletion(id).subscribe(
      data => console.log("deleted"),
      error => window.location.reload()
    )
  }
}
