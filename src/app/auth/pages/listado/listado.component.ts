import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Producto } from '../../../interfaces/respuesta.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  productos:Producto [] = [];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.listarProductos().subscribe( res => {
      if(res.ok){
        this.productos = res.productos!;
      }else{
        Swal.fire('Erro','Opss!'+res.mensaje,'error');
      }
    })
  }

}
