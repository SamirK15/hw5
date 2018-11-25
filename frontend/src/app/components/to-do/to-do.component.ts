import { Component, OnInit,Input } from '@angular/core';

import { TaskService } from '../.././services/task/task.service';
import {Time} from "@angular/common";

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {


  heroes=[];
  temp=[];
  groups=[];

  onClick(name:string,date:Date,time:Time){
      /*this.temp.push(name,date,time);
      this.heroes.push(this.temp.toString())*/
      if(name&&date&&time) {
        this.heroes.push("Task: " + name + " Due: " + date + " at " + time);
      }
      else {
        window.alert("Invalid Entry")
      }
  }

  gCreate(){
    this.groups.push("New Group");
  }

  ngOnInit() {

  }

}


/*assignedTasks = [];
  doneTasks = [];
  inProgressTasks = [];
  unassignedTasks = [];*/




/*constructor(private taskService: TaskService) {
  this.taskService.getAssignedTasks().then((res) => {
    for (var i = 0; res[i] != undefined; i++) {
      this.assignedTasks.push(res[i]);
    }
  });
}*/
