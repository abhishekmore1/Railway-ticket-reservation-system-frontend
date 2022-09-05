import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authRequest:any={
    "username":"Dhaaneshwar@gmail.com",
    "password":"abc"
  };

  constructor(private service:RegistrationServieService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest:any){
    let response=this.service.generateToken(authRequest);
    response.subscribe(data=>console.log(data));
  }

}