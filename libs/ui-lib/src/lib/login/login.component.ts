import { AuthService } from './../../../../core-data/src/lib/auth/auth.service';
import { NotifyService } from '@mdv-fourteen/core-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv-fourteen-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  userLogin = { email: '', password: '' }
  preSetUser = { email: 'e@e.com', password: 'pass' }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private notify: NotifyService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
  this.userLogin = this.form.value
  if (this.form.invalid) {
      this.notify.notification('Complete fields with valid information')
    } else {
      if(this.userLogin.email === this.preSetUser.email && this.userLogin.password === this.preSetUser.password) {
        this.router.navigate(['/kangaroos']),
        this.authService.setToken(this.userLogin.email)
      }
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
}
