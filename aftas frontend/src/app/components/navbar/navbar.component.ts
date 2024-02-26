import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  imageUrl: string = 'assets/img/Footer-Logo.png';
  constructor(private authService : AuthService, private storageService : StorageService) {}

  user = this.storageService.getSavedUser();
  permissions = this.storageService.getPermissions();
  showAdminBoard = false;

  ngOnInit(): void {
    if(this.user) {
      console.log(this.user);
      
      this.showAdminBoard = this.permissions.includes('CAN_MANAGE_COMPETITIONS');
    }
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  handleLogout() {
    this.authService.logout();
  }
}
