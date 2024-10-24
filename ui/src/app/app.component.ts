import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public router: Router) {}

  shouldShowNavbar(): boolean {
    // Verifica se a rota atual não é 'login' ou 'autocadastro'
    return this.router.url !== '/login' && this.router.url !== '/autocadastro';
  }
}
