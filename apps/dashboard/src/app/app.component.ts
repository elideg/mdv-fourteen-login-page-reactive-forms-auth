import { AuthService } from '@mdv-fourteen/core-data';
import { Component } from '@angular/core';

@Component({
  selector: 'mdv-fourteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  links = [
    { path: '/kangaroos', icon: 'pets', title: 'Kangaroos' }
  ]

  isAuthenticated$ = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}

}
