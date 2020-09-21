import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdName, Viaje, ViajeEstado, ViajeFilter, ViajeListItem } from '../models';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ToastrWrapperService } from './toastr-wrapper.service';
import { AuthService } from '../security-services';

@Injectable({
  providedIn: 'root'
})
export class ViajesModelService {

  private url = 'https://api-coches.herokuapp.com/viajes';

  constructor(private http: HttpClient, private toastrService: ToastrWrapperService) { }

  getViajesEstados(): IdName[] {
    return [
      {
        id: ViajeEstado.Abierto,
        name: 'Abierto'
      },
      {
        id: ViajeEstado.Cerrado,
        name: 'Cerrado'
      },
      {
        id: ViajeEstado.PostPuesto,
        name: 'Post-Puesto'
      }
    ];
  }

  filtrar(viajes: ViajeListItem[], filtro: ViajeFilter): ViajeListItem[] {
    if (!viajes) {
      return [];
    }

    let result: ViajeListItem[] = [];

    if (filtro) {

      result = viajes;

      if (filtro.estado) {
        // tslint:disable-next-line: triple-equals
        result = viajes.filter(x => x.estado == filtro.estado);
      }

      if (filtro.nombre) {
        result = viajes.filter(x => x.nombre.toLowerCase().includes(filtro.nombre.toLowerCase()))
      }

    } else {
      return viajes;
    }
    return result;
  }

  saveViaje(viaje: Viaje): Observable<Viaje> {
    if (viaje) {
      if (viaje.id) {
        return this.http.put<Viaje>(`${this.url}/${viaje.id}`, viaje)
          .pipe(
            map(x => new Viaje(x)),
            catchError(() => {
              this.toastrService.showMensajeError('El viaje no se ha podido modificar.');
              return of(null);
            })
          );
      } else {
        return this.http.post<Viaje>(`${this.url}/`, viaje)
          .pipe(
            map(x => new Viaje(x)),
            catchError(() => {
              this.toastrService.showMensajeError('El viaje no se ha podido insertar.');
              return of(null);
            })
          );
      }
    }

    return of(null);
  }

  getViaje(id: string): Observable<Viaje> {

    return this.http.get<any>(`${this.url}/${id}`)
      .pipe(
        map(x => new Viaje(x)),
        catchError(() => {
          this.toastrService.showMensajeError('El viaje no se ha podido cargar');
          return of(null);
        })
      );
  }

  getViajes(): Observable<ViajeListItem[]> {

    // const bearer = this.authService.getBearer();
    // const header = {
    //   headers: new HttpHeaders().set('Authorization', 'Bearer ' + bearer)
    // };

    return this.http.get<any[]>(this.url + '/special')
      .pipe(
        map(datos => datos.map(x => new ViajeListItem(x))),
        catchError(() => {
          this.toastrService.showMensajeError('Ha habido un problema al efectuar la busqueda');
          return of([]);
        })
      );
  }

  deleteViaje(id: string): Observable<any> {
    if (id) {
      return this.http.delete(`${this.url}/${id}`)
        .pipe(
          catchError(() => {
            this.toastrService.showMensajeError('El viaje que estas intentando borrar no existe.');
            return of(null);
          }));
    }
    return of(null);
  }


}
