
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienSomosComponent} from './components/quien-somos/quien-somos.component';
import { EnlacesInteresComponent } from './components/enlaces-interes/enlaces-interes.component';
import { AyudaComponent} from './components/ayuda/ayuda.component';
import { HerramientasComponent} from './components/herramientas/herramientas.component';
//Faltaría las herramientas, uno por cada itm del menu
const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quien-somos', component: QuienSomosComponent },
  { path: 'enlaces-interes', component: EnlacesInteresComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'herramientas', component: HerramientasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
