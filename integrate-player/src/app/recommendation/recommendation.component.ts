import { Component, OnInit } from '@angular/core';
import { UseraddService } from '../useradd.service';
import { Player } from 'player';
import { FavrecService } from '../favrec.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  
  robj: Player;
  Errmsg:any;
  emailId:any;
  eid:any;
  players: Array<Player>;

  constructor(private snack:MatSnackBar,private myrec:FavrecService,private myroute:Router) {
    this.getrecombyemail();
    this.robj=new Player();
    this.players=[];

   }
  
  getrecombyemail(){
    this.myrec
    .getrecommend()
    .subscribe(data => {
      this.robj = data;
      console.log(this.robj);
      this.players=data;
      //console.log(this.robj.emailId);
      //this.eid=localStorage.getItem("eid");
      console.log(this.eid);
      console.log(this.robj.recId);
      if(Object.keys(this.players).length==0){
        let snackconfig=this.snack.open("No Recommendations Present");
        setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
     
        // window.alert("No Recommendations Present");
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
  godash()
  {
this.myroute.navigate(['dashboardpage']);
  }
  delrecom(recId:any)
  {
    this.myrec.delrecommend(recId).subscribe(res=>{});
    let snackconfig=this.snack.open("Record Deleted");
    setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
 
    //window.alert("Record Deleted");
    window.location.reload();
    //this.myroute.navigate(['dashboardpage']);

   // this.ngOnInit();
   // this.ngOnInit();

  }
  
  ngOnInit() {

    //let mail=localStorage.getItem('emailId')
    
  }

}
