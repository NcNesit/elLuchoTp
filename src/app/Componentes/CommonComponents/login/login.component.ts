import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Modelos/usuario';
import { UsuarioService } from '../../../Servicios/usuario.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService : UsuarioService) { }

  usuario: Usuario = null;

  ngOnInit(): void {
    
  }

 async obtenerUsuario(){
 this.usuario = await this.usuarioService.ObtenerUsuario();
 console.log(this.usuario);
  }
  

}
