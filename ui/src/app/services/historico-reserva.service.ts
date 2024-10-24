import { Injectable } from '@angular/core';
import { HistoricoReserva } from '../models/historicoReserva/historico-reserva.model';

@Injectable({
  providedIn: 'root'
})
export class HistoricoReservaService {

  historicoReservas: Array<HistoricoReserva> = [
    new HistoricoReserva('AAA001', new Date('2024-10-01T09:00:00'),'RESERVADO','EMBARCADO'),
    new HistoricoReserva('AAA002', new Date('2024-09-25T09:00:00'), 'EMBARCADO', 'REALIZADO'), 
  ];

  constructor() { }

  novoHistorico(codigoReserva: string, estadoOrigem: string, estadoDestino: string):void {
    this.historicoReservas.push(new HistoricoReserva(codigoReserva, new Date(),estadoOrigem,estadoDestino));
  }  
}
