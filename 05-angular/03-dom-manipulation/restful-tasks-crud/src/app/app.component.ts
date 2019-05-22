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
  tasks: Task[];
  task = new Task();
  selectedTask: Task;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    const observable: Observable<Task[]> = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('Reached the onSubmit function and received:', this.task);
    this._httpService.createTask(this.task).subscribe(apiTask => {
      this.tasks.push(apiTask);
    });
    this.task = new Task();
    console.log('Task has been wiped clean, ready for creation of next Task!');
    form.reset();
  }

  onDelete(taskId: string) {
    console.log(
      'Reached the onDelete button! We wanted to delete the following task:',
      taskId
    );
    this._httpService.deleteTask(taskId).subscribe(deletedTask => {
      console.log('Our deleted task is ', deletedTask);
      this.tasks = this.tasks.filter(
        taskFromArray => taskFromArray._id !== deletedTask._id
      );
      this.getTasks();
    });
  }

  onUpdate() {
    console.log(
      'Reached the onUpdate button! We wanted to update the following task: ',
      this.selectedTask
    );
    this._httpService.updateTask(this.selectedTask).subscribe(editedTask => {
      console.log('The task that we will be editing is ...', editedTask);
      //We're changing the array and re-stuffing it with the new updated task in the right position
      this.tasks = this.tasks.map(
        taskFromArray =>
          //if the id's match, then we're going to take the original thing in the array and replace it with the updated one;
          taskFromArray._id == editedTask._id ? editedTask : taskFromArray

        //You could have also done the following:
        // this.tasks = [...this.tasks.filter(taskFromArray => editedTask._id !== taskFromArray._id), editedTask]
      );
      this.selectedTask = null;
    });
  }

  showEditField(clickedTask: Task) {
    // console.log('This is the task we want to show: ', clickedTask);
    this.selectedTask =
      this.selectedTask === clickedTask ? null : { ...clickedTask }; //spreading helps stop updating it in both places
  }

  getTask(id: string) {
    this._httpService.getTask(id).subscribe(task => {
      this.task = task;
    });
  }
}
