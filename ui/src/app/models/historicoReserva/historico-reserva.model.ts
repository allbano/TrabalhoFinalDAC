export class HistoricoReserva {
  constructor(
    public codigoReserva: string,
    public dataHoraAlteracao: Date,
    public estadoOrigem: string,
    public estadoDestino: string
  ) {}
}
