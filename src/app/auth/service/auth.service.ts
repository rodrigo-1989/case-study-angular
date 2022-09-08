import { Injectable, OnInit } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario, AuthUsuario, Dto } from '../../interfaces/respuesta.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  private _usuario: AuthUsuario = JSON.parse(localStorage.getItem('usuario')!);
  get usuario() {
    return this._usuario
  }

  login(user: string, pass: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', user);
    body.set('password', pass);
    body.set('grant_type', 'password');

    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      authorization: 'Basic ' + btoa('frontendapp' + ':' + 12345)
    });

    return this.http.post<any>(`${this.baseUrl}/oauth/token`, body.toString(), { headers })
      .pipe(
        tap(res => {
          if (res.access_token) {
            const { id, nombre, usuario, imagen, rol, email } = res;
            this._usuario = { id, nombre, usuario, imagen, rol, correo: email }
            localStorage.clear();
            localStorage.setItem('token', JSON.stringify(res.access_token));
            localStorage.setItem('refresh_token', JSON.stringify(res.refresh_token));
            const expiraEn = new Date().getTime()+((res.expires_in-10)*1000);
            localStorage.setItem('expires_in', JSON.stringify(expiraEn));
            localStorage.setItem('usuario', JSON.stringify(this._usuario));
          }
        }),
        map(res => res.access_token ? true : false)
      );
  }

  refreshToken(): Observable<any> {
    const body = new URLSearchParams();
    body.set('refresh_token', JSON.parse(localStorage.getItem('refresh_token')!));
    body.set('grant_type', 'refresh_token');
    const headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      authorization: 'Basic ' + btoa('frontendapp' + ':' + 12345)
    });
    return this.http.post<any>(`${this.baseUrl}/oauth/token`, body.toString(), { headers })
      .pipe(
        tap(res => {
          console.log(res)
          if (res.access_token) {
            const { id, nombre, usuario, imagen, rol, email } = res;
            this._usuario = { id, nombre, usuario, imagen, rol, correo: email }
            localStorage.clear();
            localStorage.setItem('token', JSON.stringify(res.access_token));
            localStorage.setItem('refresh_token', JSON.stringify(res.refresh_token));
            const expiraEn = new Date().getTime()+((res.expires_in-10)*1000);
            localStorage.setItem('expires_in', JSON.stringify(expiraEn));
            localStorage.setItem('usuario', JSON.stringify(this._usuario));
          }
        }),
        map(res => res.access_token ? true : false),
        catchError ( err => err )
      );
  }

  register({ name, username, email, password }: Usuario): Observable<any> {
    const body = { name, username, email, password }
    return this.http.post<any>(`${this.baseUrl}/usuarios/crear`, body);
  }

  logout() {
    localStorage.clear();
  }

  listarProductos(): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/productos`)
  }

  listarParecidos(query: string): Observable<Dto> {
    return this.http.get<Dto>(`${this.baseUrl}/productos/buscarParecidos/${query}`)
  }
}
