import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()

export class AuthService {
  currentUser: IUser;

  constructor(private http:HttpClient) {}

  login(username: string, password: string) {
    const loginInfo = { username, password };
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser =  data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }))
  }

  isAuthenticated() {
    return this.currentUser ? true : false;
  }

  checkAuthStatus() {
    this.http.get('/api/currentIdentity')
      .subscribe(data => {
        if (data instanceof Object) {
          this.currentUser = <IUser> data;
        }
      })
  }

  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

  logout() {
    this.currentUser = undefined;
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.http.post('/api/logout', {} , options);
  }
}
