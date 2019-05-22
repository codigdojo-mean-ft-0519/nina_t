import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: 'RestfulTasksNested';
  // submittedTask: Task;
  ngOnInit(): void {}

  constructor() {}

  // dataFromChild(submittedTask) {
  //   console.log('My child gave me', submittedTask);
  //   this.submittedTask = submittedTask;
  // }
}
