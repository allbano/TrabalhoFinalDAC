export class Usuario {
  constructor(
    public id: number,
    public login: string,
    public senha: string, 
    public tipo: 'cliente' | 'funcionario'
  ) {}
}