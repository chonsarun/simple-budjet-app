import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './models/login';
import { Observable } from 'rxjs';
import { LoggedInUser } from './models/loggedin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // loggedInUser: LoggedInUser | null = null;

  constructor(private httpClient: HttpClient) {}

  setLoggedInUser(loggedInUser: LoggedInUser) {
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
  }

  getLoggedInUser(): LoggedInUser | null {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    return loggedInUser ? JSON.parse(loggedInUser) as LoggedInUser : null;
  }

  login(login: Login): Observable<LoggedInUser> {
    const url = 'http://localhost:3000/login';
    return this.httpClient.post<LoggedInUser>(url, login);
  }

}
