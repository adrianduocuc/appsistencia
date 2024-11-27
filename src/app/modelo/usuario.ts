import { curso } from "./curso";
import { perfil } from "./perfil";

export class usuario{
  static find(arg0: (user: { nombre: string; }) => boolean): any {
    throw new Error('Method not implemented.');
  }
    id : number | undefined;
    nombre : string | undefined;
    user : string | undefined;
    correo : string | undefined;
    tipoPerfil : number | undefined;
}
