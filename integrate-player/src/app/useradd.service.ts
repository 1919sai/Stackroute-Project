import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { Player } from 'player';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UseraddService {
  url:string;
  rdata:any;
  emailId:any;
  rddata:any;
  ei:any;
  player:Player;
  constructor(private httpserve : HttpClient) { 
    this.ei=localStorage.getItem("eid");

    this.url="http://localhost:9093/myboot/add";
  }

  addrec(data)

  {
    return this.httpserve.post(this.url,data,{reportProgress:true,responseType:'text'});
  }

  

  

}
