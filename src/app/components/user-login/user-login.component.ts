import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classFile/user';
import { UserLoginService } from 'src/app/services/user-login.service';
import { NgModule } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:User[]
  user1=new User()
  message:string
  
  constructor(private userService:UserLoginService,private route:Router,private sharedService:SharedServiceService) { }

  ngOnInit(): void {
    this.getUserData()
    
  }
  getUserData(){
    this.userService.getAllUser().subscribe(
      data=>this.user=data
    )
  }
  userLogin(){
    this.userService.userLogin(this.user1).subscribe(
      data=>{
        console.log(JSON.stringify(this.user))
        for (let i=0;i<this.user.length;i++){
          if(this.user[i].role=="manager" && this.user[i].userEmail==this.user1.userEmail){
            console.log("manager role")
            alert(`welcome ${this.user[i].userName}`)
            this.sharedService.setMangerName(this.user[i].userName)
            this.sharedService.setMid(this.user[i].userId)
            this.sharedService.setMemail(this.user[i].userEmail)
            this.route.navigate(['/progressTrack'])
             break
          }else if(this.user[i].role=="user" && this.user[i].userEmail==this.user1.userEmail){
            console.log("not manager "+this.user1.userEmail)
            this.sharedService.setuName(this.user[i].userName)
            this.route.navigate(['/userPage'])
            break
          }
      }
      },
      error=>this.message="Invalid credentials"
    )
  }
}
