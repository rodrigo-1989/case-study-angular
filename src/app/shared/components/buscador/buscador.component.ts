import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from '../../../interfaces/respuesta.interface';
import { AuthService } from '../../../auth/service/auth.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent  {
productos:Producto[] = [];
  miFormulario: FormGroup = this.fb.group({
    nombre: ['']
  })
  constructor(private fb:FormBuilder,private authService:AuthService) { }

  buscar(){
    if(this.miFormulario.value.nombre){
      this.authService.listarParecidos(this.miFormulario.value.nombre).subscribe( res=>{
        this.productos = res.productos!;
      })
    }
  }
  opcionSelecionada( event:MatAutocompleteSelectedEvent){
    const producto:Producto = event.option.value;
    console.log(producto)
    this.miFormulario.reset({nombre:producto.nombre}); 
  }

}
