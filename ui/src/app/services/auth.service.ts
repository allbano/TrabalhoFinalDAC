import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {
    // Simulação de validação (substitua pela sua lógica de back-end real)
    return username === 'admin' && password === 'password';
  }
}
