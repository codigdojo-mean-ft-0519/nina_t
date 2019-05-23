import { Injectable } from '@angular/core';
import { Cake } from './cake.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  constructor(private _http: HttpClient) {}

  addCake(cake: Cake): Observable<Cake> {
    console.log('Reporting in from our service file...adding a cake!');
    return this._http.post<Cake>('/cakes/', cake);
  }

  updateCake(cake: Cake): Observable<Cake> {
    console.log('Reporting in from our service file...updating a cake!');
    return this._http.put<Cake>(`/cakes/${cake._id}`, cake);
  }

  showAllCakes(): Observable<Cake[]> {
    return this._http.get<Cake[]>('/cakes');
  }
}

// getOneCake(){
//   console.log("got a cake!");
// }

// getAllCakes(){
//   console.log("got all cakes!");
// }
