import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../classFile/course';

@Injectable({
  providedIn: 'root'
})
export class CourseOperationsService {

  constructor(private httpClient:HttpClient) { }

  public courseDeletion(id:number):Observable<any>{
    return this.httpClient.delete<any>("http://localhost:9095/course/deleteCourse/"+id)
  }
  public courseAddition(course:Course):Observable<any>{
    return this.httpClient.post("http://localhost:9095/course/addCourse",course)
  }
  public courseSearch(searchWord:string):Observable<any>{
    return this.httpClient.get("http://localhost:9095/course/searchCourse/"+searchWord)
  }
}
