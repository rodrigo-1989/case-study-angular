import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dto, Producto, CResponse } from '../../interfaces/respuesta.interface';
import { Comprar } from '../pages/carrito/carrito.component';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }
  private baseUrl = environment.baseUrl;
  private urlCloudinary = environment.urlCloudinary

  listarProductos(): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/productos`)
  }

  listarUnProducto(id: string): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/productos/${id}`)
  }

  comprarProductos(id: string, lista: Comprar[]): Observable<Dto> {
    return this.http.post<Dto>(`${this.baseUrl}/productos/compraUsuario/${id}`, lista);
  }

  editarExistencia(lista: Comprar): Observable<Dto> {
    return this.http.put<Dto>(`${this.baseUrl}/productos/compraTiendaUno`, lista);
  }

  eliminarProducto(id: string): Observable<Dto> {
    return this.http.delete<Dto>(`${this.baseUrl}/productos/${id}`);
  }

  crearProducto({ nombre, descripcion, precio, existentes, imagen, idImagen }: Producto): Observable<Dto> {
    return this.http.post<Dto>(`${this.baseUrl}/productos`, { nombre, descripcion, precio, existentes, imagen, idImagen });
  }

  editarProducto({ nombre, descripcion, precio, existentes, imagen, idImagen }: Producto, id: string): Observable<Dto> {
    return this.http.put<Dto>(`${this.baseUrl}/productos/${id}`, { nombre, descripcion, precio, existentes, imagen, idImagen });
  }

  subirImagen(data: any): Observable<CResponse> {
    return this.http.post<CResponse>(this.urlCloudinary, data)
  }

  eliminarImagen(id: string): Observable<Dto> {
    return this.http.delete<Dto>(`${this.baseUrl}/cloudinary/deleteImagen/${id}`);
  }

  pedidos(): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/pedidos`);
  }

  quitarPedido(id: string): Observable<Dto> {
    return this.http.put<Dto>(`${this.baseUrl}/pedidos/${id}`, {});
  }

  detallePedido(id: string): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/pedidos/detalle/${id}`);
  }

  pedidoPorUsuario(id: string): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/pedidos/pedidosPorUsuario/${id}`);
  }

  cancelarPedido(id: string): Observable<Dto> {
    return this.http.put<Dto>(`${this.baseUrl}/pedidos/cancelar/${id}`,{});
  }

}
