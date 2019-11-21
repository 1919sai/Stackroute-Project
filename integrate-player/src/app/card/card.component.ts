import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'player';
import { CricapiService } from '../cricapi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 // players: Array<Player> = [];
 @Input() player:Player;
 // errMessage: string;
  constructor(private mycric: CricapiService) { 
   // this.players=[];
  }
  ngOnInit() {
    this.player=new Player();

    /*this.mycric.getdata().subscribe(
      result => this.players = result,
      err => {
        this.errMessage = err.error.message;
      }
    );*/
  }
}