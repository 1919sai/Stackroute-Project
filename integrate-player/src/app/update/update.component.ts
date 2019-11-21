import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { FormControl } from '@angular/forms';
import { User } from 'user';
import { UpdateService } from '../update.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user: User = new User();
  //   ngOnInit()
    
  //   {
  // this.get_btn();
  // this.uobj=new User();
  //   }
    title = 'CricApp';
    Errmsg:String;
    uobj : User;
  constructor(private snack:MatSnackBar,private myserve : UpdateService,private uath:UpdateService,private routerService:Router)
  {
   this.get_btn();

   this.uobj=new User();
  }
  done_btn(){
    this.uath.updaterec(this.uobj)
    .subscribe
    (
      (res)=>
      {
        console.log(res);
        //window.alert("Record Updated Login With New Credentials");
        let snackconfig=this.snack.open("Record Updated Login With New Credentials");
        setTimeout(snackconfig.dismiss.bind(snackconfig),2000);
        localStorage.setItem("eid",null);

        this.routerService.navigate(['loginpage']);

      }
    ),
    (err)=>
    {
      this.Errmsg=err.message;
    }
  }
  get_btn(){
   this.uath.fetchrec()
   .subscribe
   (
     (res)=>
     {
       this.uobj=res;
       console.log("hi"+this.uobj);
       
     }
   ),
   (err)=>
   {
     this.Errmsg=err.message;
   }
  }
  login(){
 
   this.routerService.navigate(['loginpage']);
 }


 ngOnInit() {
   
 }
//  add_btn(){

//    // let record=({uid:this.uid.value,password:this.password.value,emailid:this.emailid.value,
//    //   firstname:this.firstname.value,lastname:this.lastname.value});
//      this.uath.updaterec(this.uobj)
//      .subscribe
//    (
//      (res)=>
//      {

//        this.user=res;
//        this.routerService.navigate(['updpage']);
//      }
//    ),
//    (err)=>
//    {
//      // console.log(err);
//      this.Errmsg=err.message;
//    }
//    console.log();
//    //this.routerService.routeToLogin();
//  }

   }
 