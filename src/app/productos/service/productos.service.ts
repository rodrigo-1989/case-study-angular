import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dto, Producto, CResponse } from '../../interfaces/respuesta.interface';
import { Comprar } from '../pages/carrito/carrito.component';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService{

  constructor(private http: HttpClient) { }
     headers = {headers: new HttpHeaders({
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`
    })};
    private baseUrl = environment.baseUrl;
    private urlCloudinary = environment.urlCloudinary

  listarProductos(): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/productos`)
  }

  listarUnProducto(id:string): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/productos/${id}`)
  }

  comprarProductos(lista: Comprar[]): Observable<Dto> {
    return this.http.post<Dto>(`${this.baseUrl}/productos/compraUsuario`, lista,this.headers);
  }

  editarExistencia(lista: Comprar): Observable<Dto> {
    return this.http.put<Dto>(`${this.baseUrl}/productos/compraTiendaUno`, lista,this.headers);
  }

  eliminarProducto(id:string): Observable<Dto> {
    return this.http.delete<Dto>(`${this.baseUrl}/productos/${id}`,this.headers);
  }

  crearProducto({nombre,descripcion,precio,existentes}:Producto): Observable<Dto> {
    const body = { nombre,descripcion,precio,existentes }
    return this.http.post<Dto>(`${this.baseUrl}productos`,body,this.headers);
  }

  editarProducto({nombre,descripcion,precio,existentes}:Producto,id:string): Observable<Dto> {
    const body = { nombre,descripcion,precio,existentes } 
    return this.http.put<Dto>(`${this.baseUrl}/productos/${id}`,body,this.headers);
  }

  subirImagen(data:any):Observable<CResponse>{
    return this.http.post<CResponse>(this.urlCloudinary,data)
  }

  eliminarImagen(id:string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/cloudinary/deleteImagen/${id}`,this.headers);
  }
  editarImagen(producto:Producto,id:string):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/cloudinary/editarImagenP/${id}`,producto,this.headers);
  }
}
