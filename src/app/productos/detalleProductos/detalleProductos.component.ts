import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Producto } from '../interface/producto';
import { ProductosService } from '../productos.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalleProductos.component.html',
  styleUrls: ['./detalleProductos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  producto!:Producto;
  fotoSeleccionada!:File;

  constructor(private servicio:ProductosService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe(
      params =>{
        let id:number =+params.get('id')!;
        if(id){
          this.servicio.getProductoId(id).subscribe(
            resp=> this.producto= resp
          );
        }
      }
     );
  }
seleccionarImagen(event:any){
  this.fotoSeleccionada=event.target.files[0];
  console.log(this.fotoSeleccionada);
}

subirImagen():void{
  if(!this.fotoSeleccionada){
    swal('Error','Debe seleccionar una imagen','error');
  }else{
    this.servicio.subirImagen(this.fotoSeleccionada,this.producto.id).subscribe( event=>{
      if(event.type===HttpEventType.Response){
        let response:any = event.body;
        this.producto = response.cliente as Producto;
        swal('La imagen se ha subido correctamente',response.mensaje,'success');
        }
      }
      );
    }
  }
}