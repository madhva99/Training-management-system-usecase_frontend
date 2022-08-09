import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/classFile/course';
import { CourseOperationsService } from 'src/app/services/course-operations.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  course= new Course()
  message:string
  message1:string
  constructor(private courseService:CourseOperationsService,private route:Router) { }

  ngOnInit(): void {
  }

  addCourse(){
    this.courseService.courseAddition(this.course).subscribe(
      data=>{
        alert(`Course added successfully `),
        this.route.navigate(["/progressTrack"])
      },
      error=>{
        this.message="Course already exists or Entered field is not valid",
              this.message1="Field cannot be left empty"
      }
    )
  }
}
