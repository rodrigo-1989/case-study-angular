import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './components/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HomePageComponent
  ],
})
export class SharedModule { }
