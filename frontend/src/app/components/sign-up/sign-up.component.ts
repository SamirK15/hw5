import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserAuthenticationService } from '../../services/user-authentication/user-authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router, private userAuthenticationService: UserAuthenticationService) { }

  ngOnInit() {
  }

  signInOnClick(email, password) {
    this.userAuthenticationService.registerUser(email, password).then(res => {
      this.router.navigateByUrl("/home-page");
    });
  }

}
