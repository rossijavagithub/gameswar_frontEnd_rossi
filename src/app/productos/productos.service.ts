import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { Producto } from './interface/producto';
import { Proveedor } from './interface/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  urlBase:string="http://localhost:8087/api";

  constructor(private http:HttpClient) { }

//metodo para recuperar todos los productos
  getProducto():Observable<Producto[]>{
      return this.http.get(`${this.urlBase}/productos`).pipe
      (map((response)=> response as Producto[])
      );

  }
//metodo post para crear productos

  create(producto:Producto):Observable<Producto>{

    return this.http.post<Producto>(`${this.urlBase}/productos`,producto);

  }

//metood para buscar productos por id
  getProductoId(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.urlBase}/productos/${id}`);
  }
//actualizar productos
update(producto:Producto):Observable<Producto>{
  return this.http.put<Producto>(`${this.urlBase}/productos/${producto.id}`,producto);
}
//eliminar producto
delete(id:number):Observable<Producto>{
  return this.http.delete<Producto>(`${this.urlBase}/productos/${id}`);
}
//mostrar proveedor

getProvedores():Observable<Proveedor[]>{
  return this.http.get<Proveedor[]>(`${this.urlBase}/proveedores`);
}

//subir imagen

subirImagen(archivo:File,id:any):Observable<HttpEvent<any>>{
  let formData = new FormData();
  formData.append("archivo",archivo);
  formData.append("id",id);
  let httpHeaders= new HttpHeaders();
  const req = new HttpRequest('POST',`${this.urlBase}/productos/uploads`,formData,{headers:httpHeaders});
  return this.http.request(req).pipe(
    resp=>resp
  );

}


}
