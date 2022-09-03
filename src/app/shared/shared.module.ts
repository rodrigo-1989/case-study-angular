import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedRoutingModule } from './shared-routing.module';



@NgModule({
  declarations: [
    ProductoComponent,
    BuscadorComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports:[
    ProductoComponent,
    BuscadorComponent,
    HomePageComponent,
  ],
})
export class SharedModule { }
