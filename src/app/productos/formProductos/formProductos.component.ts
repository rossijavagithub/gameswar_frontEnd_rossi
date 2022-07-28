import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Producto } from '../interface/producto';
import { Proveedor } from '../interface/proveedor';
import { ProductosService } from '../productos.service';





@Component({
  selector: 'app-form',
  templateUrl: './formProductos.component.html',
  styleUrls: ['./formProductos.component.css']
})
export class FormProductosComponent implements OnInit {

  producto:Producto =new Producto();
  proveedores:Proveedor[]=[];

  constructor(private servicio:ProductosService,
    private activateRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.servicio.getProvedores().subscribe(
      resp => this.proveedores =resp
    );
    this.activateRoute.paramMap.subscribe(
      params=>{
        let id =+params.get('id')!;
        if(id){
          this.servicio.getProductoId(id).subscribe(
            (resp) => this.producto=resp
          );
        }
      }
    );
  }

  compararRegion(o1:Proveedor,o2:Proveedor):boolean{
    if(o1===undefined && o2===undefined){
      return true;
    }
    return o1 ===null || o2===null || o1===undefined ||
     o2===undefined?false:o1.id===o2.id;
  }
  
  crear():void{
    console.log(this.producto);
    this.servicio.create(this.producto).subscribe(
      resp=>{
        swal('Nuevo cliente',`${this.producto.nombre} creado con éxito`,'success');
        this.router.navigate(['/productos']);
      },
      err=>{
        console.log('Codigo de error backend',err.status);
      }
    );
  }

  actualizar():void{
    console.log(this.producto);
    this.servicio.update(this.producto).subscribe(
      resp=>{
        swal('producto actualizado',`${this.producto.nombre} actualizado con éxito`,'success');
        this.router.navigate(['/productos']);
      },
      err=>{
        console.log('Codigo de error backend',err.status);
      }
    );
  }


















}
