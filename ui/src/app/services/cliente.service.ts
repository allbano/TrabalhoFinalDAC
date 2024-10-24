import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente/cliente.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  Clientes: Array<Cliente> = [
    new Cliente('00000000000','Joao Silva','a@email.com','Rua x,1',null,'80000000','Curitiba','PR',100,1)
  ];

  constructor() { }

  criarCliente(novoCliente: Cliente): Observable<Cliente> {
    this.Clientes.push(novoCliente);
    return of(novoCliente);
  }

  getClienteById(id: number ): Cliente | undefined {
    return this.Clientes.find(cliente => cliente.id === id);
  }

  getClienteMilhas(id: number): number {
    const cliente = this.Clientes.find(c => c.id === id);
    return cliente ? cliente.milhas : 0;
  }

  substrairMilhas(milhas: number, clienteId: number): void {
    this.Clientes.filter(cliente => {
      if(cliente.id === clienteId){
        cliente.milhas -= milhas;
      }
    });
  }

  devolderMilhas(milhas: number, clienteId: number): void {
    this.Clientes.filter(cliente => {
      if(cliente.id === clienteId){
        cliente.milhas += milhas;
      }
    });
  }

}
