import { NotifyService } from './../notify.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private authService: AuthService,
    private route: Router,
    private notify: NotifyService
  ) { }

  canActivate() {
    if(!this.authService.isAuthenticated.value) {
      this.notify.notification('Enter Valid User');
      this.route.navigate(['/login'])
      return false;
    } else {
      this.notify.notification('Succesfully Logged in')
      return true
    }
  }
}
