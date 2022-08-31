import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto, Compra } from '../../../interfaces/respuesta.interface';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styles: [
    `*{ margin: 15px; } 
`
  ]
})
export class ComprarComponent implements OnInit, OnDestroy {

  productos: Producto[] = [];
  arregloCompras: Compra[] = [];

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.listarProductos()
      .subscribe(resp => {
        this.productos = resp.productos;
      });
    if(localStorage.getItem('arregloCompras')){
      this.arregloCompras = JSON.parse ( localStorage.getItem('arregloCompras')! );
    }
  }

  agregarCompra({id,cantidad,foto,precio,nombre,existentes}: Compra) {
    let nuevaCompra = true;
    this.arregloCompras.forEach((el) => {
      if (el.id === id) {
        el.cantidad += cantidad;
        nuevaCompra = false;
      }
    });
    if (nuevaCompra)
      this.arregloCompras.push({ id, cantidad, foto,precio,nombre,existentes });
  }

  ngOnDestroy():void{
    localStorage.setItem('arregloCompras',JSON.stringify(this.arregloCompras));
  }

}