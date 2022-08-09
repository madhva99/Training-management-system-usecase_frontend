import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../classFile/manager';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ManagerLoginService {

  constructor(private httpClient:HttpClient) { }

  public managerLogin(manager:Manager):Observable<any>{
    return this.httpClient.post("http://localhost:9095/manager/loginManager",manager)
  }

  public getCourses():Observable<any>{
    return this.httpClient.get("http://localhost:9095/course/viewAllCourse")
  }
}
