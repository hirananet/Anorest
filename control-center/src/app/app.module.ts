import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AliasComponent } from './pages/alias/alias.component';
import { CanalesComponent } from './pages/canales/canales.component';
import { ModeracionComponent } from './pages/moderacion/moderacion.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentaComponent,
    AliasComponent,
    CanalesComponent,
    ModeracionComponent,
    ServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
