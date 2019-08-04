import { Component, Inject } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from 'src/services';
import { IToastr } from 'src/app/models/toastr.interface';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string;
  password: string;
  mouseoverLogin = false;

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: IToastr) {}

  login(formValues) {
    this.authService.login(formValues.username, formValues.password)
      .subscribe(res => {
        if (!res) {
          this.toastr.error('Username or passowrd incorrect', 'Login Fail');
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
