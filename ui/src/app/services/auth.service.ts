import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  logar(usuario: Usuario): void {
    const token = `${usuario.login}-${usuario.senha}-${usuario.tipo}-${usuario.id}-token`;
    localStorage.setItem('authToken', token);
    localStorage.setItem('userType', usuario.tipo);
    localStorage.setItem('userLogin', usuario.login);
    if (usuario.id) {
      localStorage.setItem('userId', usuario.id.toString());
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    // Verifique se o usuário está autenticado
    return !!localStorage.getItem('authToken');
  }

  getUserType(): string | null {
    // Retorna o tipo de usuário (por exemplo, 'cliente' ou 'funcionario')
    return localStorage.getItem('userType');
  }
}
