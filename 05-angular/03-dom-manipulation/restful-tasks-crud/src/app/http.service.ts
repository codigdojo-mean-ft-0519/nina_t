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
  getTask(id: string): Observable<Task> {
    return this._http.get<Task>(`/tasks/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    //SOMETHING NEEDS TO GO HERE
    return this._http.post<Task>('/tasks');
  }

  updateTask(id: string): Observable<Task> {
    //SOMETHING NEEDS TO GO HERE
    return this._http.put<Task>(`/tasks/${id}`);
  }

  deleteTask(id: string): Observable<Task> {
    return this._http.delete<Task>(`/tasks/${id}`);
  }
}
