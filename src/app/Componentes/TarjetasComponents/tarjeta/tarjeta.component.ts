import { Component, Input } from '@angular/core';
import { Tarjeta } from 'src/app/Modelos/tarjeta';

@Component({
  selector: 'Tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  @Input() tarjeta: Tarjeta;
}
