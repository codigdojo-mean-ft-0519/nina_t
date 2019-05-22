import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { Task } from '../task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  task: Task;
  tasks: Task[];
  selectedTask: Task;
  // @Output() onTaskSelected = new EventEmitter();

  constructor(private _httpService: HttpService) {}

  ngOnInit() {}

  buttonGetAllTasks() {
    const observable: Observable<Task[]> = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log('Got all tasks from the click! Our tasks are', this.tasks);
    });
  }

  taskToShow(clickedTask: Task) {
    this.selectedTask = this.selectedTask === clickedTask ? null : clickedTask;
    console.log('Our selected task is....', this.selectedTask);
    // this.onTaskSelected.emit(this.selectedTask);
  }

  getTask(id: string) {
    this._httpService.getTask(id).subscribe(task => {
      this.task = task;
    });
  }
}
