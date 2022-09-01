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

  editarUsuario(usuario:Usuario,id:string):Observable<any>{
    return this.http.put<any>(`${this.baseUrl}/usuarios/${id}`,usuario)
  }
}
