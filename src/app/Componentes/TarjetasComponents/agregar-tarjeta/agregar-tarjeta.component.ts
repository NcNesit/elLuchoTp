import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/Modelos/tarjeta';
import { TarjetaService } from 'src/app/Servicios/tarjeta.service';

@Component({
  selector: 'agregar-tarjeta',
  templateUrl: './agregar-tarjeta.component.html',
  styleUrls: ['./agregar-tarjeta.component.css']
})
export class AgregarTarjetaComponent implements OnInit {

  constructor(private tarjetaService: TarjetaService) { }

  ngOnInit(): void {
  }

 AgregarTarjeta(){
    var tarjeta : Tarjeta = new Tarjeta();
    var date : Date = new Date();
    tarjeta.Nombre = "testingPost";
    tarjeta.Monto = 900;
    tarjeta.FechaCierre = date;
    tarjeta.FechaVencimiento = date;   
   this.tarjetaService.AgregarTarjeta(tarjeta).subscribe();;
  }
}
