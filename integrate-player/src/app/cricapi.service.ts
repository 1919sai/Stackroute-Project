import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Player } from 'player';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CricapiService {
  showPlayer(pid: any) {
    throw new Error("Method not implemented.");
  }
  apiKey: string;
username: string;
  constructor(private myhttp: HttpClient) {
  this.apiKey = 'qdiUzvQUSff18EgA4nfIXA34Nbh1';
}
  
  getdata(): Observable<any> {
      return this.myhttp.get<Player>("https://cricapi.com/api/playerFinder?apikey=qdiUzvQUSff18EgA4nfIXA34Nbh1&name=a");
      //.pipe( map(this.getImage.bind(this)));
      
  
}
getPlayer(searchValue: string) : Observable<Array<Player>> {
  const data = {"name": searchValue, "apikey": this.apiKey};
  return this.myhttp.post(`https://cricapi.com/api/playerFinder?apikey=`, data).pipe(
      map(this.getResult),
    map(this.getImage.bind(this))
  );
}

getPlayerStat(pid:any){
  return this.myhttp.get(`https://cricapi.com/api/playerStats?apikey=qdiUzvQUSff18EgA4nfIXA34Nbh1&pid=${pid}`);
}
  getResult(response) {
    return response['data'];
  }
  getImage(players) : Array<Player> {
    return players.map((player) => {
      player.imageURL =`https://www.cricapi.com/playerpic/${player.pid}.jpg`;
      return player;
    })
  }
 
  
}
