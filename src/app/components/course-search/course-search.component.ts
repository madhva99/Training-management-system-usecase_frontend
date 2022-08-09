import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classFile/course';
import { CourseOperationsService } from 'src/app/services/course-operations.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {
  course1:Course[]
  message:string
  sw:string
  constructor(private courseOps:CourseOperationsService,private sharedService:SharedServiceService) { }

  ngOnInit(): void {
    this.sw= this.sharedService.getSW()
    this.courseData()
  }
  courseData(){
    this.courseOps.courseSearch(this.sw).subscribe(
      data=>{this.course1=data
      this.message=" "
      },
      error=>this.message="Serached course not available"
    )   
  }
}
