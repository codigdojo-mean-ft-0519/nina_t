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
  constructor(private _httpService: HttpService) {}
  title = 'Restful Tasks Dom Manipulation';
  tasks: Task[];
  third = 'The third task';

  ngOnInit() {
    console.log('Get Tasks from app.component.ts is running!');
    this.getTasks();
    //I have no idea how to represent an id from our model...Using 1 as a placeholder
    // this.getTask(1);
  }
  getTasks() {
    const observable: Observable<Task[]> = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
    });
  }
  // getTask(id) {
  //   const observable1: Observable<Task> = this._httpService.getTask(id);
  //   observable1.subscribe(data => {
  //     console.log('Got a task!', data);
  //     this.task = data;
  //   });
  // }
}
