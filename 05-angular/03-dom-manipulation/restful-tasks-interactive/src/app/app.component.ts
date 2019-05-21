import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Interactive';
  tasks: Task[];
  task: Task;
  selectedTask: Task;

  constructor(private _httpService: HttpService) {}

  buttonGetAllTasks() {
    const observable: Observable<Task[]> = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
      console.log('Got all tasks from the click! Our tasks are', this.tasks);
    });
  }
  buttonShowOneTask(clickedTask: Task) {
    console.log('Our clicked task is...', clickedTask);
    //                            (expression)      ? (if true) : (if false);
    this.selectedTask = this.selectedTask == clickedTask ? null : clickedTask;
  }

  getTask(id: string) {
    this._httpService.getTask(id).subscribe(task => {
      this.task = task;
    });
  }
}
