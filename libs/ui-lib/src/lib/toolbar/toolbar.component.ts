import { Component, OnInit, Input } from '@angular/core';
import { AuthService, NotifyService } from '@mdv-fourteen/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'mdv-fourteen-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav
  @Input() isAuthenticated
  @Input() title

  constructor(
    private auth: AuthService,
    private notify: NotifyService,
    private route: Router
  ) { }

  ngOnInit() {
  }


  logout() {
    this.auth.logout();
    this.notify.notification('Successfully Logged Out');
    }

  login() {
    this.route.navigate(['login'])
  }

}
