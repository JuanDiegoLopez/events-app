import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-AZ].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues:any) {
    if (!this.profileForm.valid) return;
    this.authService.updateProfile(formValues.firstName, formValues.lastName);
    this.router.navigate(['events']);
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