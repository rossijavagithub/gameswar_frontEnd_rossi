import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Producto } from '../interface/producto';
import { ProductosService } from '../productos.service';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenidoProductos.component.html',
  styleUrls: ['./contenidoProductos.component.css']
})
export class ContenidoProductosComponent implements OnInit {
  productos:Producto[]=[];
  imagenSrc:string="";
  constructor(private servicio:ProductosService) { }

  ngOnInit(): void {

    this.imagenSrc='assets/avatar2.jpg';

    this.servicio.getProducto().subscribe(
      resp => this.productos=resp
    );

  }

  delete(producto:Producto):void{

    swal({
      title:'Estas seguro?',
      text:`Seguro que desea eliminar al cliente ${producto.nombre} ${producto.descripcion}`,
      type:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Sí, eliminar!',
      cancelButtonText:'No,cancelar!',
      confirmButtonClass:'btn btn-success',
      cancelButtonClass:'btn btn-danger',
      buttonsStyling:false,
      reverseButtons:true
    }).then((result)=>{

      if(result.value){

        this.servicio.delete(producto.id).subscribe(
          resp =>{
            this.productos = this.productos.filter(pro =>pro !== producto)
            swal('Producto eliminado',`Producto ${producto.nombre} eliminado con éxito`,'success');
          }
        );
      }


    });











  }


}
