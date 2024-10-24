import { Injectable } from '@angular/core';
import { EstadoReserva } from '../models/estadoReserva/estado-reserva.model';

@Injectable({
  providedIn: 'root'
})
export class EstadoReservaService {

  EstadosReserva: Array<EstadoReserva> = [
    new EstadoReserva('1', 'RES', 'RESERVADO'),
    new EstadoReserva('2', 'EMB', 'EMBARCADO'),
    new EstadoReserva('3', 'CAN', 'CANCELADO'),
    new EstadoReserva('4', 'CANVOO', 'CANCELADO VOO'),
    new EstadoReserva('5', 'REA', 'REALIZADO'),
    new EstadoReserva('6', 'NRE', 'NAO REALIZADO')
  ];

  constructor() { }
}