import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario/usuario.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Usuarios: Array<Usuario> = [
    new Usuario('a@email.com','1234','cliente',1),
    new Usuario('b@email.com','5678','funcionario',2)
  ];

  constructor(private authService: AuthService) { }

  login(username: string, password: string): boolean {
    // Simulação de validação (substitua pela sua lógica de back-end real)
    const usuario: Usuario | undefined = this.Usuarios.find(user => user.login === username && user.senha === password);
    
    if (usuario) {
      // Aqui você pode armazenar o token ou qualquer outra lógica que desejar
      this.authService.logar(usuario);
      console.log('Login bem-sucedido:', usuario);
      return true; // Retorna verdadeiro se o login foi bem-sucedido
    } else {
      console.log('Falha no login: usuário ou senha inválidos.');
      return false; // Retorna falso se o login falhar
    }
  }

  criarUsuarioCliente(login: string): void {
    const senha: string = this.generateRandomPassword();
    const user: Usuario = new Usuario(login,senha,"cliente",undefined);
    this.Usuarios.push(user);
    //Enviar Senha por email
  }

  isFuncionario(perfil: string): boolean {
    // Simulação de validação (substitua pela sua lógica de back-end real)
    return perfil === 'funcionario';
  }

  generateRandomPassword(): string {
    let password = '';
    for (let i = 0; i < 4; i++) {
        const randomDigit = Math.floor(Math.random() * 10); // Gera um número entre 0 e 9
        password += randomDigit.toString(); // Adiciona o dígito à senha
    }
    return password;
  }
  
}
