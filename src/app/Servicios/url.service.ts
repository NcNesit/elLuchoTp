import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private readonly baseUrl = environment.apiUrl;
  public readonly ApiTarjeta = `${this.baseUrl}api/tarjeta`;
  public readonly ApiTarjetaGastos = `${this.baseUrl}api/tarjetaGastos`;
  public readonly ApiAgregarTarjeta = `${this.baseUrl}api/agregarTarjeta`;
  public readonly ApiObtenerUsuario = `${this.baseUrl}api/obtenerUsuario`;
  constructor() { }
}
