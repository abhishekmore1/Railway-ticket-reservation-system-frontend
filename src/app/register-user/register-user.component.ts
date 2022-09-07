import { RegistrationServieService } from './../registration-servie.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: any=new User("","","","");
  message:any;

  constructor(private service:RegistrationServieService) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let response=this.service.userRegistration(this.user);
    response.subscribe((data)=>this.message);
  }

}
