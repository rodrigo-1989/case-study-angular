import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../../interfaces/respuesta.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(producto:Producto): string {
    return producto.imagen ? producto.imagen: '../../../../assets/images/noProductImage.png';
  }

}
