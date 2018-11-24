import { Component, OnInit } from '@angular/core';

import { SignInService } from '../../services/sign-in/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private signInService: SignInService) {
    this.signInService.authenticateCredentials().then((res) => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
