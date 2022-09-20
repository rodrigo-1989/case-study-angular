import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map, catchError, of } from 'rxjs';
import { Usuario, Dto } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;

  listarUsuario(): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/usuarios`);
  }
  activarDesactivar(id: string): Observable<Dto> {
    return this.http.delete<Dto>(`${this.baseUrl}/usuarios/${id}`);
  }
  editarRoles(body: Usuario, id: string): Observable<Dto> {
    return this.http.put<Dto>(`${this.baseUrl}/usuarios/editarRoles/${id}`, body);
  }
}
