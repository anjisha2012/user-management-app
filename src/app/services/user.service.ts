import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private dataUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json';

  constructor(private http: HttpClient) {}

getUsers(): Observable<any[]> {
  return this.http.get<any[]>(this.dataUrl).pipe(
    catchError((error) => {
      console.error('Data fetch failed', error);
      return of([]); 
    })
  );
}

}
