import { Component, OnInit, Input } from '@angular/core';
import { CricapiService } from '../cricapi.service';
import { Player } from 'player';
import { Router } from '@angular/router';
import { UseraddService } from '../useradd.service';
import { FavrecService } from '../favrec.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cricdata',
  templateUrl: './cricdata.component.html',
  styleUrls: ['./cricdata.component.css']
})
export class CricdataComponent implements OnInit {

  playerName: any;
  // players:Player;
 players: Array<Player>;
  pid: any;
  message: string;
  eid:string;
  player:any;

constructor (private snack:MatSnackBar,private myplay:CricapiService,private myroute:Router,private myrec:UseraddService,private myfav:FavrecService){
this.players=[];
//this.player=new Player();

//console.log(this.eid);
}

onKey(event: any){
  this.playerName = event.target.value;
  //console.log('playerName', this.playerName);
  this.myplay.getPlayer(this.playerName).subscribe(data => {
    //console.log(data);
    this.players = data;
  });
}
ngOnInit() {}
addToFavouriteList(rplayer)
{
  

 // this.myroute.navigate(['favpage']);
 this.eid=localStorage.getItem("eid");
 console.log(this.eid);
 let k;
 if(this.eid=="null")
 k=this.eid.trim.length;
 else
 k=this.eid.length;

 //console.log(k);
 if(k==0)
{
  this.myroute.navigate(['loginpage']);
} //if 
else
{

  this.player = {
    "pid":rplayer.pid,
    "name": rplayer.name,
    "imageURL": rplayer.imageURL,
    "emailId": this.eid
  }
console.log(this.player);

  this.myfav.addfavourite(this.player).subscribe(res => {
    console.log(res);
    window.location.reload();

  },
  err=>{
    if (err.status == 201){
      let snackconfig=this.snack.open("Added To Favourites");
          setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
    //console.log();
    //window.alert("Added to Favourite");
   // window.location.reload();

    }
  else{
   // window.alert("Already Exists");
   let snackconfig=this.snack.open("Already Exists");
          setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
  }
    
  }
  ); //subscri

  
  } //else
   
}
gotofav()
{
  this.eid=localStorage.getItem("eid");
 console.log(this.eid);

  let k;
 if(this.eid=="null")
 k=this.eid.trim.length;
 else
 k=this.eid.length;

 //console.log(k);
 if(k==0)
{
  this.myroute.navigate(['loginpage']);
}
else
  this.myroute.navigate(['favpage']);

}
gotofavo()
{
  this.myroute.navigate(['Statpage']);

}
gotoreco()
{
  this.myroute.navigate(['Recpage']);

}

//this.eid=localStorage.getItem(emailId);

addToRecommendList(rplayer)
{
  
  
 
  //this.myroute.navigate(['Recpage'])
  this.eid=localStorage.getItem("eid");
  let p;
 if(this.eid=="null")
 p=this.eid.trim.length;
 else
 p=this.eid.length;

 console.log(p);
 if(p==0)
{
  this.myroute.navigate(['loginpage']);
}
else
{
 
  this.player = {
    "pid":rplayer.pid,
    "name": rplayer.name,
    "imageURL": rplayer.imageURL,
    "emailId": this.eid
  }
console.log(this.player);

  this.myfav.addrecommend(this.player).subscribe(res => {
    console.log(res);
    window.location.reload();
  },
  error=>{
    if (error.status == 201){
      let snackconfig=this.snack.open("Added To Recommendations");
          setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
    
   // console.log();
   // window.alert("Added to Recommendations");
    }
  else{
    let snackconfig=this.snack.open("Already Exists");
          setTimeout(snackconfig.dismiss.bind(snackconfig),7000);
    
   // window.alert("Already Exists");
  }
  }
  );

}
  
}


gotorecomm()
{
  this.eid=localStorage.getItem("eid");
 console.log(this.eid);

  let k;
 if(this.eid=="null")
 k=this.eid.trim.length;
 else
 k=this.eid.length;

 //console.log(k);
 if(k==0)
{
  this.myroute.navigate(['loginpage']);
}
else
  this.myroute.navigate(['Recpage'])

}
gotostat(pid)
{
  /*
  if(Object.keys(this.players).length==0){
    window.alert("No Stats Present");
    this.myroute.navigate(['dashboardpage']);
  }*/
  localStorage.setItem("playid",pid);

this.myroute.navigate(['Statpage']);
//this.myroute.navigate(['dashboardpage']);

  

}
logout(){
  localStorage.setItem("eid",null);

  this.myroute.navigate(['loginpage']);
}
upd(){
  this.eid=localStorage.getItem("eid");
 console.log(this.eid);

  let k;
 if(this.eid=="null")
 k=this.eid.trim.length;
 else
 k=this.eid.length;

 //console.log(k);
 if(k==0)
{
  this.myroute.navigate(['loginpage']);
}
else
  this.myroute.navigate(['updpage']);
}
/*
  this.mycric.getdata().subscribe((res)=>
  {
    console.log("Players");
    this.players=res['data'];
console.log(res);
  });*/
  


}
