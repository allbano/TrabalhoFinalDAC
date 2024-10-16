import { Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { InicialClienteComponent } from './pages/inicial-cliente/inicial-cliente.component';
import { ExtratoMilhasComponent } from './pages/cliente/extrato-milhas/extrato-milhas.component';
import { ComprarMilhasComponent } from './pages/cliente/comprar-milhas/comprar-milhas.component';
import { HomeClienteComponent } from './pages/cliente/home-cliente/home-cliente.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'autocadastro', component: AutocadastroComponent },
    { path: 'inicial-cliente', component: InicialClienteComponent },
    { path: 'extrato-milhas', component: ExtratoMilhasComponent },
    { path: 'comprar-milhas', component: ComprarMilhasComponent },
    //{ path: 'home-cliente', component: HomeClienteComponent},
];