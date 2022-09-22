import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../productos/service/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario, Pedido, Lc, Producto } from '../../../interfaces/respuesta.interface';

@Component({
  selector: 'app-pedido-detallado',
  templateUrl: './pedido-detallado.component.html',
  styles: [`.img-u{  width: 10%; height: 10%; border:10px;}.sombra{box-shadow:0px 0px 15px black;}
  .example-headers-align .mat-expansion-panel-header-description {
  justify-content: space-between;align-items: center;margin-left: 8px;}`
  ]
})
export class PedidoDetalladoComponent implements OnInit {

  constructor(private productoService: ProductosService, private idRoute: ActivatedRoute, private route: Router) { }
  usuario: Usuario = { id: '', name: '', username: '', password: '', email: '', image: '', intentos: 0, createAt: new Date(), roles: [], idImage: '', enabled: true }
  pedido: Pedido = { id: '', usuarioId: '', fechaCompra: new Date(), total: 0, status: '', listaCompra: { idProducto: '', precio: 0, cantidad: 0 } }
  productos: Producto[] = [];
  ngOnInit(): void {
    if (this.idRoute.snapshot.paramMap.get('id'))
      this.productoService.detallePedido(this.idRoute.snapshot.paramMap.get('id')!).subscribe(res => {
        this.usuario = res.usuario!;
        this.pedido = res.pedido!;
        this.productos = res.productos!;
      });
  }

  regresar() {
    this.route.navigateByUrl('/compras/pedido');
  }
}
