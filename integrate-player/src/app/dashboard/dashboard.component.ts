import { Component, OnInit } from '@angular/core';
import { MyrouteService } from '../myroute.service';
import { HttpClient } from '@angular/common/http';
import { CricapiService } from '../cricapi.service';
import { Player } from 'player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  players: Array<Player>;
 
  constructor(private routeSercive: MyrouteService,private mycric :CricapiService) {

  }
  ngOnInit() {
  this.playerfetch();
    
  }
  playerfetch()
  {
    this.mycric.getdata().subscribe(res=>
      {
        console.log(res);
        this.players=res["data"];
      });
  }
 /*logout(){
    this.routeSercive.openlogin();
  }*/

}/*
export class DashboardComponent implements OnInit {
 
  playerName: any;
  // players:Player;
 players: Array<Player>;
  pid: any;
  message: string;
// var player=new player();
  constructor(private myroute :Router,private httpclient:HttpClient,private findplayerservice:CricapiService) { 
   
  }

  ngOnInit() {
    // this.playerName=event.target.value;
    // console.log('playername',this.playerName);

    // return this.httpclient.get(this.apiUrl).subscribe(data=>{
    //   console.log(data);
    //   this.data=data["players"]["players"]
      //console.log(this.data["name"])
    // this.findplayerservice.getPlayerDetails().subscribe(players => {
    //    console.log(players);
    //      this.players = players ;
    //      console.log(this.players.pid);
    //   });
    
  }
// gotofav(){
//   this.router.routeToFindplayerPage();
// }
// gotorecomm(){
//   this.router.routeToRecommplayerPage();
// }
onKey(event: any){
  this.playerName = event.target.value;
  //console.log('playerName', this.playerName);
  this.findplayerservice.getPlayerDetails(this.playerName).subscribe(data => {
    //console.log(data);
    this.players = data;
  });
}
// showPlayerStats(player){
//   console.log('inside Player Statistics', player);
//   let navigationExtras: NavigationExtras = {
//     queryParams:{
//       "pid":player.pid,
//       "fullName":player.fullName
//     }
//   };
//   this.router.navigate(['playerstat'], navigationExtras);
// }
addToFavouriteList()
{
  this.myroute.navigate(['favpage']);
}
gotofav()
{
  this.myroute.navigate(['favpage']);

}
addToRecomndedList()
{
  this.myroute.navigate(['Recpage'])
}
gotorecomm()
{
  this.myroute.navigate(['Recpage'])

}
}

*/
