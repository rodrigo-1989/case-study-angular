import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../../interfaces/respuesta.interface';
import { ProductosService } from '../../service/productos.service';
import { AuthService } from '../../../auth/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [`.sombra{box-shadow:0px 0px 15px black;}
  .example-headers-align .mat-expansion-panel-header-description {
  justify-content: space-between;align-items: center;margin-left: 8px;}`
  ]
})
export class PedidosComponent implements OnInit {

  get usuario() {
    return this.authService.usuario;
  }
  constructor(private route: Router, private ps: ProductosService, private authService: AuthService) { }
  pedidos: Pedido[] = [];
  ngOnInit(): void {
    this.ps.pedidoPorUsuario(this.usuario.id).subscribe(res => {
      this.pedidos = res.pedidos!;
    });
  }
  cancelarPedido(id: string) {
    this.ps.cancelarPedido(id).subscribe(res => {
      if (res.ok)
        Swal.fire('Cancelacion', res.mensaje!, 'success');
      this.ngOnInit();
    });
  }
}
