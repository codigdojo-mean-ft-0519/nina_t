import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { Observable } from 'rxjs';

//have a majority of your interaction with the resource (i.e. tasks) in the same service file

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>('/tasks');
  }
  //Observable says "I'm going to wrap up the result of this in something that's ansynchronous"
  getTask(id: string): Observable<Task> {
    return this._http.get<Task>(`/tasks/${id}`);
  }
}
