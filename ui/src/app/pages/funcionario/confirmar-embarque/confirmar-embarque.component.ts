import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmar-embarque',
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './confirmar-embarque.component.html',
  styleUrl: './confirmar-embarque.component.scss'
})

export class ConfirmarEmbarqueComponent {
 
  assento = {
    numero: 0
  };

  ConfirmarEmbarque(): void {
    console.log(`embarque solicitado:`, this.assento.numero);
    // Lógica para confirmar embarque ou apontar erro caso nao encontre o assento
  }


}