import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, map, catchError, of } from 'rxjs';
import { Usuario } from '../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  headers = {
    headers: new HttpHeaders({
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`
    })
  };
  private baseUrl = environment.baseUrl;

  listarUsuario(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/usuarios`, this.headers)
      .pipe(
        map(res => res.usuarios? res:false),
        catchError(err => of(err))
      );
  }
  activarDesactivar(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/usuarios/${id}`, this.headers);
  }
  editarRoles(body: Usuario, id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/usuarios/editarRoles/${id}`, body, this.headers)
      .pipe(
        map(res => res.id),
        catchError(err => of(err))
      );
  }
}
