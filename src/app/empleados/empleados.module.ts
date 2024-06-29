import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FormularioComponent } from './formulario/formulario.component';
import { EmpleadosService } from './empleados.service';
import { ListadoEmpleadosComponent } from './listado-empleados/listado-empleados.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    FormularioComponent,
    ListadoEmpleadosComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports: [
    FormularioComponent,
    ListadoEmpleadosComponent,
    CabeceraComponent
  ],
  providers: [
    EmpleadosService
  ]
})
export class EmpleadosModule { }
