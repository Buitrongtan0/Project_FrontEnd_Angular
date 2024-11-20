import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: any;
  isLogin: boolean = false;
  constructor(private localStorageService: LocalStorageService,private router: Router) {
  }

 ngOnInit(): void {

    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.user = this.localStorageService.getItem('user');
      this.isLogin = this.user ? true : false;
    }
  });
  }
  logout() {
    if (this.isLogin === true) {
      this.localStorageService.clear();
      window.location.reload();
    }
    this.isLogin = false;
  }
}
