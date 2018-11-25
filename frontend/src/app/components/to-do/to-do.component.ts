import { Component, OnInit,Input } from '@angular/core';

import { TaskService } from '../.././services/task/task.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {


  heroes=[];

  onClick(value:string){
    if(value) {
      this.heroes.push(value);
    }
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
