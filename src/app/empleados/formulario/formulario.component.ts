import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleados';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  empleado: IEmpleado = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha_nacimiento: '',
    sexo: ''
  }

  constructor(private empleadosService: EmpleadosService){}

  agregarEmpleado(){
    if(this.empleado.nombre.trim().length === 0){
      return;
    }

    if(this.empleado.correo.trim().length === 0){
      return;
    }

    if(this.empleado.telefono.trim().length === 0){
      return;
    }

    if(this.empleado.fecha_nacimiento.trim().length === 0){
      return;
    }

    if(this.empleado.sexo.trim().length === 0){
      return;
    }

    //Agregar empleado (llamamos el servio)
    this.empleadosService.agregarEmpleado(this.empleado);

    this.empleado = {
      nombre: '',
      correo: '',
      telefono: '',
      fecha_nacimiento: '',
      sexo: ''
    }
  }
}
