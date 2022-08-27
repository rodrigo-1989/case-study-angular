import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto, Compra } from '../../../interfaces/respuesta.interface';


@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styles: [` .ml{ margin-left:10px }`]
})
export class TarjetaProductoComponent {

  @Input() producto!: Producto;
  @Output() onNuevaCompra: EventEmitter<Compra> = new EventEmitter();

  compra: Compra = { id: '', cantidad: 0,foto:'',precio:0,nombre:'',existentes:0 };
  cantidad: number = 0;

  agregarAlCarrito(p:Producto) {
    this.compra.cantidad = this.cantidad;
    this.compra.id = p.id;
    this.compra.foto = p.imagen!;
    this.compra.precio = p.precio;
    this.compra.nombre = p.nombre;
    this.compra.existentes = p.existentes;
    
    this.onNuevaCompra.emit(this.compra);
    this.cantidad = 0;
  }
  agregar(cantidad: number) {
    this.cantidad += cantidad;
  }

}
