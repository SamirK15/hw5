import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignInService } from '../../services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private signInService: SignInService) {
    
  }

  ngOnInit() {
  }

  signInOnClick(email, password) {
    this.signInService.authenticateCredentials(email, password).then(res => {
      this.router.navigateByUrl("/home-page");
    });
  }

}
