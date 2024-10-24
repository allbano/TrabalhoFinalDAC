import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../../../models/reserva/reserva.model';
import { ReservaService } from '../../../services/reserva.service';
import { VooService } from '../../../services/voo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cancelar-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cancelar-reserva.component.html',
  styleUrl: './cancelar-reserva.component.scss',
})
export class CancelarReservaComponent {
  @Input() reserva!: Reserva;
  constructor(public activeModal: NgbActiveModal, private reservaService: ReservaService, private vooService: VooService) {}

  cancelarReserva(codigoReserva: string): void {
    this.reservaService.cancelarReserva(codigoReserva);
    this.activeModal.close()
  }

  getVooOrigem(codigoVoo: string): string | undefined {
    return this.vooService.getOrigem(codigoVoo);
  }

  getVooDestino(codigoVoo: string): string | undefined{
    return this.vooService.getDestino(codigoVoo);
  }
}
