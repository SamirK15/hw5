import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  authenticateCredentials() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3001/').subscribe(data => {
        resolve(data);
      });
    });
  }

}
