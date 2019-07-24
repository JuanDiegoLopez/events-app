import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN } from 'src/services';
import { IToastr } from 'src/app/models/toastr.interface';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private router: Router, private authService: AuthService, @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[A-Za-z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues:any) {
    if (!this.profileForm.valid) return;
    this.authService.updateProfile(formValues.firstName, formValues.lastName)
      .subscribe(() => {
        this.toastr.success('Profile updated!');
      });
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(['user/login']);
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstname() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastname() {
    return this.lastName.valid || this.lastName.untouched;
  }
}
