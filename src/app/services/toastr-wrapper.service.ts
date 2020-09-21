import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class ToastrWrapperService {

  constructor(private toastr: ToastrService) { }

  showMensajeOk(mensaje: string, titulo?: string): void {

    this.toastr.success(mensaje, titulo, {
      timeOut: 3000
    });
  }

  showMensajeError(mensaje: string, titulo?: string): void {

    this.toastr.error(mensaje, titulo, {
      timeOut: 3000
    });
  }

}
