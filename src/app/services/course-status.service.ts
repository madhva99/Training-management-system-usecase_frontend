import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseStatus } from '../classFile/course-status';

@Injectable({
  providedIn: 'root'
})
export class CourseStatusService {

  constructor(private httpClient:HttpClient) { }

  StatusAdd(courseStatus:CourseStatus):Observable<any>{
    return this.httpClient.post("http://localhost:9095/courseStatus/addStatus",courseStatus)
  }
  statusView():Observable<any>{
    return this.httpClient.get("http://localhost:9095/courseStatus/viewStatus")
  }
}
