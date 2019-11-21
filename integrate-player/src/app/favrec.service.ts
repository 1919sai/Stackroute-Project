import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Player } from 'player';

@Injectable({
  providedIn: 'root'
})
export class FavrecService {

  rdata:any;
  ei:any;
  constructor(private httpserve : HttpClient) { 
    this.ei=localStorage.getItem("eid");
  }
  addfavourite(rdata){
    return this.httpserve.post('http://localhost:8011/add', rdata);
  }

  getfavourite():Observable<any>{
    console.log(this.ei);
    return this.httpserve.get<Player>(`http://localhost:8011/favourites/${this.ei}`);
  }

  delfavourite(recId) :Observable<any>{
    return this.httpserve.delete(`http://localhost:8011/del/${recId}`);
  }
  addrecommend(rdata){
    return this.httpserve.post('http://localhost:8071/add', rdata);
  }

  getrecommend():Observable<any>{
    console.log(this.ei);
    return this.httpserve.get<Player>(`http://localhost:8071/recommends/${this.ei}`);
  }

  delrecommend(recId) :Observable<any>{
    return this.httpserve.delete(`http://localhost:8071/del/${recId}`);
  }
}
