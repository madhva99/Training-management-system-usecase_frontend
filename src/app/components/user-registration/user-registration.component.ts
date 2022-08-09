import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classFile/user';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user=new User()
  message:string
  message1:string
  constructor(private userService:UserLoginService,private route:Router) { }

  ngOnInit(): void {
  }
  userRegister(){
    this.userService.registerUser(this.user).subscribe(
      data=>{
        alert("Registration successful")
        // this.user.role="user"
        this.route.navigate(['/userLogin'])
      },
      error=>{
        this.message="User with email already exists or entered field is invalid"
        this.message1="Fields should not be left empty"
      }
    )
  }
}
