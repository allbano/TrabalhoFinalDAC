import { Component } from '@angular/core';
import { ReservaService } from '../../../services/reserva.service';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../../models/reserva/reserva.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VooService } from '../../../services/voo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelarReservaComponent } from '../cancelar-reserva/cancelar-reserva.component';

@Component({
  selector: 'app-consultar-reserva',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './consultar-reserva.component.html',
  styleUrl: './consultar-reserva.component.scss'
})
export class ConsultarReservaComponent {
  codigoReserva: string = '';
  reserva: Reserva | null = null;
  mensagemErro: string | null = null;

  constructor(private reservaService: ReservaService, private router: Router,private vooService: VooService, private modalService: NgbModal) {}

  consultarReserva() {
    this.reserva = this.reservaService.getReserva(this.codigoReserva); // Implemente este método no seu serviço
    if (!this.reserva) {
      this.mensagemErro = 'Reserva não encontrada!';
    } else {
      this.mensagemErro = null;
    }
  }

  fazerCheckin() {
    confirm("Voce será redirecionado ao Check In.");
    this.router.navigate(['/checkin']);
  }

  isReservadoEValido(reserva: Reserva): boolean {
    // Verifica se a reserva está 'RESERVADO'
    if (reserva.estado !== 'RESERVADO') {
        return false;
    }

    // Busca o voo correspondente à reserva
    const dataHora = this.vooService.getVooDataHora(reserva.codigoVoo);
    
    // Verifica se o voo foi encontrado e se está dentro do intervalo de 48 horas
    if (dataHora) {
      const agora = new Date();
      const dataLimite = new Date(agora.getTime() + 48 * 60 * 60 * 1000); // 48 horas a partir de agora
      return dataHora > agora && dataHora <= dataLimite;
    }
    
    return false; // Se o voo não for encontrado, retorna false
  }

  getVooOrigem(codigoVoo: string): string | undefined {
    return this.vooService.getOrigem(codigoVoo);
  }

  getVooDestino(codigoVoo: string): string | undefined{
    return this.vooService.getDestino(codigoVoo);
  }

  abrirModalCancelarReserva(reserva: Reserva) {
    const modalRef = this.modalService.open(CancelarReservaComponent);
    modalRef.componentInstance.reserva = reserva;
  }
}
