import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { Compra } from '../../../interfaces/respuesta.interface';
import { ProductosService } from '../../service/productos.service';
export interface Comprar {
  id: string;
  cantidad: number;
}
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styles: [`.borde{border: PowderBlue 2px solid;
    border-radius: 20px;  } .mt{ margin-top:15px; }`
  ]
})
export class CarritoComponent implements OnInit, OnDestroy {
  compras: Compra[] = [];
  realizarCompra: Comprar[] = [];
  constructor(private ps: ProductosService) { }

  ngOnInit(): void {
    if (localStorage.getItem('arregloCompras')) {
      this.compras = JSON.parse(localStorage.getItem('arregloCompras')!);
      this.compras.forEach(el => {
        if (el.cantidad > el.existentes)
          el.cantidad = el.existentes
      });
    }
  }

  borrarCompra(id: string) {
    this.compras = this.compras.filter(el => el.id != id);
    localStorage.setItem('arregloCompras', JSON.stringify(this.compras));
  }
  cambiarCantidad(com:Compra){
    this.compras.forEach(c =>{
      if(c.id===com.id)
        c.cantidad = com.cantidad;
    });
    localStorage.setItem('arregloCompras', JSON.stringify(this.compras));
  }
  comprar() {
      this.compras.forEach(({id,cantidad}) => {
        this.realizarCompra.push({ id, cantidad: (cantidad * -1) });
      });
      this.ps.comprarProductos(this.realizarCompra)
        .subscribe(response => {
          if (response.ok) {
            localStorage.removeItem('arregloCompras');
            this.compras = [];
            Swal.fire('Compra exitosa!', response.mensaje, 'success');
          }
          else {
            Swal.fire('Error, ', response.mensaje, 'error');
          }
        });
  }

  ngOnDestroy(): void {
    localStorage.setItem('arregloCompras', JSON.stringify(this.compras));
  }
}
