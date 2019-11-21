import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  url:string;
  url1:string;
  url2:string;
  emailId:string;
  http: any;
  ei:string;
  user:User;
  constructor(private httpserve : HttpClient) {
    this.ei=localStorage.getItem("eid");
    console.log(this.emailId);
    console.log(this.ei);
    this.url="http://localhost:9093/myboot/add";
//this.user=new User();
    this.url1=`http://localhost:9093/user/getupd/${this.ei}`; //get
    this.url2=`http://localhost:9093/user/update/${this.ei}`;   //update
    
}
addrec(data):Observable<any>
  {
    return this.http.post(this.url,data);
  }
  updaterec(user:User):Observable<any>
  {
    return this.httpserve.put<User>(this.url2,user);
  }

  fetchrec():Observable<any>
  {
    return this.httpserve.get<User>(this.url1);
  }
}