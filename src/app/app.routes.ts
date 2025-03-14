import { Routes } from '@angular/router';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { FormularioOrdenadorComponent } from './formulario-ordenador/formulario-ordenador.component';

export const routes: Routes = [
    
    
    {path:"paginacion",component:PaginacionComponent},
    {path:"formularioordenador", component: FormularioOrdenadorComponent}



];
