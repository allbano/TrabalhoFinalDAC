import { Component } from '@angular/core';
import { TransacaoMilhasService } from '../../../services/transacao-milhas.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-comprar-milhas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './comprar-milhas.component.html',
  styleUrl: './comprar-milhas.component.scss'
})
export class ComprarMilhasComponent {
  quantidadeMilhas: number = 0;

  constructor(private transacaoMilhasService: TransacaoMilhasService, private router: Router, private storageService: StorageService) {}

  comprarMilhas(quantidade: number): void{
    quantidade = this.quantidadeMilhas;
    if (quantidade > 0){
      const clienteId: number = Number(this.storageService.getItem('userId'));
      if (clienteId)
        this.transacaoMilhasService.novaTransacao(clienteId,quantidade,"COMPRA DE MILHAS");

      alert("Compra realizada!");
      this.router.navigate(['/home-cliente'])
    }
  }
}
