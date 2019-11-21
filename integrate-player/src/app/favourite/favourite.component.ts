import { Component, OnInit } from '@angular/core';
import { Player } from 'player';
import { FavrecService } from '../favrec.service';
import { UseraddService } from '../useradd.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
 
  robj: Player;
  Errmsg:any;
  emailId:any;
  eid:any;
  players: Array<Player>;

  constructor(private snack:MatSnackBar,private myrec:UseraddService,private myfav:FavrecService,private myroute:Router) {
    this.getfavbyemail();
    this.robj=new Player();
    this.players=[];

   }
  
  getfavbyemail(){
    this.myfav
    .getfavourite()
    .subscribe(data => {
      this.robj = data;
      console.log(this.robj);
      this.players=data;
      //console.log(this.robj.emailId);
      //this.eid=localStorage.getItem("eid");
      console.log(this.eid);
      console.log(this.robj.favId);
      if(Object.keys(this.players).length==0){
        //window.alert("No Favourites Present");
        let snackconfig=this.snack.open("No Favourites Present");
        setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
    
        this.myroute.navigate(['dashboardpage']);


      }

     

    //  this.myrec.getPlayerDetails(this.eid).subscribe(data => {
      
    //   this.players = data;
    // });



    }),
   (err)=>
   {
     this.Errmsg=err.message;
   }
  }
  
  delfav(favId:any)
  {
    this.myfav.delfavourite(favId).subscribe();
    let snackconfig=this.snack.open("Record Deleted");
        setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
         window.location.reload();

   // window.alert("Record Deleted");
    window.location.reload();

    //  this.myroute.navigate(['dashboardpage']);


  }
  godash()
  {
this.myroute.navigate(['dashboardpage']);
  }
  
  ngOnInit() {

    //let mail=localStorage.getItem('emailId')
    
  }

}