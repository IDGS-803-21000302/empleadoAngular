import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleados';

@Component({
  selector: 'app-listado-empleados',
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css'
})
export class ListadoEmpleadosComponent {

  //inyección del servicio
  constructor(private empleadosService: EmpleadosService){}

  //lista de clientes
  get empleados(): IEmpleado[]{
    return this.empleadosService.empleados;
  }

  
  eliminarEmpleado(index: number): void {
    this.empleadosService.eliminarEmpleado(index);
  }

}
