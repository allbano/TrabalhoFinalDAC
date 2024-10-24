import { Injectable } from '@angular/core';
import { TransacaoMilhas } from '../models/transacaoMilhas/transacao-milhas.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoMilhasService {

  transactions: TransacaoMilhas[] = [
    new TransacaoMilhas(1, new Date(2024,0,1,14,30), 123345, 'entrada', 'COMPRA DE MILHAS'),
    new TransacaoMilhas(2, new Date(2024,2,1,9,0), 6789, 'saida', 'CWB->GRU','AAA001'),
    new TransacaoMilhas(3, new Date(2024,3,1,22,45), 23456, 'entrada', 'COMPRA DE MILHAS'),
    new TransacaoMilhas(4, new Date(2024,4,1,1,14), 9897, 'saida', 'GRU->CWB','AAA001')
  ];

  constructor() {}

  getTransacoes(): Observable<TransacaoMilhas[]> {
    return of(this.transactions);
  }

  getTransacoesCliente(clienteId: number): Array<TransacaoMilhas> {
    return this.transactions.filter(transacao => transacao.clienteId === clienteId);
  }

  novaTransacao(clienteId: number, milhas: number, descricao: string, codigoReserva?: string): void {
    const transacao: TransacaoMilhas = new TransacaoMilhas (clienteId,new Date(),milhas,"entrada",descricao, codigoReserva);
    this.transactions.push(transacao);
  }
}