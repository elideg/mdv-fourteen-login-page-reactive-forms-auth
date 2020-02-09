import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);

  constructor() {
    this.setToken(this.getToken() || '')
  }

  setToken(token) {
    localStorage.setItem('token', token);
    this.isAuthenticated.next(token !== '');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.setItem('token', '')
  }
}
