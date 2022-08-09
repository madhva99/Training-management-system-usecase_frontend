import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classFile/user';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-alter-role',
  templateUrl: './alter-role.component.html',
  styleUrls: ['./alter-role.component.css']
})
export class AlterRoleComponent implements OnInit {

  user: User[]
  constructor(private userService:UserLoginService) { }

  ngOnInit(): void {
    this.allUser()
  }
  allUser(){
    this.userService.getAllUser().subscribe(
      data=>this.user=data
    )
  }
  roleUpdate(role:string,username:string){
    console.log(role+" "+username)
    this.userService.updateRole(role,username).subscribe(
      data=>alert("Role updated"),
      error=>alert("Same role")
    )
  }
}
