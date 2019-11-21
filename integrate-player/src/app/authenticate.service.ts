import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/Rx';
import { Tokens } from 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  url :string;
  constructor(private httpserve: HttpClient) {
    this.url="http://localhost:9093/myboot/login";
   }

  validateUser(data)
  {
return this.httpserve.post(this.url,data);
    

  }


   setBearerToken(token) {
    localStorage.setItem('Bearertoken', token);
  }

  getBearerToken() {
    return(localStorage.getItem('Bearertoken'));
  }

  getTokenExpirationDate(token:string):Date{
  
    const decodedValue= new Tokens(token);

    if(decodedValue.exp===undefined) return null;

    const date= new Date(0);

    date.setUTCSeconds(decodedValue.exp);

    return date;

  }

 

  isTokenExpired(token?:string):boolean{

    if(!token) token =this.getBearerToken();

    if(!token) return true;

    const date=this.getTokenExpirationDate(token);

    if(date===undefined || date===null) return false;

    return !(date.valueOf() > new Date().valueOf());

  }
  /*
  isUserAuthenticated(token): Promise<boolean> {
    return this.httpserve.post(`${this.url}isAuthenticated` , {}, 
    {headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)})
    .map(
      (res) => { return(res['isAuthenticated']);}).toPromise();
  }
  */
}
