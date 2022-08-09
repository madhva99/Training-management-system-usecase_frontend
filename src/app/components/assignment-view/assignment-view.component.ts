import { Component,  OnInit, ViewChild, ElementRef } from '@angular/core';
import { CourseAssign } from 'src/app/classFile/course-assign';
import { CourseStatus } from 'src/app/classFile/course-status';
import { CourseAssignService } from 'src/app/services/course-assign.service';
import { CourseStatusService } from 'src/app/services/course-status.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-assignment-view',
  templateUrl: './assignment-view.component.html',
  styleUrls: ['./assignment-view.component.css']
})
export class AssignmentViewComponent implements OnInit {
  courseAssign:CourseAssign[]
  courseStatus:CourseStatus[]
  // dateTime:Date
  @ViewChild('content',{static:false}) el!:ElementRef
  constructor(private courseAssignService:CourseAssignService,private sharedService:SharedServiceService,private courseStatusService:CourseStatusService) { }

  ngOnInit(): void {
    this.allAssignments()
    this.viewAllStatus()

    // console.log(JSON.stringify( this.courseAssign))
    // console.log(JSON.stringify( this.courseStatus))
  }
  allAssignments(){
    this.courseAssignService.viewAssignment().subscribe(
      data=>this.courseAssign=data
    )
    // this.courseStatusService.statusView().subscribe(
    //   data1=>this.courseStatus=data1
    // )
  }
  delAssign(id:number){
    this.courseAssignService.deleteAssignment(id).subscribe(
      data=>window.location.reload()
    )
  }
  viewAllStatus(){
    this.courseStatusService.statusView().subscribe(
      data=>{
        this.courseStatus=data
        // this.dateTime=new Date()
      }
    )
  }
  generateReport(){
    let pdf=new jsPDF('p','pt','a4')
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("Course_Status_Report.pdf")
      }
    })
  }
}
