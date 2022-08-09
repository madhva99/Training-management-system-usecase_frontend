import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseAssign } from '../classFile/course-assign';

@Injectable({
  providedIn: 'root'
})
export class CourseAssignService {

  constructor(private httpClient:HttpClient) { }
  
  addAssignment(courseAssign:CourseAssign):Observable<any>{
    return this.httpClient.post("http://localhost:9095/courseAssign/addCourse",courseAssign);
  }

  deleteAssignment(id:number):Observable<any>{
    return this.httpClient.delete("http://localhost:9095/courseAssign/deleteAssignment/"+id);
  }

  viewAssignment():Observable<any>{
    return this.httpClient.get("http://localhost:9095/courseAssign/viewAssignments");
  }
}
