import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserAuthenticationService } from '../../services/user-authentication/user-authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private userAuthenticationService: UserAuthenticationService) {

  }

  ngOnInit() {
  }

  signInOnClick(email, password) {
    this.userAuthenticationService.authenticateCredentials(email, password).then(res => {
      this.router.navigateByUrl("/to-do");
    });
  }

}
