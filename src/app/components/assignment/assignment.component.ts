import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseAssign } from 'src/app/classFile/course-assign';
import { CourseAssignService } from 'src/app/services/course-assign.service';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  courseAssign=new CourseAssign()
  message:string
  constructor(private courseAssignService:CourseAssignService,private route:Router) { }

  ngOnInit(): void {
  }
  assignmentAddition(){
    this.courseAssignService.addAssignment(this.courseAssign).subscribe(
      data=>{
        alert("Course assigned successfully!")
        this.route.navigate(['/assignView'])
      },
      error=>{
        this.message="Assignment already exists or entered fields invalid"
      }
    )
  }
}
