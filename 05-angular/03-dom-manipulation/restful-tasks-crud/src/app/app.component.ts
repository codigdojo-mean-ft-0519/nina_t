import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks CRUD';
  tasks: Task[] = [];
  task = new Task();

  constructor(private _httpService: HttpService) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    // console.log('Reached the onSubmit function and received:', this.task);
    this.createTask(this.task);
    this.task = new Task();
    // console.log('Task has been wiped clean, ready for creation of next Task!');
    form.reset();
  }

  createTask(createdTask: Task) {
    console.log('Reached the createTask function and received:', createdTask);
    this.tasks.push(createdTask);
    console.log(
      'Our newly created tasks has been successfully pushed into our array. Our tasks array now looks like....',
      this.tasks
    );
  }

  onDelete(taskToDelete: Task) {
    console.log(
      'Reached the onDelete button! We wanted to delete the following task:',
      taskToDelete
    );
  }

  deleteTask(selectedTask: Task) {
    console.log('yay');
  }

  onUpdate(taskToUpdate: Task) {
    console.log(
      'Reached the onUpdate button! We wanted to update the following task: ',
      taskToUpdate
    );
  }
  // getTasks() {
  //   const observable: Observable<Task[]> = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     this.tasks = data;
  //   });
  // }
  // getTask(id: string) {
  //   this._httpService.getTask(id).subscribe(task => {
  //     this.task = task;
  //   });
  // }
}
