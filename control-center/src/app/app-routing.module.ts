import { ServicioComponent } from './pages/servicio/servicio.component';
import { AliasComponent } from './pages/alias/alias.component';
import { CanalesComponent } from './pages/canales/canales.component';
import { ModeracionComponent } from './pages/moderacion/moderacion.component';
import { CuentaComponent } from './pages/cuenta/cuenta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/cuenta', pathMatch: 'full'
  },
  {
    path: 'cuenta', component: CuentaComponent
  },
  {
    path: 'moderacion', component: ModeracionComponent
  },
  {
    path: 'canales', component: CanalesComponent
  },
  {
    path: 'alias', component: AliasComponent
  },
  {
    path: 'servicios', component: ServicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
