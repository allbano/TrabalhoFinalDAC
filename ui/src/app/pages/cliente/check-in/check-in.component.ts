import { Component, OnInit } from '@angular/core';
import { VooService } from '../../../services/voo.service';
import { Voo } from '../../../models/voo/voo.model';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../../../services/reserva.service';
import { Reserva } from '../../../models/reserva/reserva.model';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-in.component.html',
  styleUrl: './check-in.component.scss'
})
export class CheckInComponent implements OnInit {

  voos: Array<Voo> = [];
  reservasCliente: Array<Reserva> = [];
  voosProximos: Array<Voo> = [];

  constructor(private vooService: VooService, private reservaService: ReservaService, private storageService: StorageService) {}

  ngOnInit(): void {
    const clienteId: number = Number(this.storageService.getItem('userId'));
    this.reservasCliente.push(...this.reservaService.getReservasByClienteId(clienteId));
    this.voosProximos.push(...this.vooService.getVoosProximasHoras());
    this.voos.push(...this.voosClienteProximas48H());
    //Ordena os voos na lista
    this.voos.sort((a, b) => new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime());
  }

  voosClienteProximas48H(): Array<Voo> {
    return this.voosProximos.filter(voo => 
      this.reservasCliente.some(reserva => reserva.codigoVoo === voo.codigoVoo)
    );
  }
}