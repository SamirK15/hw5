import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../.././services/to-do/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  assignedTasks = [];
  doneTasks = [];
  inProgressTasks = [];
  unassignedTasks = [];

  constructor(private toDoService: ToDoService) {
    this.toDoService.getAssignedTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.assignedTasks.push(res[i]);
      }
    });
    this.toDoService.getDoneTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.doneTasks.push(res[i]);
      }
    });
    this.toDoService.getInProgressTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.inProgressTasks.push(res[i]);
      }
    });
    this.toDoService.getUnassignedTasks().then((res) => {
      for (var i = 0; res[i] != undefined; i++) {
        this.unassignedTasks.push(res[i]);
      }
    });
  }

  ngOnInit() {
  }

}
