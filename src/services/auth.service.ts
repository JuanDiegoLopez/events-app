import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/user.interface';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()

export class AuthService {
currentUser: IUser;

  login(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      userName: 'jhondoe'
    }
  }

  isAuthenticated() {
    return this.currentUser ? true : false;
  }

  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
