import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from '../../guards/auth.guard';

export const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent }
];
