import { Postagem } from './Postagem';

export class User{
  public id: number
  public nome: string
  public usuario: string
  public senha: string
  public foto: string
  public tipo: string
  public postagem: Postagem[]
}
