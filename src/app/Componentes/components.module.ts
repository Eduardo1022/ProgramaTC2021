import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderappComponent } from './headerapp/headerapp.component';
import { PieappComponent } from './pieapp/pieapp.component';
import { CarruselAppComponent } from './carrusel-app/carrusel-app.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';



@NgModule({
  declarations: [
    HeaderappComponent, 
    PieappComponent,
     CarruselAppComponent,
     FormularioLoginComponent,
    FormularioRegistroComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderappComponent,
    PieappComponent,
    FormularioLoginComponent,
    FormularioRegistroComponent,
    CarruselAppComponent
  ]
})
export class ComponentsModule { }
