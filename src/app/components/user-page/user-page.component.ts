import { Component, OnInit} from '@angular/core';
import { CourseAssign } from 'src/app/classFile/course-assign';
import { CourseStatus } from 'src/app/classFile/course-status';
import { CourseAssignService } from 'src/app/services/course-assign.service';
import { CourseStatusService } from 'src/app/services/course-status.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { AssignmentViewComponent } from '../assignment-view/assignment-view.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  courseView:CourseAssign[]
  courses:string[]=[]
  uName:string
  u2Name:string
  // c2name:string[]=[]
  bText:string="Complete"
  courseStatus=new CourseStatus()
  // compCourses:CourseStatus[]
  // dateTime:Date[]=[]
  // dateTime:Date
  constructor(private courseAssignService:CourseAssignService,private sharedService:SharedServiceService,private courseStatusService:CourseStatusService) { }

  ngOnInit(): void {
    this.assignedCourses()
  }
  assignedCourses(){
    this.courseAssignService.viewAssignment().subscribe(
      data=>{this.courseView=data
            this.uName=this.sharedService.getuName()
            console.log(this.uName+" user page")
            console.log(JSON.stringify(this.courseView))
        for (let i=0;i<=this.courseView.length;i++){
          if(this.courseView[i].userName==this.uName){
            // console.log(this.courseView[i].courseName)
            this.courses.push(this.courseView[i].courseName)
          }
        }
      }
    )
  }
  getUserCourse(uName:string,cour:string){
    this.courseStatus.uName=uName
    this.courseStatus.cName=cour
    this.courseStatusService.StatusAdd(this.courseStatus).subscribe(
      data=>{
        // this.compCourses=data
        // this.uName=this.sharedService.getuName()
        // for(let j=0;j<=this.compCourses.length;j++){
        // if(this.compCourses[j].uName==this.uName){
        //   this.c2name.push(this.compCourses[j].cName)
        //   this.dateTime.push(this.compCourses[j].dateTime)
        // }

        // }
        // this.dateTime=new Date()
        alert("Status notified to manager")
        // this.c2name.push(cour)
      },
      error=>alert("Status is already completed")
    )
    // console.log(this.u2Name,this.c2name)
    // this.bText="Completed"
  }
}
