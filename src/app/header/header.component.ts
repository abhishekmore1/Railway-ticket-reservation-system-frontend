import { Router } from '@angular/router';
import { UserAuthService } from './../user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.router.navigate(['/home']);
    return this.userAuthService.clear();
  }
}
