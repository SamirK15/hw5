import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAssignedTasks() {
    return new Promise((resolve, reject) => {

    });
  }
  
  getDoneTasks() {
    return new Promise((resolve, reject) => {
      
    });
  }

  getInProgressTasks() {
    return new Promise((resolve, reject) => {
      
    });
  }

  getUnassignedTasks() {
    return new Promise((resolve, reject) => {
      
    });
  }

}
