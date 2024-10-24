import { Injectable } from '@angular/core';
import { Aeroporto } from '../models/aeroporto/aeroporto.model';

@Injectable({
  providedIn: 'root'
})
export class AeroportoService {

  Aeroportos: Array<Aeroporto> = [
    new Aeroporto ('CWB','Afonso Pena','Curitiba','PR'),
    new Aeroporto('GRU', 'Guarulhos', 'São Paulo', 'SP'),
    new Aeroporto('GIG', 'Galeão', 'Rio de Janeiro', 'RJ'),
    new Aeroporto('BSB', 'Presidente Juscelino Kubitschek', 'Brasília', 'DF'),
    new Aeroporto('POA', 'Salgado Filho', 'Porto Alegre', 'RS'),
    new Aeroporto('SSA', 'Deputado Luís Eduardo Magalhães', 'Salvador', 'BA'),
    new Aeroporto('REC', 'Gilberto Freyre', 'Recife', 'PE'),
    new Aeroporto('BEL', 'Val-de-Cans', 'Belém', 'PA'),
    new Aeroporto('MAO', 'Eduardo Gomes', 'Manaus', 'AM'),
    new Aeroporto('FOR', 'Pinto Martins', 'Fortaleza', 'CE')
  ];

  constructor() { }
}
