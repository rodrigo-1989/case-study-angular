import { Component, Input } from '@angular/core';
import { Producto } from '../../../interfaces/respuesta.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent {

  @Input()producto!:Producto;

}
