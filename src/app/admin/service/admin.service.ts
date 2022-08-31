import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Usuario, Dto } from '../../interfaces/respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private baseUrl:string = environment.baseUrl;

  buscarUsuario(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/usuarios/${id}`)
  }
  editarImagen(usuario:Usuario,id:string):Observable<Dto>{
   const headers = {headers: new HttpHeaders({
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`
    })};
    return this.http.post<Dto>(`${this.baseUrl}/cloudinary/editarImagenU/${id}`,usuario, headers);
  }
  editarUsuario(usuario:Usuario,id:string):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/usuarios/${id}`,usuario)
  }
}
