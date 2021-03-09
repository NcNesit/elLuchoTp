import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../Modelos/usuario';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  async ObtenerUsuario(): Promise<Usuario> {
    try {
      const response = <any>await (this.http.get(this.urlService.ApiObtenerUsuario).toPromise());
      return this.maperUsuario(response);
    } catch (e) {
      console.error(e);
    }
  }


  maperUsuario(data: any): Usuario {
  var usuario = new Usuario();
  usuario.Id = data.Id;
  usuario.Correo = data.Correo;
  usuario.Contraseña = data.Contraseña; 
  return usuario;
  }
}

