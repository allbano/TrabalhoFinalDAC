import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-voo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-voo.component.html',
  styleUrls: ['./cadastro-voo.component.scss']
})
export class CadastroVooComponent {
  voo = {
    codigoVoo: '',
    dataHora: '',
    origem: '',
    destino: '',
    valorPassagem: 0,
    equivalenteMilhas: 0,
    quantidadePoltronas: 0,
    estado: 'CONFIRMADO'
  };

  constructor(private router: Router) {}

  calcularMilhas() {
    // Exemplo de cálculo simples de milhas: 1 real = 10 milhas
    this.voo.equivalenteMilhas = this.voo.valorPassagem * 10;
  }

  cadastrarVoo() {
    // Aqui vai a lógica para salvar o voo no sistema (ex: chamada ao backend)
    console.log('Voo cadastrado:', this.voo);
    
    // Exemplo de redirecionamento ou lógica pós-cadastro
    this.router.navigate(['/voos']);
  }
}