import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServieService {
  

  constructor(private http:HttpClient) { }

  public userRegistration(user: User){
    return this.http.post("http://localhost:8100/user/userRegistration",user,{responseType:'text' as 'json'});
  }

  public generateToken(request:any){
    return this.http.post("http://localhost:8100/user/authenticate",request,{responseType:'text' as 'json'});
  }
  public welcome(token:any){
    let tokenStr="Bearer "+token;
    const headers=new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get("http://localhost:8100/user/",{headers,responseType:'text' as 'json'});
  }

  public getAllTrains(){
    return this.http.get("http://localhost:8100/user/getAllTrain");
  }

  public getTrain(id:any){
    return this.http.get("http://localhost:8100/user/getTrain"+id);
  }

  public searchTrainByFromAndTo(source:any,destination:any) {
    return this.http.get("http://localhost:8100/user/"+source+"/and/"+destination);
  }
  
}