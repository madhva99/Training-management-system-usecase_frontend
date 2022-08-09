import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-popup-profile',
  templateUrl: './popup-profile.component.html',
  styleUrls: ['./popup-profile.component.css']
})
export class PopupProfileComponent implements OnInit {

  mName:string
  mId:number
  mEmail:string

  constructor(private sharedService:SharedServiceService) { }

  ngOnInit(): void {
    this.mName= this.sharedService.getmanagerName()
    this.mId=this.sharedService.getMid()
    this.mEmail=this.sharedService.getMemail()
  }

}
