import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyrouteService {
  

  constructor(private rt:Router)
  { 

  }

 openlogin()
 {
this.rt.navigate(['loginpage']);
 }
 openregister()
 {
  this.rt.navigate(['registerpage']);

 }
 openDashboard() {
  this.rt.navigate(['dashboardpage']);
}
openfav()
{
  this.rt.navigate(['favpage']);
}
openrec()
{
  this.rt.navigate(['Recpage']);
}
}
