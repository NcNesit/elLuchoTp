import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/Modelos/tarjeta';
import { TarjetaService } from 'src/app/Servicios/tarjeta.service';

@Component({
  selector: 'Tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  public tarjetas: Tarjeta[];

  constructor(public tarjetaService: TarjetaService) { }

  async ngOnInit(): Promise<void> {
    this.tarjetas = await this.tarjetaService.ObtenerTarjetas();
  }

}
