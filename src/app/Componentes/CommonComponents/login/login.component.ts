import { Component } from '@angular/core';
import { Usuario } from '../../../Modelos/usuario';
import { UsuarioService } from '../../../Servicios/usuario.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Usuario = null;

  constructor(private usuarioService: UsuarioService) {
  }

  async obtenerUsuario(): Promise<void> {
    this.usuario = await this.usuarioService.ObtenerUsuario();
    console.log(this.usuario);
  }
}
