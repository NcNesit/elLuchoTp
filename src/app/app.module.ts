import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetasComponent } from './Componentes/TarjetasComponents/tarjetas/tarjetas.component';
import { TarjetaComponent } from './Componentes/TarjetasComponents/tarjeta/tarjeta.component';
import { AgregarTarjetaComponent } from './Componentes/TarjetasComponents/agregar-tarjeta/agregar-tarjeta.component';
import { LoginComponent } from './Componentes/CommonComponents/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './Componentes/CommonComponents/modal/modal.component';
import { TablaComponent } from './Componentes/CommonComponents/tabla/tabla.component';

@NgModule({
  declarations: [
    
    AppComponent,
    TarjetasComponent,
    TarjetaComponent,
    AgregarTarjetaComponent,
    LoginComponent,
    ModalComponent,
    TablaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
