export class Cliente {
  constructor(
    public cpf: string,
    public nome: string,
    public email: string,
    public ruaNumero: string,
    public complemento: string | null,
    public cep: string,
    public cidade: string,
    public estado: string,
    public milhas: number,
    public id?: number
  ) {}
}
