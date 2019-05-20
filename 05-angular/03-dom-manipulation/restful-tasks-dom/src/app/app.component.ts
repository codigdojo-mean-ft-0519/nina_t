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
  //DEFINE AND ASSIGN INSTANCE VARIABLES ABOVE THE CONSTRUCTOR
  title = 'Restful Tasks Dom Manipulation';
  tasks: Task[];
  //We are going to use the word "task" and what we get needs to be in the value of a "Task"
  task: Task;

  constructor(private _httpService: HttpService) {}
  //This allows us to see things in our html later

  ngOnInit() {
    //REPLACE THIS STRING WITH A REAL ID LATER
    const id = '1235190384';
    console.log('Get Tasks from app.component.ts is running!');
    this.getTasks();
    //I have no idea how to represent an id from our model...Using 1 as a placeholder
    this.getTask(id);
  }
  getTasks() {
    const observable: Observable<Task[]> = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
    });
  }
  getTask(id: string) {
    this._httpService.getTask(id).subscribe(task => {
      //Task will show us [Object object]...but if you put a string ahead of it it won't be
      console.log('Got a task!', task);
      this.task = task;
    });
  }
}
