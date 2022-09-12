import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Compra } from '../../../interfaces/respuesta.interface';

@Component({
  selector: 'app-tarjeta-carrito',
  templateUrl: './tarjeta-carrito.component.html',
  styles: [` .ml{ margin-left:4px } .redondeo{ border-radius:90px}   `]
})
export class TarjetaCarritoComponent{

  @Input() compra!: Compra;
  @Input() cargando: boolean = false;
  @Output() onIdBorrar: EventEmitter<string> = new EventEmitter();
  @Output() onCambiarCantidad: EventEmitter<Compra> = new EventEmitter();

  agregar(c:number){
    this.compra.cantidad += c;
    this.onCambiarCantidad.emit(this.compra);
  }

  eliminarCompra(id:string){
    this.onIdBorrar.emit(id);
  }
}
