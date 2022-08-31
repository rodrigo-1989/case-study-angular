import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/service/auth.service';
import { Producto, Usuario } from './interfaces/respuesta.interface';
import { ProductosService } from './productos/service/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'case-study';
  isLoged:boolean = false;
  usuario: Usuario = {
    id: '', name: '', username: '', password: '', email: '',
    intentos: 0, image: '', createAt: new Date(), enabled: false, roles: [], idImage: ''};

  constructor(private productoService:ProductosService){
  }
  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      this.usuario = JSON.parse( localStorage.getItem('usuario')!);
    }
  }
  
  logout(){
    this.isLoged = false;
    localStorage.clear();
  }

  login(){
    this.isLoged = true;
  }
}
