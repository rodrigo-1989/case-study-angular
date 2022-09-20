import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../productos/service/productos.service';
import { Pedido } from '../../../interfaces/respuesta.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styles: [
  ]
})
export class PedidoComponent implements OnInit {

  constructor(private productoService: ProductosService,private router:Router) { }
  pedidos: Pedido[] = [];
  ngOnInit(): void {
    this.productoService.pedidos().subscribe(res => {
      if (res.ok)
        this.pedidos = res.pedidos!;
      else
        Swal.fire('Upss!', res.mensaje!, 'error');
    });
  }

  quitarPedido(id: string) {
    this.productoService.quitarPedido(id).subscribe(res => {
      if (res.ok)
        Swal.fire('Felicidades', res.mensaje!, 'success');
      else
        Swal.fire('Upss!', res.mensaje!, 'error');
      this.ngOnInit();
    })
  }

  verDetalle(id:string){
    this.router.navigate(['/compras/pedido-detallado',id]);
  }

}
