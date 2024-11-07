import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario/funcionario.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  funcionarios: Array<Funcionario> = [];

  constructor() { }

  criarFuncionario(novoFuncionario: Funcionario): Observable<Funcionario> {
    this.funcionarios.push(novoFuncionario);
    return of (novoFuncionario);
  }

  alterarFuncionario(funcionarioAlterado: Funcionario): void {
    const funcionarioExistente = this.funcionarios.find(funcionario => funcionario.cpf === funcionarioAlterado.cpf);
    
    if (funcionarioExistente) {
      funcionarioExistente.nome = funcionarioAlterado.nome;
      funcionarioExistente.email = funcionarioAlterado.email;
      funcionarioExistente.telefone = funcionarioAlterado.telefone;
    }
  }
}
