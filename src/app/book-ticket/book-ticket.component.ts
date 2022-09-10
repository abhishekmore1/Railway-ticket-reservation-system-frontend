import { Router } from '@angular/router';
import { RegistrationServieService } from './../registration-servie.service';
import { TicketDetails } from './../bookTicket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css'],
})
export class BookTicketComponent implements OnInit {
  ticket: any = new TicketDetails('', '', '', 0);

  trainId: any;

  message: any;

  constructor(
    private service: RegistrationServieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public bookTicket() {
    let response = this.service.ticketBooking(this.trainId, this.ticket);
    response.subscribe((data) => (this.message = data));
    console.log(this.message);
    // this.router.navigate(['/searchTrain']);
    // if (this.message === 'Booking successful') {
    // }
  }
}
