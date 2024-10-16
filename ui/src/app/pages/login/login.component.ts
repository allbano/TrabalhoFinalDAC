import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login: string = '';
  senha: string = '';
  loginFailed: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  logar() {
    if (this.authService.login(this.login, this.senha)) {
      console.log('Logado com successo');
      this.loginFailed = false;
      this.router.navigate(['/home-cliente']);
    } else {
      console.log('Login inválido');
      this.loginFailed = true;
    }
  }
}
