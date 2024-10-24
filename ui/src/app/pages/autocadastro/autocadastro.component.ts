import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
import { Cliente } from '../../models/cliente/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgxMaskDirective,provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-autocadastro',
  standalone: true,
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.scss'],
  imports: [FormsModule,CommonModule,RouterModule,NgxMaskDirective],
  providers: [provideNgxMask()]
})
export class AutocadastroComponent {

  cpf: string = "";
  nome: string = "";
  email: string = "";
  ruaNumero: string = "";
  logradouro: string = "";
  numero: string = "";
  complemento: string = "";
  cep: string = "";
  cidade: string = "";
  estado: string = "";
  milhas: number = 0;
  cepError: string | null = null;
  loading: boolean = false; // Variável para controlar o estado de carregamento

  constructor(private clienteService: ClienteService,private router: Router, private userService: UserService) {}

  buscarEndereco(cep: string | null) {
    if (cep != "") {
      this.loading = true; // Inicia o carregamento
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response: { data: { erro: any; logradouro: string; complemento: string; localidade: string; uf: string; }; }) => {
        if (!response.data.erro) {
          this.cepError = null;
          this.logradouro = response.data.logradouro;
          this.complemento = response.data.complemento;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
        } else {
          this.cepError = "CEP não encontrado.";
        }
      })
      .catch((error: any) => {
        console.error(error);
        this.cepError = "Erro ao buscar o CEP.";
      })
      .finally(() => {
        this.loading = false; // Finaliza o carregamento, independentemente do resultado
      });
    }
  }

  onSubmit() {
    // Envio dos dados ao backend (a ser implementado)
    this.ruaNumero = `${this.logradouro} ${this.numero}`;

    const novoCliente: Cliente = {
      cpf: this.cpf,
      nome: this.nome,
      email: this.email,
      ruaNumero: this.ruaNumero,
      complemento: this.complemento,
      cep: this.cep,
      cidade: this.cidade,
      estado: this.estado,
      milhas: this.milhas,
    };

    this.clienteService.criarCliente(novoCliente).subscribe(
      (response) => {
        this.userService.criarUsuarioCliente(novoCliente.email);
        console.log('Cliente criado com sucesso:', response);
        alert('Seu cadastro foi realizado. Você receberá um e-mail contendo sua senha');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Erro ao criar o cliente:', error);
      }
    );    
  }
}
