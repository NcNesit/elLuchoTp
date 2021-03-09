import { Component, Input, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/Modelos/tarjeta';



@Component({
  selector: 'Tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() tarjeta: Tarjeta;

  

  constructor() { }

  ngOnInit(): void {
   
  }



}
