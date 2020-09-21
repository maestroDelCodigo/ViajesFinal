import { Pipe, PipeTransform } from '@angular/core';
import { ViajeEstado } from './models';

@Pipe({
  name: 'viajeEstado'
})
export class ViajeEstadoPipe implements PipeTransform {

  transform(value: ViajeEstado): string {

    switch (+value) {
      case ViajeEstado.Abierto:
        return 'Hay Plazas';
      case ViajeEstado.Cerrado:
        return 'Vendido';
      case ViajeEstado.PostPuesto:
        return 'Aplazado';
      default:
        return 'Sin Informacion';
        break;
    }
  }

}
