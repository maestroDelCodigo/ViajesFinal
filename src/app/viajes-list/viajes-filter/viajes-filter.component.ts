import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { IdName } from '../../models/id-name';
@Component({
  selector: 'app-viajes-filter',
  templateUrl: './viajes-filter.component.html',
  styleUrls: ['./viajes-filter.component.scss']
})
export class ViajesFilterComponent implements OnInit {
Input() estados: IdName[] = [];
Output() buscar: new EventEmitter<ViajeFilter>
  constructor() { }

  ngOnInit(): void {
  }
buscarClick(value: any): void{

}
}
