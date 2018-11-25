import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.stdlib_url + '/tasks').subscribe(data => {
        resolve(data);
      });
    });
  }

  getAssignedTasks(userId) {
    return new Promise((resolve, reject) => {
      this.http.get(environment.stdlib_url + '?userId=' + userId + '/tasks').subscribe(data => {
        resolve(data);
      });
    });
  }

}
