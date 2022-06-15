import { Component, OnInit } from '@angular/core';
import { ColectorService } from '../shared/colector.service';
import { AuthRoutingModule } from '../../auth/login/auth-routing.module';
import { AuthService } from '../../auth/shared/auth.service';


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: [
  ]
})
export class HomeLayoutComponent implements OnInit {

  constructor(
    private colectorService: ColectorService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  get items() {
    return this.colectorService.items;
  }

  get name() {
    return this.authService.name;
  } 
  
  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }


}
