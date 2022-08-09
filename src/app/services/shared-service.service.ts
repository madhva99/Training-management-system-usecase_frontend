import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  uName: string;
  managerName: string;
  mEmail: string;
  mId: number;
  sw: string

  constructor() { }
  getuName() {
    return this.uName;
  }
  setuName(value) {
    this.uName = value;
  }
  getmanagerName() {
    return this.managerName
  }
  setMangerName(val) {
    this.managerName = val
  }
  getMid() {
    return this.mId
  }
  setMid(val1) {
    this.mId = val1
  }
  getMemail() {
    return this.mEmail
  }
  setMemail(val3) {
    this.mEmail = val3
  }
  getSW() {
    return this.sw
  }
  setSW(valsw) {
    this.sw = valsw
  }
}
