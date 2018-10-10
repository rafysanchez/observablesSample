import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  protected url = 'http://localhost:4200';

getUsers(): Observable<any> {
    return this
            .http
            // .get(`${this.url}/results`)
            .get(`./data.json`)
            .pipe(
              map(res => res)
          );
      }


}
