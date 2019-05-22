import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input()
  taskToShow: Task;

  constructor() {}

  ngOnInit() {
    // console.log('Our task to show is ', this.taskToShow);
  }
}
