import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

const BASE_URL = '/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currUser: User;

  constructor(private httpClient: HttpClient) {}

  getUrl(route) {
    return `${BASE_URL}/${route}`;
  }

  getUserDetails(): Observable<User> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.httpClient.get<User>(this.getUrl('self'), requestOptions);
  }

  logout() {
    return this.httpClient.post('/logout', null, { observe: 'response' });
  }
}
