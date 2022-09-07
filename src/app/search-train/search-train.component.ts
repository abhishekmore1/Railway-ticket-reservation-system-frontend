import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { RegistrationServieService } from './../registration-servie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css'],
})
export class SearchTrainComponent implements OnInit {
  trains: any;
  source: any;
  destination: any;

  constructor(
    private service: RegistrationServieService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let response = this.service.getAllTrains();
    response.subscribe((data) => (this.trains = data));
  }

  searchTrain(source: any, destination: any) {
    let response = this.service.searchTrainByFromAndTo(source, destination);
    response.subscribe((data) => (this.trains = data));
    console.log(this.trains);
  }

  reset() {
    let response = this.service.getAllTrains();
    response.subscribe((data) => (this.trains = data));
  }

  public bookTicket(trainId: any) {
    if (this.userAuthService.isLoggedIn()) {
      this.router.navigate(['/bookTicket']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
