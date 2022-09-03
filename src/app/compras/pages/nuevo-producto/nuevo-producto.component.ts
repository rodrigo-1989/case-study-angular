import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../interfaces/respuesta.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/productos/service/productos.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styles: [` .img{ border-radius:15%;width: 60%; height: 80%; }`
  ]
})
export class NuevoProductoComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    nombre: ['Bubu lubu', [Validators.required, Validators.minLength(3)]],
    precio: [8, [Validators.required, Validators.min(0)]],
    descripcion: ['Marinela', [Validators.required, Validators.minLength(3)]],
    existentes: [12, [Validators.min(0)]]
  })
  cargando: boolean = false;
  producto: Producto = { id: '', nombre: '', precio: 0, descripcion: '', existentes: 0, imagen: null, idImagen: null };
  files: File[] = [];
  foto: string = '';
  idFoto: string = '';
  cambiarImagen: boolean = false;

  constructor(private fb: FormBuilder, private prods: ProductosService, private router: Router, private idRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.idRoute.snapshot.paramMap.get('id')) {
      this.prods.listarUnProducto(this.idRoute.snapshot.paramMap.get('id')!)
        .subscribe(r => {
          this.producto = r.producto!;
          this.formulario.reset({
            nombre: this.producto.nombre, precio:
              this.producto.precio, descripcion: this.producto.descripcion, existentes: this.producto.existentes
          })
        });
    }
  }

  guardar(id: string) {
    this.cargando = true;
    this.producto.nombre = this.formulario.value.nombre;
    this.producto.precio = this.formulario.value.precio;
    this.producto.descripcion = this.formulario.value.descripcion;
    this.producto.existentes = this.formulario.value.existentes;
    if (this.cambiarImagen) {
      this.producto.imagen = this.foto;
      this.producto.idImagen = this.idFoto;
    }
    if (id) {

      this.prods.editarProducto(this.producto, id)
        .subscribe(resp => {
          if (resp.ok) {
            Swal.fire('Exito!', 'Producto editado con exito', 'success');
            this.router.navigate(['/compras/listar']);
          } else {
            Swal.fire('Error, ', resp.mensaje, 'error');
          }
          this.cargando = false;
        })
    } else {
      this.prods.crearProducto(this.producto)
        .subscribe(resp => {
          if (resp.ok) {
            Swal.fire('Exito!', 'Producto creado con exito', 'success');
            this.router.navigate(['/compras/listar']);
          } else {
            Swal.fire('Error, ', resp.mensaje, 'error');
          }
          this.cargando = false;
        })
    }
  }

  subirImagen() {
    this.cargando = true;
    if (!this.idFoto) {
      if (!this.files[0]) {
        this.cargando = false;
        return;
      }
      const file_data = this.files[0];
      const data = new FormData();
      data.append('file', file_data);
      data.append('upload_preset', 'g29k4pwe');
      data.append('cloud_name', 'djxpuwlz0');
      this.prods.subirImagen(data)
        .subscribe(res => {
          this.foto = res.url;
          this.idFoto = res.public_id;
          this.cargando = false;
        });
    } else {
      this.cargando = false;
    }
  }

  seleccionaImagen(event: any) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1)
      this.files.shift();
  }
  quitarImagen(f: File) {
    this.cargando = true;
    this.files.splice(this.files.indexOf(f), 1);
    if (this.idFoto)
      this.prods.eliminarImagen(this.idFoto).subscribe(console.log);
    this.foto = '';
    this.idFoto = '';
    this.cargando = false;
    this.cambiarImagen = false;
  }

  cambiar() {
    this.cambiarImagen = true;
  }
  cancelar(){
    this.router.navigate(['/admin/listar']);
  }

}
