import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IdName, ViajeFilter } from '../../models'
@Component({
  selector: 'app-viajes-filter',
  templateUrl: './viajes-filter.component.html',
  styleUrls: ['./viajes-filter.component.scss']
})
export class ViajesFilterComponent implements OnInit {

  filtro = {} as ViajeFilter;
  @Input() estados: IdName[] = [];
  @Output() buscar = new EventEmitter<ViajeFilter>();

  constructor() { }

  ngOnInit(): void {
  }

  buscarClick(value: any): void {
    this.buscar.emit(value);
  }

}
