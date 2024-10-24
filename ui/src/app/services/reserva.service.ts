import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva/reserva.model';
import { HistoricoReservaService } from './historico-reserva.service';
import { ClienteService } from './cliente.service';
import { TransacaoMilhasService } from './transacao-milhas.service';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  Reservas: Array<Reserva> = [
    new Reserva('AAA001','TADS0001',new Date('2024-10-15T14:00:00'),'RESERVADO',1,1,100,5)
  ]; 

  constructor(private historicoReservaService: HistoricoReservaService, private clienteService: ClienteService, private transacaoMilhasService: TransacaoMilhasService) { }

  cancelarReserva(codigoReserva: string): void {
    // Procura a reserva pelo código
    const reservaEncontrada = this.Reservas.find(reserva => reserva.codigoReserva === codigoReserva);
    
    // Se a reserva for encontrada, altera o estado
    if (reservaEncontrada) {
      //Mudança de estado da reserva
      const estadoAnterior: string = reservaEncontrada.estado;
      reservaEncontrada.estado = "CANCELADO";
      //Salvando mudança de estado no historico
      this.historicoReservaService.novoHistorico(reservaEncontrada.codigoReserva,estadoAnterior,reservaEncontrada.estado);
      //Devolvendo milhas do cliente
      this.clienteService.devolderMilhas(reservaEncontrada.milhasUsadas,reservaEncontrada.clienteId);
      //Registro da devolução
      this.transacaoMilhasService.novaTransacao(reservaEncontrada.clienteId,reservaEncontrada.milhasUsadas,"CANCELADO",reservaEncontrada.codigoReserva);
      console.log(`Estado da reserva ${codigoReserva} alterado para ${reservaEncontrada.estado}`);
    } else {
      console.log(`Reserva com código ${codigoReserva} não encontrada.`);
    }
  }

  novaReserva(codigoVoo: string, dataHora: Date, clienteId: number, qntdPassagens: number, custoTotal: number, milhasUsadas: number): string {
    const codigo: string = this.gerarCodigoReserva();
    this.Reservas.push(new Reserva (codigo,codigoVoo,dataHora,'RESERVADO',clienteId,qntdPassagens,custoTotal,milhasUsadas));
    return codigo;
  }

  getReserva(codigo: string): Reserva | null {
    return this.Reservas.find(reserva => reserva.codigoReserva === codigo) || null
  }

  getReservasByClienteId(clienteId: number): Array<Reserva>{
    return this.Reservas.filter(reserva => reserva.clienteId === clienteId);
  }
  
  gerarCodigoReserva(): string {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const randomLetra = () => letras[Math.floor(Math.random() * letras.length)];
    const randomNumero = () => numeros[Math.floor(Math.random() * numeros.length)];
    return `${randomLetra()}${randomLetra()}${randomLetra()}${randomNumero()}${randomNumero()}${randomNumero()}`;
  }
}
