import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  userName: string;
  password: string;
  mouseoverLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.login(this.userName, this.password);
    this.router.navigate(['events']);
  }

  cancel () {
    this.router.navigate(['events']);
  }
}