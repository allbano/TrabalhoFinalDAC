import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Interface para representar os voos
interface Voo {
  dataHora: Date;
  origem: string;
  destino: string;
  status: string;  // "Reservado", "Feito", "Cancelado"
}

@Component({
  selector: 'app-tela-inicial-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.scss']
})
export class InicialClienteComponent {
  saldoMilhas: number = 15000;  // Exemplo de saldo inicial

  // Exemplo de dados de voos
  voos: Voo[] = [
    {
      dataHora: new Date('2024-10-05T10:30:00'),
      origem: 'Aeroporto A',
      destino: 'Aeroporto B',
      status: 'Reservado'
    },
    {
      dataHora: new Date('2024-09-25T14:15:00'),
      origem: 'Aeroporto C',
      destino: 'Aeroporto D',
      status: 'Feito'
    },
    {
      dataHora: new Date('2024-09-20T08:45:00'),
      origem: 'Aeroporto E',
      destino: 'Aeroporto F',
      status: 'Cancelado'
    }
  ];

  // Função para ver detalhes da reserva (R04)
  verReserva(voo: Voo) {
    alert(`Visualizando reserva do voo de ${voo.origem} para ${voo.destino}`);
  }

  // Função para cancelar reserva (R08)
  cancelarReserva(voo: Voo) {
    if (confirm(`Tem certeza que deseja cancelar a reserva para o voo de ${voo.origem} para ${voo.destino}?`)) {
      voo.status = 'Cancelado';
      alert('Reserva cancelada com sucesso!');
    }
  }
}
