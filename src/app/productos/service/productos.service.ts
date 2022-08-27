import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dto, Producto, CResponse, TokenError } from '../../interfaces/respuesta.interface';
import { Comprar } from '../pages/carrito/carrito.component';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  headers = {
    headers: new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJKUiIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJpbWFnZW4iOiJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RqeHB1d2x6MC9pbWFnZS91cGxvYWQvdjE2NjA3NjIxNzYvajI1c2lrd2Njem5leTZxOHk0dzguanBnIiwidXN1YXJpbyI6IkpSIiwiZXhwIjoxNjYxNjI0MjIzLCJub21icmUiOiJKdWxpbyBSb2RyaWdvIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJqdGkiOiJmNTFlYzE5Ny00ZjJkLTRlYzYtYTc5My05NmU0ZWYxNTAxYWIiLCJjbGllbnRfaWQiOiJmcm9udGVuZGFwcCJ9.S46IfawOtb-Mf7Y34DA8QNllXHJQuDNddDkWSNA_z1U`
    })
  };
  listarProductos(): Observable<Dto> {
    return this.http.get<Dto>('http://localhost:8000/productos')
  }

  listarUnProducto(id:string): Observable<Dto> {
    return this.http.get<Dto>(`http://localhost:8000/productos/${id}`)
  }

  comprarProductos(lista: Comprar[]): Observable<Dto> {
    return this.http.post<Dto>(`http://localhost:8000/productos/compraUsuario`, lista,this.headers);
  }

  editarExistencia(lista: Comprar): Observable<Dto> {
    return this.http.put<Dto>(`http://localhost:8000/productos/compraTiendaUno`, lista,this.headers);
  }

  eliminarProducto(id:string): Observable<Dto> {
    return this.http.delete<Dto>(`http://localhost:8000/productos/${id}`,this.headers);
  }

  crearProducto({nombre,descripcion,precio,existentes}:Producto): Observable<Dto> {
    const body = { nombre,descripcion,precio,existentes }
    return this.http.post<Dto>(`http://localhost:8000/productos`,body,this.headers);
  }

  editarProducto({nombre,descripcion,precio,existentes}:Producto,id:string): Observable<Dto> {
    const body = { nombre,descripcion,precio,existentes }
    return this.http.put<Dto>(`http://localhost:8000/productos/${id}`,body,this.headers);
  }

  subirImagen(data:any):Observable<CResponse>{
    return this.http.post<CResponse>('https://api.cloudinary.com/v1_1/djxpuwlz0/image/upload',data)
  }

  eliminarImagen(id:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:8000/cloudinary/deleteImagen/${id}`,this.headers);
  }
  editarImagen(producto:Producto,id:string):Observable<any>{
    return this.http.post<any>(`http://localhost:8000/cloudinary/editarImagenU/${id}`,producto,this.headers);
  }
}
