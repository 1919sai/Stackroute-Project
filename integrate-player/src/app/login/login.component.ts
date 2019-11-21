import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UseraddService } from '../useradd.service';
import { AuthenticateService } from '../authenticate.service';
import { MyrouteService } from '../myroute.service';
import { Router } from '@angular/router';
import { Loginuser } from 'login';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginform : FormGroup;
  loginobj : Loginuser;
  token :any;
errmsg:string;
  constructor(private snack:MatSnackBar,private formBuilder : FormBuilder,private cricrout:Router,private myroute:MyrouteService,private myserve : AuthenticateService) {
    this.loginform=this.formBuilder.group({
         emailId : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
         userPassword : ['',Validators.compose([Validators.required,Validators.minLength(9)])]
         })
          this.loginobj    = new Loginuser();  

   }

  ngOnInit() {
    
  }
   validate(fmy : FormGroup) : void
   {
 // console.log(fmy.value) ;  
  this.loginobj=fmy.value;
  
  let record=({emailId:this.loginobj.emailId,
    userPassword:this.loginobj.userPassword});
    console.log(record);
    this.myserve.validateUser(record)
    .subscribe(
      (data)=>
      {
        this.token = data['token'];
       this.myserve.setBearerToken(this.token);
        console.log("user token");
        console.log(data);
        //console.log(this.emailId);
        localStorage.setItem("eid",this.loginobj.emailId);
        console.log("Inside login");
        this.cricrout.navigate(['dashboardpage']);  

        
      },
      (err)=>
      {
        if(err.status==200)
        {
          let snackconfig=this.snack.open("User Registered");
          setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
          window.location.reload();
        }
        else if(err.status==401)
        {
          let snackconfig=this.snack.open("Invalid Email/Pass");
          setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
          window.location.reload();
        

        
        }
      }
    
    )
   }

   register(){
    this.myroute.openregister();
  }
}
/*
export class LoginComponent implements OnInit {

  ngOnInit() {
  }
  
  title = 'FinalApp';
  emailId: FormControl;
  userPassword:FormControl;
  submitMessage:any;
  token :any;
constructor(private myserve : AuthenticateService,private myroute:MyrouteService,private cricrout:Router)
{
 this.emailId=new FormControl('',[Validators.required,Validators.email]);
 this.userPassword=new FormControl('',[Validators.required,Validators.minLength(9)]);
}

  loginSubmit()
  {
    if (this.userPassword.hasError('required')||this.emailId.hasError('required')) {
      this.submitMessage = 'Username and Password required';
      window.alert("Enter all Fields");
    } else {
  let record=({emailId:this.emailId.value,
          userPassword:this.userPassword.value});
          this.myserve.validateUser(record)
          .subscribe(
            (data)=>
            {
              this.token = data['token'];
             this.myserve.setBearerToken(this.token);
              console.log("user token");
              console.log(data);
              //console.log(this.emailId);
              localStorage.setItem("eid",this.emailId.value);
              console.log("Inside login");
              this.cricrout.navigate(['dashboardpage']);  

              
            }
          ),
          (err)=>{
            if (err.status == 401){
            console.log();
            window.alert("Inavalid Pwd/Email");
            }
          }
        }
  } 
  
register(){
  this.myroute.openregister();
}
}
*/