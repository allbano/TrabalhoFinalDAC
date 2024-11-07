import { Routes } from '@angular/router';
import { AutocadastroComponent } from './pages/autocadastro/autocadastro.component';
import { InicialClienteComponent } from './pages/cliente/inicial-cliente/inicial-cliente.component';
import { ExtratoMilhasComponent } from './pages/cliente/extrato-milhas/extrato-milhas.component';
import { ComprarMilhasComponent } from './pages/cliente/comprar-milhas/comprar-milhas.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeFuncionarioComponent } from './pages/funcionario/home-funcionario/home-funcionario.component';
import { CrudFuncionarioComponent } from './pages/funcionario/crud-funcionario/crud-funcionario.component';
import { EfetuarReservaComponent } from './pages/cliente/efetuar-reserva/efetuar-reserva.component';
import { ConsultarReservaComponent } from './pages/cliente/consultar-reserva/consultar-reserva.component';
import { CheckInComponent } from './pages/cliente/check-in/check-in.component';
import { clienteGuard } from './shared/guards/cliente.guard';
import { funcionarioGuard } from './shared/guards/funcionario.guard';
import { CadastroVooComponent } from './pages/funcionario/cadastro-voo/cadastro-voo.component';
import { ConfirmarEmbarqueComponent } from './pages/funcionario/confirmar-embarque/confirmar-embarque.component';
import { InserirFuncionarioComponent } from './pages/funcionario/inserir-funcionario/inserir-funcionario.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'autocadastro', component: AutocadastroComponent },
    { path: 'home-cliente', component: InicialClienteComponent, canActivate: [clienteGuard] },
    { path: 'comprar-milhas', component: ComprarMilhasComponent, canActivate: [clienteGuard] },
    { path: 'extrato-milhas', component: ExtratoMilhasComponent, canActivate: [clienteGuard] },
    { path: 'efetuar-reserva', component: EfetuarReservaComponent, canActivate: [clienteGuard] },
    { path: 'consultar-reserva', component: ConsultarReservaComponent, canActivate: [clienteGuard] },
    { path: 'check-in', component: CheckInComponent, canActivate: [clienteGuard] },    
    { path: 'home-funcionario', component: HomeFuncionarioComponent, canActivate: [funcionarioGuard] },
    { path: 'crud-funcionario', component: CrudFuncionarioComponent, canActivate: [funcionarioGuard] },
    { path: 'cadastro-voo', component: CadastroVooComponent, canActivate: [funcionarioGuard] },
    { path: 'confirmar-embarque', component: ConfirmarEmbarqueComponent, canActivate: [funcionarioGuard] },
    { path: 'inserir-funcionario', component: InserirFuncionarioComponent, canActivate: [funcionarioGuard] }
];
