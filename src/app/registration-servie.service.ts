import { Train } from './train';
import { TicketDetails } from './bookTicket';
import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class RegistrationServieService {
  constructor(private http: HttpClient) {}

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

  public userRegistration(user: User) {
    return this.http.post('http://localhost:8100/user/userRegistration', user, {
      responseType: 'text' as 'json',
    });
  }

  public login(loginData: any) {
    return this.http.post(
      'http://localhost:8100/user/authenticate',
      loginData,
      { headers: this.requestHeader, responseType: 'json' }
    );
  }

  // public generateToken(request: any) {
  //   return this.http.post('http://localhost:8100/user/authenticate', request, {
  //     responseType: 'json',
  //   });
  // }
  // public welcome(token: any) {
  //   let tokenStr = 'Bearer ' + token;
  //   const headers = new HttpHeaders().set('Authorization', tokenStr);
  //   return this.http.get('http://localhost:8100/user/', {
  //     headers,
  //     responseType: 'text' as 'json',
  //   });
  // }

  public getAllTrains() {
    return this.http.get('http://localhost:8100/user/getAllTrain');
  }

  public getTrain(id: any) {
    return this.http.get('http://localhost:8100/user/getTrain' + id);
  }

  public searchTrainByFromAndTo(source: any, destination: any) {
    return this.http.get(
      'http://localhost:8100/user/' + source + '/and/' + destination
    );
  }

  public ticketBooking(trainId: any, ticketDetails: TicketDetails) {
    return this.http.post(
      'http://localhost:8100/user/bookTicket/' + trainId,
      ticketDetails,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  public getMyBooking(email: any) {
    return this.http.get('http://localhost:8100/user/viewTicket/' + email, {
      responseType: 'json',
    });
  }

  public cancelMyTicket(pnr: any) {
    return this.http.delete('http://localhost:8100/user/cancelTicket/' + pnr, {
      responseType: 'text' as 'json',
    });
  }

  public updateMe(userId: any, user: User) {
    return this.http.put(
      'http://localhost:8100/user/updateUser/' + userId,
      user,
      {
        responseType: 'text' as 'json',
      }
    );
  }
}
