import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor (private authService: AuthService, private storageService: StorageService) {}

  getUserTipo(): string | null {
    return this.storageService.getItem('userType');
  }

  logout() {
    this.authService.logout();
  }
}
