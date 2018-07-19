import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuCabeceraComponent } from './components/menu-cabecera/menu-cabecera.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienSomosComponent } from './components/quien-somos/quien-somos.component';
import { EnlacesInteresComponent } from './components/enlaces-interes/enlaces-interes.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuCabeceraComponent,
    InicioComponent,
    QuienSomosComponent,
    EnlacesInteresComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
