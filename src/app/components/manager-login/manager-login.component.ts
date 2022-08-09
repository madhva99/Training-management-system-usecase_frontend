import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/classFile/course';
import { Manager } from 'src/app/classFile/manager';
import { ManagerLoginService } from 'src/app/services/manager-login.service';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {
  message:string;
  manager =new Manager()
  
  constructor(private managerService:ManagerLoginService,private route:Router) { }

  ngOnInit(): void {
    
  }
  loginUser(){
    this.managerService.managerLogin(this.manager).subscribe(
      data=>{
        console.log("logged in successfully")
        this.route.navigate(["/progressTrack"])
        this.message=""
      },
      error=>{
        console.log("Invalid Credentials")
        // alert("Invalid Credentials")
        this.message="Invalid Credentials";
      }
    )
  }
 
}
