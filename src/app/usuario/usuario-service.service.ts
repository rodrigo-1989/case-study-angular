import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { CResponse, Usuario, Dto } from '../interfaces/respuesta.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(private http:HttpClient) { }
  private baseUrl = environment.baseUrl;
  private urlCloudinary = environment.urlCloudinary;

  editarUsuario({name,username,password,email,image,idImage}:Usuario,id:string): Observable<Dto> {
    const body = { name,username,password,email,image,idImage } 
    return this.http.put<Dto>(`${this.baseUrl}/usuarios/${id}`,body);
  }
  
  subirImagen(data:any):Observable<CResponse>{
    return this.http.post<CResponse>(this.urlCloudinary,data)
  }

  eliminarImagen(id:string):Observable<Dto>{
    return this.http.delete<Dto>(`${this.baseUrl}/cloudinary/deleteImagen/${id}`);
  }
}
