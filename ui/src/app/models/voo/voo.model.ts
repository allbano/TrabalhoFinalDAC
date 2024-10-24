import { Aeroporto } from "../aeroporto/aeroporto.model";

export class Voo {
  constructor(
    public codigoVoo: string,
    public dataHora: Date,
    public origem: string,    // Aeroporto de origem
    public destino: string,   // Aeroporto de destino
    public valorPassagem: number, // Valor em reais
    public totalPoltronas: number,
    public poltronasOcupadas: number
  ) {}
}
