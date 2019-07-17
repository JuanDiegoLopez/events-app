import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate() {
    if (this.authService.isAuthenticated()) return true;
    this.router.navigate(['user/login']);
    return false;
  }
}