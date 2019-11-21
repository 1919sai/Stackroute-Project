import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { UseraddService } from '../useradd.service';
import { MyrouteService } from '../myroute.service';
import { Loginuser } from 'login';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  loginform : FormGroup;
  loginobj : Loginuser;
  constructor(private snack:MatSnackBar,private formBuilder : FormBuilder,private myserve : UseraddService,private myroute :MyrouteService)
  {
    this.loginform=this.formBuilder.group({
      userName : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      
      emailId : ['',Validators.compose([Validators.required,Validators.minLength(6)])],
      userPassword : ['',Validators.compose([Validators.required,Validators.minLength(9)])],
      conPassword : ['',Validators.compose([Validators.required,Validators.minLength(9)])],
     
      userPhone : ['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      userCity : ['',Validators.compose([Validators.required])]
      
    })
       this.loginobj    = new Loginuser();  

  }
  ngOnInit(){

  }
  regSubmit(fmy : FormGroup) : void
   {
 // console.log(fmy.value) ;  
  this.loginobj=fmy.value;
  
  let record=({emailId:this.loginobj.emailId,
    userPassword:this.loginobj.userPassword,
    userName:this.loginobj.userName,
    userPhone:this.loginobj.userPhone,
    userCity:this.loginobj.userCity
    
  });
  conPassword:this.loginobj.conPassword
  
  if(this.loginobj.userPassword!=this.loginobj.conPassword)
  {
    let snackconfig=this.snack.open("Password MisMatch");
    setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
     window.location.reload();

  }
  else
  {
    this.myserve.addrec(record).subscribe
    (
      (data)=>
      {
        console.log(data);
        let snackconfig=this.snack.open("User Registered");
        setTimeout(snackconfig.dismiss.bind(snackconfig),2000);
        //this.myroute.openlogin();
       
        window.location.reload();

      },
    
    (err)=>
    {
      if(err.status==201)
      {
        let snackconfig=this.snack.open("User Registered");
        setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
        window.location.reload();

      }
      else if(err.status==409)
      {
        let snackconfig=this.snack.open("Already Exists");
        setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
         window.location.reload();

      
      }
    }
    )

  }
  }
  
  /*

  ngOnInit() {
  }
  title = 'CricApp';
  emailId: FormControl;
  userPassword:FormControl;
  userName:FormControl;
  submitMessage: string;
constructor(private myserve : UseraddService,private myroute :MyrouteService)
{
 this.emailId=new FormControl('',[Validators.required,Validators.email]);
 this.userPassword=new FormControl('',[Validators.required,Validators.minLength(9)]);
 this.userName=new FormControl('',[Validators.required,Validators.minLength(6)]);
 
}

  loginSSubmit()
  {
    if(this.userPassword.hasError('required')||
    this.userName.hasError('required')||this.emailId.hasError('required')){
      window.alert("Fill all Fields");
    }
    else{
  let record=({emailId:this.emailId.value,
          userPassword:this.userPassword.value,
        userName:this.userName.value});

          this.myserve.addrec(record).subscribe();
       // console.log(record);
       window.alert("User Registered");
       //this.myroute.openlogin();

  }
          
  } 
  */
  login(){
    this.myroute.openlogin();
  }
}
