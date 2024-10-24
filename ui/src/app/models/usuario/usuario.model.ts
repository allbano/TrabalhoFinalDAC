export class Usuario {
  constructor(
    public login: string,
    public senha: string, 
    public tipo: 'cliente' | 'funcionario',
    public id?: number
  ) {}
}