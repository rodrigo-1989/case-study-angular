import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { CResponse, Usuario } from '../interfaces/respuesta.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http:HttpClient) { }
  headers = {headers: new HttpHeaders({
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`
  })};
  private baseUrl = environment.baseUrl;
  private urlCloudinary = environment.urlCloudinary

  editarUsuario({name,username,password,email,image,idImage}:Usuario,id:string): Observable<any> {
    const body = { name,username,password,email,image,idImage } 
    return this.http.put<any>(`${this.baseUrl}/usuarios/${id}`,body,this.headers);
  }
  
  subirImagen(data:any):Observable<CResponse>{
    return this.http.post<CResponse>(this.urlCloudinary,data)
  }

  eliminarImagen(id:string):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/cloudinary/deleteImagen/${id}`,this.headers);
  }
}
