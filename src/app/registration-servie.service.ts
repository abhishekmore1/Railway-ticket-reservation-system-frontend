import { HttpClient } from '@angular/common/http';
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

  public getAllTrains(){
    return this.http.get("http://localhost:8100/user/getAllTrain");
  }

  public getTrain(id:any){
    return this.http.get("http://localhost:8100/user/getTrain"+id);
  }

  public searchTrainByFromAndTo(source:any,destination:any) {
    return this.http.get("http://localhost:8100/user/"+source+"/and/"+destination,{responseType:'text' as 'json'});
  }
  
}
