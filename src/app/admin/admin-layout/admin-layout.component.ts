import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styles: [
  ]
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get name() {
    return this.authService.name;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
