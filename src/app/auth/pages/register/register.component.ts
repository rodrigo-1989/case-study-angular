import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['rodrigo@hotmail.com', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, Validators.minLength(6)]],
    nombre: ['Julio Rodrigo', [Validators.required]],
    usuario: ['julioro', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private fb: FormBuilder) { }

  verificarPassword(){
    const pass1 = this.miFormulario.get('password')?.value;
    const pass2 = this.miFormulario.get('password2')?.value;
    if(pass1 === pass2){
      return this.miFormulario.get('password2')?.setErrors(null);
    }
    return this.miFormulario.get('password2')?.setErrors({noEsIgual: true});
  }
  registro() {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }
}
