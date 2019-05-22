import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Nested';
  task: Task;
  selectedTask: Task;

  ngOnInit(): void {}

  constructor(private _httpService: HttpService) {}
}
