import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../Modelos/tarjeta';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  async ObtenerTarjetas(): Promise<Array<Tarjeta>> {
    try {
      const response: Array<any> = <Array<any>>await (this.http.get(this.urlService.ApiTarjeta).toPromise());
      return response.map(this.maperTarjeta);
    } catch (e) {
      console.error(e);
    }
  }

  AgregarTarjeta(tarjeta: Tarjeta) :Observable<Tarjeta> {
    return this.http.post<Tarjeta>(this.urlService.ApiAgregarTarjeta, tarjeta)
      .pipe(  
             
      );

  }





  maperTarjeta(data: any): Tarjeta {
    var unaTarjeta = new Tarjeta();
    unaTarjeta.Monto = data.Monto;
    unaTarjeta.Nombre = data.Nombre;
    unaTarjeta.FechaCierre = data.FechaCierre;
    unaTarjeta.FechaVencimiento = data.FechaVencimiento;
    return unaTarjeta;
  }
}
