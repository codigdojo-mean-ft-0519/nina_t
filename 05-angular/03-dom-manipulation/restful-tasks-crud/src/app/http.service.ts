import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>('/tasks');
  }

  getTask(id: string): Observable<Task> {
    return this._http.get<Task>(`/tasks/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this._http.post<Task>('/tasks', task);
  }

  updateTask(task: Task): Observable<Task> {
    return this._http.put<Task>(`/tasks/${task._id}`, task);
  }

  deleteTask(id: string): Observable<Task> {
    return this._http.delete<Task>(`/tasks/${id}`);
  }
}
