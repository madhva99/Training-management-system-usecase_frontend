import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classFile/user';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private httpClient:HttpClient) { }

  getAllUser():Observable<any>{
    return this.httpClient.get("http://localhost:9095/user/viewAllUser")
  }

  userLogin(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:9095/user/loginUser",user)
  }
  registerUser(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:9095/user/addUser",user)
  }
  updateRole(role:string,username:string):Observable<any>{
    return this.httpClient.post(`http://localhost:9095/user/updateRole/${role}/${username}`,{})
  }
}
