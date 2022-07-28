import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from '../contenido/contacto/contacto.component';
import { InicioComponent } from '../contenido/inicio/inicio.component';
import { LoginComponent } from '../contenido/login/login.component';
import { NosotrosComponent } from '../contenido/nosotros/nosotros.component';
import { ServiciosComponent } from '../contenido/servicios/servicios.component';
import { TiendaComponent } from '../tienda/tienda.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'tienda',
    component:TiendaComponent
  },

  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
