import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  authenticateCredentials(email, password) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.stdlib_url + '?email=' + email + '&password=' + password + '&type=login').subscribe(data => {
        resolve(data);
      });
    });
  }

}
