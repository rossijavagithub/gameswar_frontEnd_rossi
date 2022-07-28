import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoProductosComponent } from './contenidoProductos/contenidoProductos.component';
import { DetalleProductosComponent } from './detalleProductos/detalleProductos.component';
import { FormProductosComponent } from './formProductos/formProductos.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContenidoProductosComponent,
    DetalleProductosComponent,
    FormProductosComponent
  ],
  exports:[
    DetalleProductosComponent,
    ContenidoProductosComponent,
    FormProductosComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ProductosModule { }
