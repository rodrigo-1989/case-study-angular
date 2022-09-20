import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../productos/service/productos.service';
import { Producto } from '../../../interfaces/respuesta.interface';
import { Comprar } from '../../../productos/pages/carrito/carrito.component';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styles: [
  ]
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[] = [];
  editExis!: Comprar;
  cargando: boolean = false;


  constructor(private productoService: ProductosService,private router:Router) { }
  ngOnInit(): void {
    this.productoService.listarProductos()
      .subscribe(resp => {
        this.productos = resp.productos!;
      });
  }

  addRemove(id: string, cantidad: number) {
    this.productos.forEach(el => {
      if (el.id === id)
        el.existentes += cantidad;
    });
  }

  enviarCambio(producto: Producto) {
    this.cargando = true;
    this.editExis = {idProducto: producto.id!, cantidad: producto.existentes };
    this.productoService.editarExistencia(this.editExis)
      .subscribe(response => {
        if (response.ok) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Editado exitosamente',
            text: producto.nombre,
            showConfirmButton: false,
            imageUrl: producto.imagen!,
            imageWidth: 150,
            imageHeight: 150,
            timer: 2000
          })
        }
        else {
          Swal.fire('Error, ', response.mensaje!, 'error');
        }
        this.cargando = false;
      });
  }

  editar(producto: Producto) {
    this.router.navigate(['/compras/editar',producto.id]);
  }

  eliminar(producto: Producto) {
    this.cargando = true;
    Swal.fire({
      title: '¿Estas seguro de eliminar este producto?',
      imageUrl: producto.imagen!,
      imageWidth: 150,
      imageHeight: 150,
      text: producto.nombre,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminarProducto(producto.id!)
          .subscribe(res => {
            if (res.ok) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Eliminado exitosamente',
                text: producto.nombre + ' eliminado',
                timer: 2000
              });
              this.cargando = false;
              this.ngOnInit();
            } else {
              Swal.fire('Error, ', res.mensaje!, 'error');
              this.cargando = false;
              this.ngOnInit();
            }
          });
      }
    })
  }
}
