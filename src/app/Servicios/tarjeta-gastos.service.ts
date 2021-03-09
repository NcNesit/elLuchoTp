import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarjetaGastos } from '../Modelos/tarjeta-gastos';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class TarjetaGastosService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  async ObtenerGastos(): Promise<Array<TarjetaGastos>> {
    try {
      const response: Array<any> = <Array<any>>await (this.http.get(this.urlService.ApiTarjetaGastos).toPromise());
      return response.map(this.maperGastos);
    } catch (e) {
      console.error(e);
    }
  }

  maperGastos(data: any): TarjetaGastos {
    var gasto = new TarjetaGastos();
    gasto.cuota = data.Cuota;
    gasto.descripcion = data.Descripcion;
    gasto.monto = data.Monto;
    return gasto;

  }
}