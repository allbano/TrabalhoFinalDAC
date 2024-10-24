import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from '../../../models/reserva/reserva.model';
import { VooService } from '../../../services/voo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-reserva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-reserva.component.html',
  styleUrl: './ver-reserva.component.scss'
})
export class VerReservaComponent {
  @Input() reserva!: Reserva;
  constructor(public activeModal: NgbActiveModal, private vooService: VooService) {}

  getVooOrigem(codigoVoo: string): string | undefined {
    return this.vooService.getOrigem(codigoVoo);
  }

  getVooDestino(codigoVoo: string): string | undefined{
    return this.vooService.getDestino(codigoVoo);
  }
}