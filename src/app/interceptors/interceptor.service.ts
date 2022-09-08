import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import Swal from 'sweetalert2';
import { AuthService } from '../auth/service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private baseUrl = environment.baseUrl;
  private urlCloudinary = environment.urlCloudinary
  constructor(private auntService: AuthService, private router: Router) { }
  rutasSinToken: string[] = [this.urlCloudinary, `${this.baseUrl}/oauth/token`,];
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.rutasSinToken.includes(req.url) && localStorage.getItem('token')) {
      const fechaAhora = new Date().getTime();
      if (fechaAhora > JSON.parse(localStorage.getItem('expires_in')!)) {
        this.auntService.refreshToken().subscribe(res => {
          if (res !== true) {
            localStorage.clear();
            this.router.navigateByUrl('/auth/login');
          }
        });
      }
      const headers = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')!)}`
        })
      };

      const reqClone = req.clone(headers!);
      return next.handle(reqClone).pipe(
        catchError(this.manejarError)
      );
    }
    return next.handle(req).pipe(
      catchError(this.manejarError)
    );
  }
  manejarError(error: any) {
    console.log('ERRRRRR=>', error)
    let err = 'Algo salio mal en el servidor, contactar al Administrador por favor';
    if (error.status === 0) err = 'El servidor no esta en linea, contactar al Administrador por favor';
    if (error.status === 400) {
      err = 'Revisa tu usuario y contraseña, alguna es incoreccta, recuerda que despues de 3 intentos seras bloqueado';
      if (error.error.error_description === 'User is disabled') err = 'Usuario bloqueado contactar al Administrador'
    }
    if (error.status === 401) err = 'Tu sesión expiro por favor ingresa nuevamente';
    if (error.status === 403) err = 'No estas autorizado para acceso a este recurso';
    if (error.status === 404) err = 'La liga que intentas acceder no es correcta';
    
    Swal.fire({
      title: 'Opsss!', text: err, icon: 'error', confirmButtonColor: '#3085d6', confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed)
        window.location.reload();
    });
    return throwError(error.message);
  }

}
