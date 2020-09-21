import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdName, ViajeFilter, ViajeListItem } from '../models';
import { ViajesModelService } from '../services/viajes-model.service';
import { ToastrWrapperService } from '../services/toastr-wrapper.service';


@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss']
})
export class ViajesListComponent implements OnInit {


  estadodDeViaje: IdName[];
  viajes: ViajeListItem[] = [];
  viajesFiltrados: ViajeListItem[] = [];
  loading = false;

  constructor(private viajesModel: ViajesModelService, private router: Router,
    private tosstrService: ToastrWrapperService) { }

  ngOnInit(): void {
    this.estadodDeViaje = this.viajesModel.getViajesEstados();
    this.cargarViajes();
  }

  filtrarGrid(filtro: ViajeFilter): void {
    if (filtro) {
      this.viajesFiltrados = this.viajesModel.filtrar(this.viajes, filtro);
    }
  }

  borrar(value: ViajeListItem): void {
    if (value) {
      if (window.confirm('Esta seguro que desea eliminar el viaje')) {
        this.loading = true;
        this.viajesModel.deleteViaje(value.id).subscribe(x => {
          this.loading = false;
          if (x) {
            this.tosstrService.showMensajeOk('El viaje se ha eliminado correctamente', 'Eliminar viaje');
            this.cargarViajes();
          }
        });
      }
    }
  }

  editar(value: ViajeListItem): void {

    if (value) {
      this.router.navigate(['/viajes/detail/', value.id]);
    }
  }

  private cargarViajes(): void {
    this.loading = true;
    this.viajesModel.getViajes().subscribe(datos => {
      this.loading = false;
      if (datos) {
        this.viajes = datos;
        this.viajesFiltrados = [...datos];
      }
    });
  }

}
