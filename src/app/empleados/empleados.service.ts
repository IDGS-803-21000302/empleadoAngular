import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() {    
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }

  private _empleados: IEmpleado[] = []

  //Accedemos a la lista clientes (es privada)
  get empleados(): IEmpleado[]{
    return this._empleados;
  }

  agregarEmpleado(empleado: IEmpleado){
    this._empleados.push(empleado)

    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(index: number): void {
    this._empleados.splice(index, 1);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }
  
}
