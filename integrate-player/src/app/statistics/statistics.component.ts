import { Component, OnInit, Input } from '@angular/core';
import { CricapiService } from '../cricapi.service';
import { Player } from 'player';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/RX';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
pid: any;
  playerStats: any;
  constructor(private playsservice:CricapiService,private active:ActivatedRoute) {
  }
  



  ngOnInit() {
    
     this.pid=localStorage.getItem("playid");

     this.playsservice.getPlayerStat(this.pid).subscribe(data =>{
      //this.stat[]=data["data"];

       //console.log(data);
      

       this.playerStats = data;
       //console.log(this.playerStats.imageURL)
     }); 
      

    }
    
  }

